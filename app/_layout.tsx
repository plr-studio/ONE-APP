import React from 'react';
import { Stack } from 'expo-router';
import { colors } from '../theme';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        animation: 'fade',
        contentStyle: { backgroundColor: colors.background },
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
