export type PostSummary = {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  image: string;
  alt: string;
  excerpt: string;
  featured: boolean;
  readingMinutes: number;
  href: string;
};

export type Project = {
  slug: string;
  number: string;
  year: string;
  title: string;
  description: string;
  href: string;
};
