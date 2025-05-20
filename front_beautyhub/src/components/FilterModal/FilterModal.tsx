import { useState, useEffect } from 'react';
import { Modal, Box, Button, FormControlLabel, Checkbox, Radio, Stack } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import styles from './FilterModal.module.scss';

interface FilterModalProps {
  title: string;
  options: string[];
  type: 'checkbox' | 'radio';
  selected: string[] | string;
  onClose: () => void;
  onApply: (selected: string[] | string) => void;
}

const FilterModal = ({ title, options, type, selected, onClose, onApply }: FilterModalProps) => {
  const ControlComponent = type === 'checkbox' ? Checkbox : Radio;
  const [localSelected, setLocalSelected] = useState<string[] | string>(selected);

  useEffect(() => {
    setLocalSelected(selected);
  }, [selected]);

  const handleToggle = (value: string) => {
    if (type === 'checkbox') {
      setLocalSelected(prev => 
        Array.isArray(prev) 
          ? prev.includes(value)
            ? prev.filter(item => item !== value)
            : [...prev, value]
          : [value]
      );
    } else {
      setLocalSelected(value);
    }
  };

  const handleReset = () => {
    setLocalSelected(type === 'checkbox' ? [] : '');
  };

  const handleApply = () => {
    onApply(localSelected);
    onClose();
  };

  return (
    <Modal open onClose={onClose} className={styles.modal}>
      <Box className={styles.inner}>
        <div className={styles.top}>
          <h2>{title}</h2>
          <Button className={styles.closeBtn} onClick={onClose}>
            <CloseIcon />
          </Button>
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
                  color: '#6b5145',
                  padding: '8px'
                }}
              />}
              label={opt}
              className={styles.option}
            />
          ))}
        </div>

        <Stack spacing={2} direction="row" sx={{ 
          mt: 3,
          justifyContent: 'flex-end',
          width: '100%' 
        }}>
          <Button
            fullWidth
            variant="outlined"
            onClick={handleReset}
            sx={{
              borderColor: '#5c4033',
              color: '#5c4033',
              '&:hover': { borderColor: '#6b5145' },
              maxWidth: '120px'
            }}
          >
            Сбросить
          </Button>
          
          <Button 
            fullWidth
            variant="contained" 
            onClick={handleApply}
            sx={{
              backgroundColor: '#5c4033',
              '&:hover': { backgroundColor: '#6b5145' },
              maxWidth: '120px'
            }}
          >
            Применить
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default FilterModal;