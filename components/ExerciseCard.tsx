import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, radius, fontSize, fontFamily } from '../theme';
import { Exercise } from '../types';

interface ExerciseCardProps {
  exercise: Exercise;
  selected: boolean;
  onToggle: (id: string) => void;
}

export function ExerciseCard({ exercise, selected, onToggle }: ExerciseCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.imagePlaceholder}>
        <Ionicons name="barbell-outline" size={28} color={colors.accent} />
      </View>

      <View style={styles.info}>
        <Text allowFontScaling={false} style={styles.name}>
          {exercise.name.toUpperCase()}
        </Text>
        <Text allowFontScaling={false} style={styles.meta}>
          {exercise.type} + {exercise.muscles.join(', ')}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => onToggle(exercise.id)}
        style={[styles.addButton, selected && styles.addButtonActive]}
        activeOpacity={0.7}
        accessibilityRole="button"
        accessibilityLabel={`${selected ? 'Remove' : 'Select'} ${exercise.name}`}
      >
        <Ionicons
          name={selected ? 'checkmark' : 'add'}
          size={24}
          color={selected ? colors.background : colors.accent}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radius.lg,
    borderWidth: 1,
    flexDirection: 'row',
    gap: spacing.md,
    minHeight: 108,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.lg,
  },
  imagePlaceholder: {
    alignItems: 'center',
    backgroundColor: colors.surfaceAlt,
    borderRadius: radius.sm,
    height: 68,
    justifyContent: 'center',
    width: 76,
  },
  info: {
    flex: 1,
    gap: spacing.xs,
  },
  name: {
    color: colors.textPrimary,
    fontFamily: fontFamily.display,
    fontSize: 24,
    letterSpacing: 0,
    lineHeight: 27,
  },
  meta: {
    color: colors.textSecondary,
    fontSize: fontSize.caption,
    fontWeight: '600',
    lineHeight: 18,
  },
  addButton: {
    alignItems: 'center',
    backgroundColor: colors.accentDark,
    borderRadius: radius.pill,
    height: 48,
    justifyContent: 'center',
    width: 48,
  },
  addButtonActive: {
    backgroundColor: colors.accent,
  },
});
