import "server-only";
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { cache } from "react";
import matter from "gray-matter";
import type { PostSummary, Project } from "./types";

const contentRoot = path.join(process.cwd(), "content");

function requiredString(data: Record<string, unknown>, key: string, file: string) {
  const value = data[key];
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`${file}: ${key} must be a nonempty string`);
  }
  return value;
}

function optionalString(data: Record<string, unknown>, key: string, file: string) {
  if (data[key] === undefined) return undefined;
  return requiredString(data, key, file);
}

function slugFromFile(file: string, extension: string) {
  const slug = file.slice(0, -extension.length);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new Error(`${file}: use a lowercase, hyphen-separated filename`);
  }
  return slug;
}

export const getPosts = cache(() => {
  const directory = path.join(contentRoot, "posts");
  return readdirSync(directory).filter((file) => file.endsWith(".md")).map((file) => {
    const slug = slugFromFile(file, ".md");
    const { data, content } = matter(readFileSync(path.join(directory, file), "utf8"));
    const date = requiredString(data, "date", file);
    const parsedDate = new Date(`${date}T00:00:00Z`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(parsedDate.getTime()) || parsedDate.toISOString().slice(0, 10) !== date) {
      throw new Error(`${file}: date must be a valid YYYY-MM-DD string`);
    }
    if (data.featured !== undefined && typeof data.featured !== "boolean") {
      throw new Error(`${file}: featured must be true or false`);
    }
    const image = requiredString(data, "image", file);
    if (!image.startsWith("/") || image.startsWith("//")) {
      throw new Error(`${file}: image must be a path inside public, starting with /`);
    }
    const summary: PostSummary = {
      slug,
      title: requiredString(data, "title", file),
      date,
      dateLabel: parsedDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }),
      image,
      alt: requiredString(data, "alt", file),
      excerpt: requiredString(data, "excerpt", file),
      category: optionalString(data, "category", file) ?? "Journal",
      featured: data.featured === true,
      readingMinutes: Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200)),
      href: `/posts/${slug}/`,
    };
    return { summary, content };
  }).sort((a, b) => b.summary.date.localeCompare(a.summary.date) || a.summary.slug.localeCompare(b.summary.slug));
});

export const getProjects = cache((): Project[] => {
  const directory = path.join(contentRoot, "projects");
  return readdirSync(directory).filter((file) => file.endsWith(".json")).map((file) => {
    const slug = slugFromFile(file, ".json");
    const data = JSON.parse(readFileSync(path.join(directory, file), "utf8"));
    const href = data.href ?? `/projects/${slug}/`;
    if (typeof href !== "string" || !(href.startsWith("/") && !href.startsWith("//")) && !/^https?:\/\//.test(href)) {
      throw new Error(`${file}: href must be a local path, an http(s) URL, or null`);
    }
    const image = optionalString(data, "image", file);
    if (image && (!image.startsWith("/") || image.startsWith("//"))) {
      throw new Error(`${file}: image must be a path inside public, starting with /`);
    }
    if (data.featured !== undefined && typeof data.featured !== "boolean") {
      throw new Error(`${file}: featured must be true or false`);
    }
    return {
      slug,
      image,
      alt: image ? requiredString(data, "alt", file) : undefined,
      category: optionalString(data, "category", file) ?? "Projects",
      featured: data.featured === true,
      specifications: optionalString(data, "specifications", file),
      number: requiredString(data, "number", file),
      year: requiredString(data, "year", file),
      title: requiredString(data, "title", file),
      description: requiredString(data, "description", file),
      href,
    };
  }).sort((a, b) => a.number.localeCompare(b.number) || a.slug.localeCompare(b.slug));
});
