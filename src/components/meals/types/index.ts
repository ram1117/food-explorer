export interface MealItemType {
  id: number;
  title: string;
  image: string;
  summary: string;
  creator: string;
  slug: string;
}

export interface MealDataType {
  title: string;
  image: any;
  summary: string;
  creator: string;
  slug?: string;
  creator_email: string;
  instructions: string;
}
