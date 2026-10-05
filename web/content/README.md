# Editing posts and projects

Content is read at build time and exported as static pages. Add or edit files,
then commit and push them to trigger a new Cloudflare build. No database or
backend is required.

## Blog posts

Use Markdown (`.md`) in `content/posts/`. The filename becomes the URL:
`why-i-started-writing.md` appears at `/posts/why-i-started-writing/`.
Use lowercase filenames with words separated by hyphens.

Start each post with YAML front matter:

```markdown
---
title: "My next story"
date: "2026-10-06"
image: "/posts/my-next-story/cover.jpg"
alt: "Describe what the cover photograph shows"
excerpt: "A short introduction used in the homepage and post list."
featured: true
---

## A section title

Write paragraphs with **bold text**, *italics*, and [links](https://example.com).

![Describe the photograph](/posts/my-next-story/detail.jpg)

- One observation
- Another observation
```

Place those images in `public/posts/my-next-story/`. Public paths start with `/`
and omit `public`. The `image` field provides the article cover; Markdown images
appear inside the article. Use `##` for body headings because the template renders
the title as the page's `h1`.

Required fields: `title`, quoted `date` in YYYY-MM-DD format, `image`, `alt`, and
`excerpt`. `featured` is optional and defaults to false. The homepage shows the
three newest posts and a carousel of featured posts (or the three newest if none
are featured). Reading time is calculated from the body, at 200 words per minute.

Markdown supports headings, images, links, lists, quotations, code blocks, tables,
and task lists. Raw HTML is skipped; use Markdown rather than `.html` files.
Content files are written by the repository's authors and are not user uploads.

The three existing homepage examples now have editable Markdown files. Start
with `posts/why-i-started-writing.md` for a simple example of formatting and images.
Their short bodies are sample content; replace them with your own writing.

## Projects

Each project has a JSON file in `content/projects/`. Its filename becomes the
local detail page URL. For example:

```json
{
  "number": "04",
  "year": "2026",
  "title": "My application",
  "description": "What the project does and why I made it.",
  "href": "https://github.com/your-name/your-project"
}
```

Set `href` to your deployed website, web app, GitHub repository, or a local path.
Use an `https://` URL for external destinations. Set it to `null` (or omit it) to
link to the local detail page until an external destination is available. The
existing examples use this fallback rather than invented external URLs.

Projects are ordered by `number`. The homepage shows the first three, while
`/projects/` lists all projects. Keep numbers and years as quoted strings.

## Verification

From `web/`, run `npm run lint` and `npm run build`. The output contains
`out/posts/index.html`, an `index.html` for each post, and equivalent project
pages. Unknown slugs return the static 404 page.
