// Shared type definitions. Define your data shapes once here and import
// them anywhere. This is what makes TypeScript catch mistakes for you.

export interface Exercise {
  id: string;
  name: string;
  type: string;          // e.g. "Compound"
  muscles: string[];     // e.g. ["Pectorals", "Triceps", "Deltoids"]
  image?: string;        // optional illustration url; falls back to a placeholder
}

export interface FilterTag {
  id: string;
  label: string;
}
