import { useState, useCallback } from 'react';
import { FilterState } from '../api/types/dto';

export const useFilter = (initial?: { 
  initialCategory?: string; 
  initialService?: string 
}) => {
  const [filters, setFilters] = useState<FilterState>({
    experience: [],
    rating: [],
    gender: '',
    location: '',
    category: initial?.initialCategory || '',
    service: initial?.initialService || '',
  });

  const updateFilter = useCallback((type: keyof FilterState, value: any) => {
    setFilters(prev => ({
      ...prev,
      [type]: value
    }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters({
      experience: [],
      rating: [],
      gender: '',
      location: '',
      category: initial?.initialCategory || '',
      service: initial?.initialService || '',
    });
  }, [initial?.initialCategory, initial?.initialService]);

  const updateMultipleFilters = useCallback((updates: Partial<FilterState>) => {
    setFilters(prev => ({
      ...prev,
      ...updates
    }));
  }, []);

  return { 
    filters,
    updateFilter,
    resetFilters,
    updateMultipleFilters
  };
};
