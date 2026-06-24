import React from 'react';
import { OverviewScreen } from './OverviewScreen';

export function NutritionScreen() {
  return (
    <OverviewScreen
      title="Nutrition"
      subtitle="Fuel today with precision."
      metrics={[
        {
          title: 'CALORIES',
          value: '982',
          detail: 'Remaining today',
          icon: 'flame',
        },
        {
          title: 'HYDRATION',
          value: '2.8L',
          detail: '3.5L daily goal',
          icon: 'water',
        },
      ]}
      focusTitle="Food Log"
      focusDetail="Breakfast, lunch, dinner, hydration, and macro tracking now have a routed home."
    />
  );
}
