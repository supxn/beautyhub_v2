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
  const [searchParams] = useSearchParams();
  const { filters, updateFilter, resetFilters, updateMultipleFilters } = useFilter({
    initialCategory: searchParams.get('category') || '',
    initialService: searchParams.get('service') || ''
  });

  const filteredMasters = useMemo(() => filterMasters(mastersList, filters), [filters]);

  const handleMultipleFilterChange = (updates: Partial<FilterState>) => {
    updateMultipleFilters(updates);
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
        onReset={resetFilters}
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

    const matchesExperience = filters.experience?.length === 0 ||
      (filters.experience ?? []).includes(experienceRange);

    const matchesRating = filters.rating?.length === 0 ||
      (filters.rating ?? []).some(r => master.rating >= parseFloat(r));

    const matchesGender = !filters.gender ||
      filters.gender === 'Не важно' ||
      master.gender === filters.gender;

    const matchesLocation = !filters.location ||
      master.acceptsAt === filters.location;

    const matchesCategory = !filters.category ||
      master.categories.some(c => {
        const hasCategory = c.category === filters.category;
        const hasService = !filters.service || c.services.some(s => s.name === filters.service);
        return hasCategory && hasService;
      });

    return matchesExperience &&
      matchesRating &&
      matchesGender &&
      matchesLocation &&
      matchesCategory;
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
