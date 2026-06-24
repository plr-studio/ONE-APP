import { Exercise, FilterTag } from '../types';

// Hard-coded sample data so the screen works on its own.
// Later you'll swap this for data fetched from your API or database.

export const filterTags: FilterTag[] = [
  { id: 'chest', label: 'Chest' },
  { id: 'legs', label: 'Legs' },
  { id: 'hypertrophy', label: 'Hypertrophy' },
  { id: 'barbell', label: 'Barbell' },
  { id: 'upper', label: 'Upper Body' },
];

export const exercises: Exercise[] = [
  {
    id: '1',
    name: 'Barbell Bench Press',
    type: 'Compound',
    muscles: ['Pectorals', 'Triceps', 'Deltoids'],
  },
  {
    id: '2',
    name: 'High Bar Squat',
    type: 'Compound',
    muscles: ['Quads', 'Glutes', 'Core'],
  },
  {
    id: '3',
    name: 'Bent Over Row',
    type: 'Compound',
    muscles: ['Lats', 'Rhomboids', 'Biceps'],
  },
  {
    id: '4',
    name: 'Deadlift',
    type: 'Compound',
    muscles: ['Hamstrings', 'Glutes', 'Back'],
  },
  {
    id: '5',
    name: 'Overhead Press',
    type: 'Compound',
    muscles: ['Deltoids', 'Triceps', 'Upper Chest'],
  },
  {
    id: '6',
    name: 'Pull Up',
    type: 'Compound',
    muscles: ['Lats', 'Biceps', 'Core'],
  },
];
