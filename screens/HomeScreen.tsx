import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppScreen } from '../components/AppScreen';
import { MetricCard } from '../components/MetricCard';
import { colors, fontSize, radius, spacing } from '../theme';

export function HomeScreen() {
  return (
    <AppScreen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.titleRow}>
          <View>
            <Text style={styles.title}>Good Morning, User</Text>
            <Text style={styles.subtitle}>Ready to One UP today?</Text>
          </View>
          <View style={styles.levelPill}>
            <Text style={styles.levelText}>LEVEL 24</Text>
          </View>
        </View>

        <MetricCard
          title="FITNESS SCORE"
          value="742"
          detail="Builder Tier +18 this week"
          icon={<Ionicons name="radio-button-on" size={20} color={colors.accent} />}
        />

        <View style={styles.workoutCard}>
          <View style={styles.cardHeader}>
            <Ionicons name="barbell" size={18} color={colors.accent} />
            <Text style={styles.cardEyebrow}>Today's Workout</Text>
          </View>
          <Text style={styles.cardTitle}>Push Strength Day</Text>
          <Text style={styles.cardMeta}>46 min / Chest / Shoulders / Triceps / 4 exercises</Text>
          <Pressable style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Start Workout</Text>
          </Pressable>
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
  titleRow: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.textPrimary,
    fontSize: fontSize.heading,
    fontWeight: '900',
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: fontSize.body,
    marginTop: spacing.xs,
  },
  levelPill: {
    borderColor: colors.accent,
    borderRadius: radius.sm,
    borderWidth: 1,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  levelText: {
    color: colors.accent,
    fontSize: fontSize.caption,
    fontWeight: '900',
  },
  workoutCard: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radius.lg,
    borderWidth: 1,
    gap: spacing.sm,
    padding: spacing.lg,
  },
  cardHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
  },
  cardEyebrow: {
    color: colors.textPrimary,
    fontSize: fontSize.body,
    fontWeight: '700',
  },
  cardTitle: {
    color: colors.textPrimary,
    fontSize: fontSize.heading,
    fontWeight: '900',
  },
  cardMeta: {
    color: colors.textSecondary,
    fontSize: fontSize.caption,
  },
  primaryButton: {
    alignItems: 'center',
    backgroundColor: colors.accent,
    borderRadius: radius.md,
    marginTop: spacing.sm,
    paddingVertical: spacing.md,
  },
  primaryButtonText: {
    color: colors.background,
    fontSize: fontSize.body,
    fontWeight: '900',
  },
});
