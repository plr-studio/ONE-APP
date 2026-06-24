import React from 'react';
import { OverviewScreen } from './OverviewScreen';

export function ChallengesScreen() {
  return (
    <OverviewScreen
      title="Challenges"
      subtitle="Compete, earn, and level up."
      metrics={[
        {
          title: 'FITCOINS',
          value: '756',
          detail: 'Available balance',
          icon: 'cash',
        },
        {
          title: 'BADGES',
          value: '25',
          detail: 'Unlocked total',
          icon: 'ribbon',
        },
      ]}
      focusTitle="Ongoing Challenges"
      focusDetail="Challenge cards, leaderboard state, rewards, and streaks now have a stable tab route."
    />
  );
}
