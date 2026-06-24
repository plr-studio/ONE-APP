import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppScreen } from '../components/AppScreen';
import { MetricCard } from '../components/MetricCard';
import { colors, fontSize, radius, spacing } from '../theme';

interface OverviewMetric {
  title: string;
  value: string;
  detail: string;
  icon: keyof typeof Ionicons.glyphMap;
}

interface OverviewScreenProps {
  title: string;
  subtitle: string;
  metrics: OverviewMetric[];
  focusTitle: string;
  focusDetail: string;
}

export function OverviewScreen({
  title,
  subtitle,
  metrics,
  focusTitle,
  focusDetail,
}: OverviewScreenProps) {
  return (
    <AppScreen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.titleRow}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
          <View style={styles.levelPill}>
            <Text style={styles.levelText}>LEVEL 24</Text>
          </View>
        </View>

        <View style={styles.metricGrid}>
          {metrics.map((metric) => (
            <MetricCard
              key={metric.title}
              title={metric.title}
              value={metric.value}
              detail={metric.detail}
              icon={<Ionicons name={metric.icon} size={20} color={colors.accent} />}
            />
          ))}
        </View>

        <View style={styles.focusCard}>
          <View style={styles.focusHeader}>
            <Ionicons name="sparkles" size={20} color={colors.accent} />
            <Text style={styles.focusTitle}>{focusTitle}</Text>
          </View>
          <Text style={styles.focusDetail}>{focusDetail}</Text>
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
  metricGrid: {
    gap: spacing.md,
  },
  focusCard: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radius.lg,
    borderWidth: 1,
    gap: spacing.sm,
    padding: spacing.lg,
  },
  focusHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
  },
  focusTitle: {
    color: colors.textPrimary,
    fontSize: fontSize.title,
    fontWeight: '800',
  },
  focusDetail: {
    color: colors.textSecondary,
    fontSize: fontSize.body,
    lineHeight: 20,
  },
});
