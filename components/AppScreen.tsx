import React, { ReactNode } from 'react';
import {
  StyleProp,
  StatusBar,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from './Header';
import { colors, spacing } from '../theme';

interface AppScreenProps {
  children: ReactNode;
  contentStyle?: StyleProp<ViewStyle>;
  showHeader?: boolean;
}

export function AppScreen({
  children,
  contentStyle,
  showHeader = true,
}: AppScreenProps) {
  return (
    <SafeAreaView edges={['top']} style={styles.safe}>
      <StatusBar barStyle="light-content" />
      <View style={[styles.content, contentStyle]}>
        {showHeader && <Header />}
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    gap: spacing.md,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
    position: 'relative',
  },
});
