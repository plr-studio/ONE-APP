import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors, spacing, radius, fontSize } from '../theme';
import { FilterTag } from '../types';

interface FilterChipsProps {
  tags: FilterTag[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export function FilterChips({ tags, selectedId, onSelect }: FilterChipsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.row}
    >
      {tags.map((tag) => {
        const active = tag.id === selectedId;
        return (
          <TouchableOpacity
            key={tag.id}
            onPress={() => onSelect(tag.id)}
            style={[styles.chip, active && styles.chipActive]}
            activeOpacity={0.7}
          >
            <Text style={[styles.label, active && styles.labelActive]}>
              {tag.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    gap: spacing.sm,
    paddingVertical: spacing.xs,
  },
  chip: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surfaceAlt,
  },
  chipActive: {
    borderColor: colors.accent,
    backgroundColor: 'transparent',
  },
  label: {
    color: colors.textSecondary,
    fontSize: fontSize.body,
    fontWeight: '500',
  },
  labelActive: {
    color: colors.accent,
  },
});
