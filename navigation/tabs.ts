import { Ionicons } from '@expo/vector-icons';

export type TabRouteName =
  | 'index'
  | 'workout'
  | 'nutrition'
  | 'progress'
  | 'challenges';

export interface AppTabItem {
  route: TabRouteName;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  activeIcon: keyof typeof Ionicons.glyphMap;
}

export const APP_TABS: AppTabItem[] = [
  {
    route: 'index',
    label: 'Home',
    icon: 'home-outline',
    activeIcon: 'home',
  },
  {
    route: 'workout',
    label: 'Workout',
    icon: 'barbell-outline',
    activeIcon: 'barbell',
  },
  {
    route: 'nutrition',
    label: 'Nutrition',
    icon: 'restaurant-outline',
    activeIcon: 'restaurant',
  },
  {
    route: 'progress',
    label: 'Progress',
    icon: 'trending-up-outline',
    activeIcon: 'trending-up',
  },
  {
    route: 'challenges',
    label: 'Challenges',
    icon: 'trophy-outline',
    activeIcon: 'trophy',
  },
];
