import { TextField, Button, Box, Typography,  } from "@mui/material";
import styles from "./privacyPolicy.module.scss";
import profilePhoto from "./profilePhoto.png"
import EditIcon from '@mui/icons-material/Edit';
import temp from "./temp.png"

const ProfileForm: React.FC = () => {
  return (
    <div className={styles.container}>
      <Typography variant="h2" className={styles.topperTitle}>
        Политика конфиденциальности
      </Typography>

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
        <div className={styles.textContainer}>
            <Typography variant="h4" className={styles.policyText}>
                Настоящая Политика конфиденциальности персональных данных (далее – Политика конфиденциальности) действует в отношении всей информации, которую данный сайт, на котором размещен текст этой Политики конфиденциальности, может получить о Пользователе, а также любых программ и продуктов, размещенных на нем.
            </Typography>
            <Typography variant="h3" className={styles.policy1Title}>
                1. Определение терминов
            </Typography>
            <Typography variant="h4" className={styles.policyText}>
                1.1. В настоящей Политике конфиденциальности используются следующие термины:
            </Typography>
            <Typography variant="h4" className={styles.policyText}>
                1.1.1. «Администрация сайта» – уполномоченные сотрудники, уполномоченные на управление сайтом, действующие от его имени, которые организуют и (или) осуществляют обработку персональных данных, а также определяют цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными.
            </Typography>
            <Typography variant="h4" className={styles.policyText}>
                1.1.2. «Персональные данные» — любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных).
            </Typography>
            <Typography variant="h4" className={styles.policyText}>
                1.1.3. «Обработка персональных данных» — любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.
            </Typography>
            <Typography variant="h4" className={styles.policyText}>
                1.1.4. «Конфиденциальность персональных данных» — обязательное для соблюдения Администрацией сайта требование не допускать их умышленного распространения без согласия субъекта персональных данных или наличия иного законного основания.
            </Typography>
            <Typography variant="h4" className={styles.policyText}>
                1.1.5. «Пользователь сайта (далее Пользователь)» – лицо, имеющее доступ к сайту, посредством сети Интернет и использующее данный сайт для своих целей.
            </Typography>
        </div>
        
        

  </div>

);
};

export default ProfileForm;