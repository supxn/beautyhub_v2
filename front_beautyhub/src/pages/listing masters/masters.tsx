import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link для перехода
import styles from './masters.module.scss';
import useScrollToHash from '../../hooks/useScrollToHash';

import Header from '../../components/MastersListingComp/MastersListingHeaderComp/Header';
import Master from '../../components/MastersListingComp/MasterComp/Master';
import { Box } from '@mui/material';

const Services: React.FC = () => {
  return (
    <section>
      <Header/>
      <div className={styles.masters}>
          {["Рейтинг", "Опыт работы", "Место приема"].map((filter, idx) => (
                  <Master/>
                ))}
      </div>
    </section>
  );
};

export default Services;