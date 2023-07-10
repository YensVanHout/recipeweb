export interface recipe {
  Title: string;
  Ingredients: [string | undefined];
  Steps: [string | undefined];
  Tags: [string | undefined];
  Image?: File | undefined;
}
