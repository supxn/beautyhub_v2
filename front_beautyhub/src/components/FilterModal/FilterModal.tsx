import { useState, useEffect } from 'react';
import { Modal, Box, Button, FormControlLabel, Checkbox, Radio, Stack } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import styles from './FilterModal.module.scss';

interface FilterModalProps {
  open: boolean;
  title: string;
  options: string[];
  type: 'checkbox' | 'radio';
  selected: string[] | string;
  onClose: () => void;
  onSelect: (selected: string[] | string) => void;
}

const FilterModal = ({open, title, options, type, selected, onClose, onSelect }: FilterModalProps) => {
  const ControlComponent = type === 'checkbox' ? Checkbox : Radio;
  const [localSelected, setLocalSelected] = useState<string[] | string>(selected);

  useEffect(() => {
    setLocalSelected(selected);
  }, [selected]);

  const handleToggle = (value: string) => {
    const newValue = type === 'checkbox' 
      ? (Array.isArray(localSelected) 
          ? localSelected.includes(value)
            ? localSelected.filter(item => item !== value)
            : [...localSelected, value]
          : [value])
      : value;

    setLocalSelected(newValue);
    onSelect(newValue);
  };

  const handleReset = () => {
    setLocalSelected(type === 'checkbox' ? [] : '');
  };

  const handleApply = () => {
    onSelect(localSelected);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} className={styles.modal}>
      <Box className={styles.inner}>
        <div className={styles.top}>
          <h2>{title}</h2>
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        
        <div className={styles.options}>
          {options.map(opt => (
            <FormControlLabel
              key={opt}
              control={<ControlComponent 
                checked={type === 'checkbox' 
                  ? (localSelected as string[]).includes(opt)
                  : localSelected === opt}
                onChange={() => handleToggle(opt)}
                sx={{
                  '&.Mui-checked': { color: '#5c4033' },
                  padding: '8px'
                }}
              />}
              label={<span style={{ fontSize: '16px' }}>{opt}</span>}
              sx={{
                margin: 0,
                width: '100%',
                alignItems: 'flex-start'
              }}
            />
          ))}
        </div>
      </Box>
    </Modal>
  );
};

export default FilterModal;