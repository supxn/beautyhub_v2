import { useState, useMemo, useCallback } from 'react';
import { Button, Stack, Box } from '@mui/material';
import FilterModal from '../../../components/FilterModal/FilterModal';
import { FilterState, CategoryType } from '../../../api/types/dto';
import styles from './FilterPanel.module.scss';

interface FilterPanelProps {
  categories: CategoryType[];
  services: CategoryType[];
  filters: FilterState;
  onFilterChange: (type: keyof FilterState, value: any) => void;
  onReset: () => void;
  onMultipleFilterChange: (updates: Partial<FilterState>) => void;
}

const experienceOptions = ['Меньше года', '1-3 года', '4-7 лет', '8-10 лет', '10+ лет'];
const ratingOptions = ['С отзывами', 'Рейтинг 3+', 'Рейтинг 4+', 'Рейтинг 5+'];
const genderOptions = ['Женщина', 'Мужчина', 'Не важно'];
const locationOptions = ['У меня или у специалиста', 'У специалиста', 'У меня'];

export const FilterPanel = ({
  categories,
  services,
  filters,
  onFilterChange,
  onReset,
  onMultipleFilterChange
}: FilterPanelProps) => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const [tempFilters, setTempFilters] = useState<Partial<FilterState>>({});

  const handleModalChange = (type: keyof FilterState, value: any) => {
    setTempFilters(prev => ({ ...prev, [type]: value }));
  };

  const handleApplyAll = () => {
    onMultipleFilterChange({ ...filters, ...tempFilters });
  };

  const handleResetAll = () => {
    onReset();
    setTempFilters({});
  };

  const handleOpenModal = (type: string) => {
    setTempFilters(prev => ({ ...filters, ...prev }));
    setActiveFilter(type);
  };

  const currentCategoryServices = useMemo(() => {
    const selectedCategory = tempFilters.category ?? filters.category;

    if (!selectedCategory) {
      return services.flatMap(c => c.services);
    }

    return services.find(c => c.category === selectedCategory)?.services || [];
  }, [tempFilters.category, filters.category, services]);

  const getFilterValue = (key: keyof FilterState) => {
    return tempFilters[key] !== undefined ? tempFilters[key] : filters[key];
  };

  return (
    <Box className={styles.panel}>
      {/* Добавляем блок с заголовком */}
      {/* <div className={styles.header}>
        <h2>
          {filters.category || 'Все категории'}
          {filters.service && ` - ${filters.service}`}
        </h2>
      </div> */}
      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        {/* Рейтинг мастера */}
        <Button
          onClick={() => handleOpenModal('rating')} className={styles.button}
        >
          Рейтинг ({(getFilterValue('rating') as string[])?.length || 0})
        </Button>

        {/* Категория */}
        <Button
          onClick={() => handleOpenModal('category')} className={styles.button}
        >
          Категория: {getFilterValue('category') || 'Все'}
        </Button>

        <Button
          onClick={() => handleOpenModal('service')}
          className={styles.button}
        >
          Услуга: {getFilterValue('service')}
        </Button>

        {/* Стаж работы */}
        <Button
          onClick={() => handleOpenModal('experience')} className={styles.button}
        >
          Опыт ({(getFilterValue('experience') as string[])?.length || 0})
        </Button>

        {/* Пол мастера */}
        <Button
          onClick={() => handleOpenModal('gender')} className={styles.button}
        >
          Пол: {getFilterValue('gender') || 'Любой'}
        </Button>

        {/* Место приема */}
        <Button
          onClick={() => handleOpenModal('location')} className={styles.button}
        >
          Место: {getFilterValue('location') || 'Любое'}
        </Button>

        <Button
          onClick={handleResetAll}
          sx={{ ml: 2 }} className={styles.button}
        >
          Сбросить
        </Button>

        <Button
          onClick={handleApplyAll}
          sx={{ ml: 2 }}
          className={styles.button}
        >
          Применить
        </Button>
      </Stack>

      {/* Filter Modals */}
      <FilterModal
        open={activeFilter === 'category'}
        title="Выберите категорию"
        options={categories.map(c => c.category)}
        selected={getFilterValue('category') || ''}
        type="radio"
        onClose={() => setActiveFilter(null)}
        onSelect={(value) => {
          handleModalChange('category', value);
          handleModalChange('service', '');
        }}
      />

      <FilterModal
        open={activeFilter === 'service'}
        title="Выберите услугу"
        options={currentCategoryServices.map(s => s.name)}
        selected={getFilterValue('service') || ''}
        type="radio"
        onClose={() => setActiveFilter(null)}
        onSelect={(value) => {
          handleModalChange('service', value);
        }}
      />

      <FilterModal
        open={activeFilter === 'experience'}
        title="Опыт работы"
        options={experienceOptions}
        selected={getFilterValue('experience') || []}
        type="checkbox"
        onClose={() => setActiveFilter(null)}
        onSelect={(value) => handleModalChange('experience', value)}
      />

      <FilterModal
        open={activeFilter === 'rating'}
        title="Рейтинг мастера"
        options={ratingOptions}
        selected={getFilterValue('rating') || []}
        type="checkbox"
        onClose={() => setActiveFilter(null)}
        onSelect={(value) => handleModalChange('rating', value)}
      />

      <FilterModal
        open={activeFilter === 'gender'}
        title="Пол мастера"
        options={genderOptions}
        selected={getFilterValue('gender') || ''}
        type="radio"
        onClose={() => setActiveFilter(null)}
        onSelect={(value) => handleModalChange('gender', value)}
      />

      <FilterModal
        open={activeFilter === 'location'}
        title="Место приема"
        options={locationOptions}
        selected={getFilterValue('location') || ''}
        type="radio"
        onClose={() => setActiveFilter(null)}
        onSelect={(value) => handleModalChange('location', value)}
      />
    </Box>
  );
};