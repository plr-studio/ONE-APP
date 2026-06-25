// Shared type definitions. Define your data shapes once here and import
// them anywhere. This is what makes TypeScript catch mistakes for you.

export interface Exercise {
  id: string;
  name: string;
  type: string;
  muscles: string[];
  tags: string[];
  image?: string;
}

export interface FilterTag {
  id: string;
  label: string;
}
