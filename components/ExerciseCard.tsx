import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, radius, fontSize } from '../theme';
import { Exercise } from '../types';

interface ExerciseCardProps {
  exercise: Exercise;
  selected: boolean;
  onToggle: (id: string) => void;
}

export function ExerciseCard({ exercise, selected, onToggle }: ExerciseCardProps) {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri:
            exercise.image ??
            'https://via.placeholder.com/120x120/161A16/8A938A?text=Exercise',
        }}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.info}>
        <Text style={styles.name}>{exercise.name.toUpperCase()}</Text>
        <Text style={styles.meta}>
          {exercise.type} + {exercise.muscles.join(', ')}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => onToggle(exercise.id)}
        style={[styles.addButton, selected && styles.addButtonActive]}
        activeOpacity={0.7}
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.md,
    gap: spacing.md,
  },
  image: {
    width: 90,
    height: 70,
    borderRadius: radius.sm,
  },
  info: {
    flex: 1,
    gap: spacing.xs,
  },
  name: {
    color: colors.textPrimary,
    fontSize: fontSize.title,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  meta: {
    color: colors.textSecondary,
    fontSize: fontSize.caption,
    lineHeight: 16,
  },
  addButton: {
    width: 44,
    height: 44,
    borderRadius: radius.pill,
    backgroundColor: colors.accentDark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonActive: {
    backgroundColor: colors.accent,
  },
});
