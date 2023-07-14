export interface recipe {
  _id?: string;
  title: string;
  ingredients: [string | undefined];
  steps: [string | undefined];
  tags: [string | undefined];
  image?: File | undefined;
}
