// components/FilterModal.tsx
import React from 'react';
import styles from './FilterModal.module.scss';

interface FilterModalProps {
  title: string;
  options: string[];
  type: 'checkbox' | 'radio';
  selected: string[];
  onChange: (value: string) => void;
  onClose: () => void;
  onApply: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({
  title, options, type, selected, onChange, onClose, onApply
}) => {
  return (
    <div className={styles.modal}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <h2>{title}</h2>
          <button className={styles.closeBtn} onClick={onClose}>×</button>
        </div>
        <div className={styles.options}>
          {options.map(opt => (
            <label key={opt} className={styles.option}>
              <input
                type={type}
                checked={selected.includes(opt)}
                onChange={() => onChange(opt)}
              />
              {opt}
            </label>
          ))}
        </div>
        <button className={styles.apply} onClick={onApply}>
          Показать результаты
        </button>
      </div>
    </div>
  );
};

export default FilterModal;
