import React, { useState, useMemo } from 'react';
import {
  Text,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import { colors, spacing, fontFamily } from '../theme';
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
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const visibleExercises = useMemo(() => {
    const q = search.trim().toLowerCase();
    return allExercises.filter((exercise) => {
      const matchesFilter =
        activeFilter === 'all' || exercise.tags.includes(activeFilter);

      const searchableText = [
        exercise.name,
        exercise.type,
        exercise.muscles.join(' '),
        exercise.tags.join(' '),
      ]
        .join(' ')
        .toLowerCase();

      const matchesSearch = !q || searchableText.includes(q);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

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
      <Text allowFontScaling={false} style={styles.screenTitle}>
        BUILD YOUR WORKOUT
      </Text>

      <SearchBar
        value={search}
        onChangeText={setSearch}
        placeholder="Search 800+ exercises..."
      />

      <View style={styles.resultsArea}>
        <FlatList
          data={visibleExercises}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          style={styles.exerciseList}
          contentContainerStyle={[
            styles.list,
            selectedIds.size === 0 && styles.listWithoutSelection,
          ]}
          ListEmptyComponent={
            <Text allowFontScaling={false} style={styles.empty}>
              No exercises match your search.
            </Text>
          }
        />

        <View style={styles.filterLayer}>
          <FilterChips
            tags={filterTags}
            selectedId={activeFilter}
            onSelect={setActiveFilter}
          />
        </View>
      </View>

      {selectedIds.size > 0 && (
        <View style={styles.floatingBar}>
          <SelectionBar
            count={selectedIds.size}
            estimatedMinutes={selectedIds.size * MINUTES_PER_EXERCISE}
            onStart={handleStart}
          />
        </View>
      )}
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screenTitle: {
    color: colors.textPrimary,
    fontFamily: fontFamily.display,
    fontSize: 32,
    letterSpacing: 0,
    lineHeight: 36,
    textAlign: 'center',
  },
  resultsArea: {
    flex: 1,
    marginHorizontal: -spacing.xs,
    position: 'relative',
  },
  exerciseList: {
    flex: 1,
  },
  list: {
    gap: spacing.md,
    paddingBottom: 260,
    paddingHorizontal: spacing.xs,
    paddingTop: 68,
  },
  listWithoutSelection: {
    paddingBottom: 140,
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
    bottom: 140,
  },
  filterLayer: {
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 2,
  },
});
