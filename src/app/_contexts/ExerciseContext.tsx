'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ExerciseContextType {
  removedExercises: number;
  removeExercise: () => void;
}

const ExerciseContext = createContext<ExerciseContextType | undefined>(undefined);

export function ExerciseProvider({ children }: { children: ReactNode }) {
  const [removedExercises, setRemovedExercises] = useState(0);

  const removeExercise = () => {
    setRemovedExercises(prev => prev + 1);
  };

  return (
    <ExerciseContext.Provider value={{ removedExercises, removeExercise }}>
      {children}
    </ExerciseContext.Provider>
  );
}

export function useExercise() {
  const context = useContext(ExerciseContext);
  if (context === undefined) {
    throw new Error('useExercise must be used within an ExerciseProvider');
  }
  return context;
}
