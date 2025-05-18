import React, { useState, useMemo } from 'react';
import styles from './masters.module.scss';
import { FilterState, MasterType, CategoryType, Service } from "../../types";
import { mastersList } from './DataMaster';
import Filter from '../../components/MastersListingComp/ListingFilterComp/Filter';
import Master from '../../components/MastersListingComp/MasterComp/Master';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CategoryList } from './DataCategory';


const Services: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState<FilterState>({
    experience: [],
    rating: [],
    gender: '',
    location: '',
    category: '',
    service: '',
  });

  useEffect(() => {
    const category = searchParams.get('category');
    const service = searchParams.get('service');
    if (category) {
      const matchedCategory = CategoryList.find(cat => cat.category === category);
      if (matchedCategory) {
        const matchedService = matchedCategory.services.find(s => s.name === service);
        if (matchedService) {
          setFilters(prev => ({
            ...prev, category: category,
            service: matchedService.name,
          }));
        } else setFilters(prev => ({
          ...prev, category: category,
          service: '',
        }));
      }
    }
  }, [searchParams, setFilters]);

  console.log(filters);

  const getExperienceRange = (experience: number): string => {
    if (experience < 1) return "Меньше года";
    if (experience >= 1 && experience < 4) return "1-3 года";
    if (experience >= 4 && experience < 8) return "4-7 лет";
    if (experience >= 8 && experience < 11) return "8-10 лет";
    return "10+ лет";
  };
  const ratingFilterMap: Record<string, (rating: number) => boolean> = {
    'С отзывами': (rating) => rating > 0,
    'Рейтинг 3+': (rating) => rating >= 3.0,
    'Рейтинг 4+': (rating) => rating >= 4.0,
    'Рейтинг 5+': (rating) => rating >= 5.0,
  };

  const filteredMasters: MasterType[] = useMemo(() => {
    return mastersList.filter(master => {
      // Опыт
      const matchesExperience =
        filters.experience.length === 0 ||
        filters.experience.includes(getExperienceRange(master.experience));
      // Рейтинг
      const matchesRating =
        filters.rating.length === 0 ||
        filters.rating.some(label => {
          const checkFn = ratingFilterMap[label];
          return checkFn ? checkFn(master.rating) : true;
        });
      // Пол
      const matchesGender =
        filters.gender === "" ||
        filters.gender === "Не важно" ||
        filters.gender === master.gender;
      // Место приёма
      const matchesLocation =
        filters.location === "" ||
        filters.location === master.acceptsAt;
      const matchesCategory =
        filters.category === "" ||
        master.categories.some(cat => {
          if (cat.category !== filters.category) return false;
          if (!filters.service) return true; // только категория выбрана
          return cat.services.some(service => service.name === filters.service); // сравнение по имени
        });
      return (
        matchesExperience &&
        matchesRating &&
        matchesGender &&
        matchesLocation &&
        matchesCategory
      );
    });
  }, [filters, mastersList]);

  return (
    <section>
      <Filter filters={filters} setFilters={setFilters} />
      <div className={styles.masters}>
        {filteredMasters.length === 0 ? (
          <h2>Мастера не найдены</h2>
        ) : (
          filteredMasters.map((master, idx) => (
            <Master key={idx} master={master} categoryOfMaster={filters.category}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default Services;

