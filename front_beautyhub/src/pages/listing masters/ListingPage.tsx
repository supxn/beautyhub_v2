import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './listingPage.module.scss';
import { FilterState, MasterType } from "../../api/types/dto";
import { mastersList } from "../../datas/masterData";
import { CategoryList } from "../../datas/filterCategories";
import { FilterPanel } from "../../components/MastersListingComp/ListingFilterComp/FilterPanel";
import MasterProfile from "../../components/MastersListingComp/MasterComp/Master";
import { useFilter } from "../../hooks/useFilter";
import { Typography, Divider, Box } from '@mui/material';

const ListingPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { filters, updateFilter, resetFilters, updateMultipleFilters } = useFilter({
    initialCategory: searchParams.get('category') || '',
    initialService: searchParams.get('service') || ''
  });

  const filteredMasters = useMemo(() => filterMasters(mastersList, filters), [filters]);

  const handleMultipleFilterChange = (updates: Partial<FilterState>) => {
    updateMultipleFilters(updates);
    // Обновляем URL
    const params: Record<string, string> = {};
    if (updates.category) params.category = updates.category as string;
    if (updates.service) params.service = updates.service as string;
    if (updates.gender) params.gender = updates.gender as string;
    if (updates.location) params.location = updates.location as string;
    if (updates.rating && Array.isArray(updates.rating) && updates.rating.length > 0) params.rating = (updates.rating as string[]).join(',');
    if (updates.experience && Array.isArray(updates.experience) && updates.experience.length > 0) params.experience = (updates.experience as string[]).join(',');
    setSearchParams(params);
  };

  // Обработчик сброса фильтров и очистки URL
  const handleResetAll = () => {
    resetFilters();
    setSearchParams({}); // очищаем query-параметры
  };

  return (
    <section className={styles.container}>
      {/* Категория и услуга */}
      <Box className={styles.header}>
        <Typography variant="h4" className={styles.title}>
          {filters.category || 'Все категории'}
          {filters.service && ` - ${filters.service}`}
        </Typography>
      </Box>

      {/* Панель фильтров */}
      <FilterPanel
        categories={CategoryList}
        services={CategoryList}
        filters={filters}
        onFilterChange={updateFilter}
        onReset={handleResetAll}
        onMultipleFilterChange={handleMultipleFilterChange}
      />

      <Divider className={styles.divider} />

      {/* Список мастеров */}
      <div className={styles.mastersList}>
        {filteredMasters.length === 0 ? (
          <Typography variant="h6" className={styles.notFound}>
            Мастера не найдены по заданным фильтрам.
          </Typography>
        ) : (
          filteredMasters.map((master) => (
            <MasterProfile
              key={master.phone}
              master={master}
              categoryOfMaster={filters.category}
            />
          ))
        )}
      </div>
    </section>
  );
};

const filterMasters = (masters: MasterType[], filters: FilterState) => {
  return masters.filter(master => {
    const experienceRange = getExperienceRange(master.experience);

    const matchesExperience = !filters.experience || filters.experience.length === 0 ||
      (filters.experience ?? []).includes(experienceRange);

    const matchesRating = !filters.rating || filters.rating.length === 0 ||
      (filters.rating ?? []).some(r => master.rating >= parseFloat(r));

    const matchesGender = !filters.gender ||
      filters.gender === 'Не важно' ||
      master.gender === filters.gender;

    const matchesLocation = !filters.location ||
      master.acceptsAt === filters.location;

    // Категория и услуга
    let matchesCategoryAndService = true;
    if (filters.category && filters.service) {
      // Должна быть категория и услуга внутри этой категории
      matchesCategoryAndService = master.categories.some(c =>
        c.category === filters.category && c.services.some(s => s.name === filters.service)
      );
    } else if (filters.category) {
      // Только категория
      matchesCategoryAndService = master.categories.some(c => c.category === filters.category);
    }

    return matchesExperience &&
      matchesRating &&
      matchesGender &&
      matchesLocation &&
      matchesCategoryAndService;
  });
};

const getExperienceRange = (years: number) => {
  if (years < 1) return "Меньше года";
  if (years <= 3) return "1-3 года";
  if (years <= 7) return "4-7 лет";
  if (years <= 10) return "8-10 лет";
  return "10+ лет";
};

export default ListingPage;
