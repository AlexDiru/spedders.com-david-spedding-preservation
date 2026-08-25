export interface ArticleRef {
  subject: string;
  publication: string;
  date: string;
  slug: string;
  publicationName: string;
}

export interface Show {
  confId: string;
  title: string;
  articles: ArticleRef[];
}

export interface Section {
  id: string;
  title: string;
  shows: Show[];
}

export interface Article {
  title: string;
  image: string | null;
  body: string;
  slug: string;
}

export interface SiteData {
  publications: Record<string, { name: string }>;
  sections: Section[];
  articles: Record<string, Article>;
}
