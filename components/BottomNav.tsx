import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { APP_TABS } from '../navigation/tabs';
import { colors, spacing, fontSize } from '../theme';

export function BottomNav({ state, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const bottomOffset = Math.max(insets.bottom, spacing.md);

  return (
    <View pointerEvents="box-none" style={[styles.outer, { bottom: bottomOffset }]}>
      <View style={styles.container}>
        {APP_TABS.map((tab) => {
          const routeIndex = state.routes.findIndex(
            (route) => route.name === tab.route,
          );

          if (routeIndex === -1) {
            return null;
          }

          const route = state.routes[routeIndex];
          const isActive = state.index === routeIndex;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isActive && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          return (
            <Pressable
              key={tab.route}
              style={styles.tab}
              onPress={onPress}
              accessibilityRole="button"
              accessibilityState={isActive ? { selected: true } : {}}
            >
              <View
                style={[styles.indicator, isActive && styles.indicatorActive]}
              />
              <Ionicons
                name={isActive ? tab.activeIcon : tab.icon}
                size={24}
                color={isActive ? colors.accent : colors.textMuted}
              />
              <Text style={[styles.label, isActive && styles.labelActive]}>
                {tab.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    bottom: 0,
    left: 0,
    paddingHorizontal: spacing.sm,
    pointerEvents: 'box-none',
    position: 'absolute',
    right: 0,
  },
  container: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 999,
    borderWidth: 1,
    flexDirection: 'row',
    maxWidth: 520,
    minHeight: 72,
    overflow: 'hidden',
    paddingHorizontal: spacing.md,
    width: '100%',
  },
  tab: {
    alignItems: 'center',
    flex: 1,
    gap: spacing.xs,
    justifyContent: 'center',
    minWidth: 64,
  },
  indicator: {
    backgroundColor: 'transparent',
    height: 3,
    position: 'absolute',
    top: spacing.xs,
    width: 44,
  },
  indicatorActive: {
    backgroundColor: colors.accent,
  },
  label: {
    color: colors.textMuted,
    fontSize: fontSize.caption,
    fontWeight: '500',
  },
  labelActive: {
    color: colors.accent,
  },
});
