export interface recipe {
  date_create: string | null;
  id: string;
  ingredients: string[];
  steps: string[];
  tags: string[] | null;
  time: string | null;
  title: string;
  tools: string[] | null;
  image: string | null;
}
