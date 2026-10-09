export type PostSummary = {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  image: string;
  alt: string;
  excerpt: string;
  category: string;
  featured: boolean;
  readingMinutes: number;
  href: string;
};

export type Project = {
  slug: string;
  image?: string;
  alt?: string;
  category: string;
  featured: boolean;
  specifications?: string;
  number: string;
  year: string;
  title: string;
  description: string;
  href: string;
};
