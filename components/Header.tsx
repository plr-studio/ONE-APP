import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors, spacing, fontSize } from '../theme';

export function Header() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.logoRow}>
        <Text style={styles.logoMark}>1</Text>
        <Text style={styles.logoText}>
          ONE <Text style={styles.logoAccent}>UP</Text>
        </Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  logoMark: {
    color: colors.accent,
    fontSize: 36,
    fontWeight: '900',
    fontStyle: 'italic',
    lineHeight: 40,
  },
  logoText: {
    color: colors.textPrimary,
    fontSize: fontSize.heading,
    fontWeight: '900',
    fontStyle: 'italic',
  },
  logoAccent: {
    color: colors.accent,
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
