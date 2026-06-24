import React, { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fontSize, radius, spacing } from '../theme';

interface MetricCardProps {
  title: string;
  value: string;
  detail: string;
  icon?: ReactNode;
}

export function MetricCard({ title, value, detail, icon }: MetricCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {icon}
      </View>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.detail}>{detail}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radius.lg,
    borderWidth: 1,
    gap: spacing.xs,
    padding: spacing.lg,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.textPrimary,
    fontSize: fontSize.body,
    fontWeight: '800',
  },
  value: {
    color: colors.textPrimary,
    fontSize: 38,
    fontWeight: '900',
    letterSpacing: 0,
  },
  detail: {
    color: colors.textSecondary,
    fontSize: fontSize.caption,
  },
});
