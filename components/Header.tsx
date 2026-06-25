import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { LogoMark, LogoWordmark } from './BrandLogo';
import { colors, spacing } from '../theme';

export function Header() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.logoRow}>
        <LogoMark />
        <LogoWordmark />
      </View>

      <View style={styles.actions}>
        <Pressable style={styles.iconButton}>
          <Ionicons name="notifications-outline" size={23} color={colors.textSecondary} />
          <View style={styles.notificationDot} />
        </Pressable>
        <Pressable
          style={styles.avatar}
          onPress={() => router.push('/profile')}
          accessibilityRole="button"
          accessibilityLabel="Open profile"
        >
          <Ionicons name="person" size={18} color={colors.textPrimary} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    minHeight: 40,
    justifyContent: 'space-between',
  },
  logoRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.xs,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  iconButton: {
    alignItems: 'center',
    height: 36,
    justifyContent: 'center',
    position: 'relative',
    width: 36,
  },
  notificationDot: {
    backgroundColor: colors.danger,
    borderColor: colors.background,
    borderRadius: 4,
    borderWidth: 1,
    height: 8,
    position: 'absolute',
    right: 7,
    top: 7,
    width: 8,
  },
  avatar: {
    alignItems: 'center',
    backgroundColor: colors.surfaceAlt,
    borderColor: colors.border,
    borderWidth: 1,
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
  },
});
