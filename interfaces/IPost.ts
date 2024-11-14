export type IPost = {
  title: string;
  content: string;
  image: string;
  date: string;
  slug: string;
  category: ECategory;
  tags: string[];
};

export enum ECategory {
  TECH = "tech",
  HEALTH = "health",
  ENVIRONMENT = "environment",
  SCIENCE = "science",
  BUSINESS = "business",
}
