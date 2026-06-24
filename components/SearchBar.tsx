import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, radius, fontSize } from '../theme';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChangeText, placeholder }: SearchBarProps) {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color={colors.textMuted} />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder ?? 'Search exercises...'}
        placeholderTextColor={colors.textMuted}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    paddingHorizontal: spacing.lg,
    height: 48,
    gap: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  input: {
    flex: 1,
    color: colors.textPrimary,
    fontSize: fontSize.title,
  },
});
