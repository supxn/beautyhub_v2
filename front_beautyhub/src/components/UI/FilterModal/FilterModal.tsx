import { Modal, Box, Button, FormControlLabel, Checkbox, Radio } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
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

const FilterModal = ({ title, options, type, selected, onChange, onClose, onApply }: FilterModalProps) => {
  const ControlComponent = type === 'checkbox' ? Checkbox : Radio;

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
                checked={selected.includes(opt)} 
                onChange={() => onChange(opt)}
                className={styles.input}
              />}
              label={opt}
              className={styles.option}
            />
          ))}
        </div>

        <Button 
          fullWidth 
          variant="contained" 
          onClick={onApply}
          className={styles.apply}
        >
          Показать результаты
        </Button>
      </Box>
    </Modal>
  );
};

export default FilterModal;
