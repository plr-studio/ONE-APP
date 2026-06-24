import React, { useState, useMemo } from 'react';
import {
  Text,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import { colors, spacing, fontSize } from '../theme';
import { exercises as allExercises, filterTags } from '../data/exercises';
import { Exercise } from '../types';

import { AppScreen } from '../components/AppScreen';
import { SearchBar } from '../components/SearchBar';
import { FilterChips } from '../components/FilterChips';
import { ExerciseCard } from '../components/ExerciseCard';
import { SelectionBar } from '../components/SelectionBar';

const MINUTES_PER_EXERCISE = 10;

export function WorkoutScreen() {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState<string | null>('hypertrophy');
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const visibleExercises = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return allExercises;
    return allExercises.filter((e) => e.name.toLowerCase().includes(q));
  }, [search]);

  const toggleExercise = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleStart = () => {
    const chosen = allExercises.filter((e) => selectedIds.has(e.id));
    console.log('Starting workout with:', chosen.map((e) => e.name));
  };

  const renderItem = ({ item }: { item: Exercise }) => (
    <ExerciseCard
      exercise={item}
      selected={selectedIds.has(item.id)}
      onToggle={toggleExercise}
    />
  );

  return (
    <AppScreen>
      <Text style={styles.screenTitle}>BUILD YOUR WORKOUT</Text>

      <SearchBar
        value={search}
        onChangeText={setSearch}
        placeholder="Search 800+ exercises..."
      />

      <FilterChips
        tags={filterTags}
        selectedId={activeFilter}
        onSelect={(id) =>
          setActiveFilter((curr) => (curr === id ? null : id))
        }
      />

      <FlatList
        data={visibleExercises}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.empty}>No exercises match your search.</Text>
        }
      />

      <View style={styles.floatingBar}>
        <SelectionBar
          count={selectedIds.size}
          estimatedMinutes={selectedIds.size * MINUTES_PER_EXERCISE}
          onStart={handleStart}
        />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screenTitle: {
    color: colors.textPrimary,
    fontSize: fontSize.title,
    fontWeight: '800',
    letterSpacing: 1,
    textAlign: 'center',
  },
  list: {
    gap: spacing.md,
    paddingBottom: 150,
  },
  empty: {
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: spacing.xl,
  },
  floatingBar: {
    position: 'absolute',
    left: spacing.lg,
    right: spacing.lg,
    bottom: 36,
  },
});
