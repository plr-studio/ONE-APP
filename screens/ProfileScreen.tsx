import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppScreen } from '../components/AppScreen';
import { colors, fontSize, radius, spacing } from '../theme';

const PROFILE_ITEMS = [
  { icon: 'person', label: 'Personal Information' },
  { icon: 'shield-checkmark', label: 'Account Settings' },
  { icon: 'card', label: 'Plan & Subscription' },
  { icon: 'settings', label: 'Settings' },
  { icon: 'help-circle', label: 'Help & Support' },
] as const;

export function ProfileScreen() {
  return (
    <AppScreen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.hero}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={44} color={colors.textPrimary} />
          </View>
          <View style={styles.profileText}>
            <Text style={styles.name}>USER</Text>
            <Text style={styles.level}>LEVEL 24</Text>
            <View style={styles.progressTrack}>
              <View style={styles.progressFill} />
            </View>
            <Text style={styles.tier}>FITNESS BUILDER TIER I</Text>
          </View>
        </View>

        <View style={styles.menu}>
          {PROFILE_ITEMS.map((item) => (
            <View key={item.label} style={styles.menuItem}>
              <Ionicons name={item.icon} size={24} color={colors.accent} />
              <Text style={styles.menuText}>{item.label}</Text>
            </View>
          ))}
          <View style={[styles.menuItem, styles.logout]}>
            <Text style={styles.logoutText}>LOG OUT</Text>
          </View>
        </View>
      </ScrollView>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    gap: spacing.md,
    paddingBottom: spacing.xxl,
  },
  hero: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radius.lg,
    borderWidth: 1,
    flexDirection: 'row',
    gap: spacing.xl,
    padding: spacing.xl,
  },
  avatar: {
    alignItems: 'center',
    backgroundColor: colors.surfaceAlt,
    borderRadius: 50,
    height: 100,
    justifyContent: 'center',
    width: 100,
  },
  profileText: {
    flex: 1,
    gap: spacing.xs,
  },
  name: {
    color: colors.textPrimary,
    fontSize: fontSize.display,
    fontWeight: '900',
  },
  level: {
    color: colors.textSecondary,
    fontSize: fontSize.body,
    fontWeight: '700',
  },
  progressTrack: {
    backgroundColor: colors.textMuted,
    borderRadius: radius.pill,
    height: 5,
    overflow: 'hidden',
  },
  progressFill: {
    backgroundColor: colors.accent,
    height: '100%',
    width: '58%',
  },
  tier: {
    color: colors.accent,
    fontSize: fontSize.title,
    fontWeight: '900',
  },
  menu: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radius.lg,
    borderWidth: 1,
    gap: spacing.sm,
    padding: spacing.md,
  },
  menuItem: {
    alignItems: 'center',
    borderColor: colors.border,
    borderRadius: radius.lg,
    borderWidth: 1,
    flexDirection: 'row',
    gap: spacing.lg,
    minHeight: 58,
    paddingHorizontal: spacing.lg,
  },
  menuText: {
    color: colors.textPrimary,
    fontSize: fontSize.title,
    fontWeight: '700',
  },
  logout: {
    borderColor: colors.danger,
    justifyContent: 'center',
  },
  logoutText: {
    color: colors.danger,
    fontSize: fontSize.body,
    fontWeight: '900',
  },
});
