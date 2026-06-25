import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, spacing, radius, fontSize, fontFamily } from '../theme';

interface SelectionBarProps {
  count: number;
  estimatedMinutes: number;
  onStart: () => void;
}

export function SelectionBar({ count, estimatedMinutes, onStart }: SelectionBarProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text allowFontScaling={false} style={styles.count}>
          {count} Exercise{count === 1 ? '' : 's'} Selected
        </Text>
        <Text allowFontScaling={false} style={styles.subtitle}>
          {estimatedMinutes} mins (Est.)
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.button, count === 0 && styles.buttonDisabled]}
        onPress={onStart}
        disabled={count === 0}
        activeOpacity={0.8}
      >
        <Text allowFontScaling={false} style={styles.buttonText}>
          START WORKOUT
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  count: {
    color: colors.textPrimary,
    fontSize: fontSize.title,
    fontWeight: '900',
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: fontSize.caption,
    marginTop: 2,
  },
  button: {
    backgroundColor: colors.accent,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: radius.pill,
  },
  buttonDisabled: {
    opacity: 0.4,
  },
  buttonText: {
    color: colors.background,
    fontFamily: fontFamily.display,
    fontSize: 22,
    letterSpacing: 0,
  },
});
