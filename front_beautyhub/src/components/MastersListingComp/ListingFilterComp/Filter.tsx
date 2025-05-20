import {
  Typography,
  Box,
  Button,
} from "@mui/material";
import FilterIcon from '@mui/icons-material/Tune';
import styles from './Filter.module.scss'
import { useState } from 'react';
import FilterModal from "../../FilterModal/FilterModal";
import { FilterState } from "../../../types";
import { CategoryList } from '../../../pages/listing masters/DataCategory';
import { useSearchParams } from 'react-router-dom';

interface FilterProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}
interface ModalConfig {
  key: string;
  options: string[];
  type: 'checkbox' | 'radio';
}
const Filter: React.FC<FilterProps> = ({ filters, setFilters }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const updateFiltersInUrl = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set(key, value);
    if (key === 'category') {
      newParams.delete('service');
    }
    setSearchParams(newParams);
  };
  const [openFilter, setOpenFilter] = useState<string | null>(null);
  const title = openFilter as keyof typeof modalMap;
  const toggleOption = (key: keyof typeof filters, value: string) => {
    if (key === 'category') {
      updateFiltersInUrl('category', value);
    } else if (key === 'service') {
      updateFiltersInUrl('service', value);
    }
    setFilters(prev => {
      const current = prev[key];
      if (key === 'category') {
        return {
          ...prev,
          category: value,
          service: ''
        };
      }
      if (key === 'service') {
        return {
          ...prev,
          service: value,
        };
      }
      if (Array.isArray(current)) {
        return {
          ...prev,
          [key]: current.includes(value)
            ? current.filter(v => v !== value)
            : [...current, value]
        };
      }
      return {
        ...prev,
        [key]: value
      };
    });
  };
  const closeModal = () => setOpenFilter(null);
  const applyFilter = () => {
    closeModal();
  };
  const serviceOptions =
    filters.category !== ''
      ? CategoryList.find(cat => cat.category === filters.category)?.services.map(s => s.name) || []
      : [];
  const modalMap: Record<string, ModalConfig> = {
    'Категория': {
      key: 'category',
      options: ['Косметология', 'Оформление ресниц',
        'Оформление бровей',
        'Маникюр',
        'Эпиляция',
        'Парикмахер',
        'Массаж',
        'Макияж',
        'Загар',
        'Пирсинг',
        'Стилист',
        'Перманентный Макияж(татуаж)',
        'СПА - процедуры',
        'Татуировки'],
      type: 'radio',
    },
    'Услуга': {
      key: 'service',
      options: serviceOptions,
      type: 'radio',
    },
    'Рейтинг': {
      key: 'rating',
      options: ['С отзывами', 'Рейтинг 3+', 'Рейтинг 4+', 'Рейтинг 5+'],
      type: 'checkbox',
    },
    'Опыт работы': {
      key: 'experience',
      options: ['Меньше года', '1-3 года', '4-7 лет', '8-10 лет', '10+ лет'],
      type: 'checkbox',
    },
    'Место приема': {
      key: 'location',
      options: ['У меня или специалиста', 'У специалиста', 'У меня'],
      type: 'radio',
    },
    'Пол мастера': {
      key: 'gender',
      options: ['Женщина', 'Мужчина', 'Не важно'],
      type: 'radio',
    },

  };
  return (
    <Box className={styles.headerBox}>
      <div className={styles.title}>
        <Typography variant="h6" className={styles.crumbs}>
          {filters.category} - {filters.service}
        </Typography>

        <Typography variant="h2" className={styles.topperTitle}>
          {filters.category}
        </Typography>

        {/* ФИЛЬТРЫ */}
        <Box className={styles.filtersContainer} sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2
        }}>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "7px",
              backgroundColor: "#F7EFE9",
              color: "#5C4033",
              border: "none",
              paddingX: 1,
              paddingY: 1
            }}
          >
            <FilterIcon />
          </Button>
          {["Категория", "Услуга", "Рейтинг", "Опыт работы", "Место приема", "Пол мастера"].map((filter, idx) => (
            <Button
              onClick={() => setOpenFilter(filter)}
              key={idx}
              variant="outlined"
              sx={{
                borderRadius: "7px",
                backgroundColor: "#F7EFE9",
                color: "#5C4033",
                border: "none",
                fontWeight: 500,
                textTransform: "none",
                fontSize: "20px",
                paddingX: 2.5,
                paddingY: 1,
                "&:hover": {
                  backgroundColor: "#F5EBE2"
                }
              }}
            >
              {filter}
            </Button>
          ))}
        </Box>
      </div>

      {/* Разделитель */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            height: "1px",
            backgroundColor: "#AF9284",
            width: "100%",
          }}
        />
      </Box>
      {openFilter && (
        <FilterModal
          title={title}
          options={modalMap[title].options}
          type={modalMap[title].type}
          selected={
            Array.isArray(filters[modalMap[openFilter].key as keyof typeof filters])
              ? (filters[modalMap[openFilter].key as keyof typeof filters] as string[])
              : [filters[modalMap[openFilter].key as keyof typeof filters] as string]
          }
          onChange={(val) => toggleOption(modalMap[title].key as keyof typeof filters, val)}
          onClose={closeModal}
          onApply={applyFilter}
        />
      )}

    </Box>
  );
};

export default Filter;


