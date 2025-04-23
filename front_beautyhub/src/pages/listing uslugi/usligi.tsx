import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link для перехода
import styles from './uslugi.module.scss';

import Header from '../../components/UslugiListingHeaderComp/Header';
import Manicure from '../../components/ManicureListing/ManicureListing';
import Lashes from '../../components/LashesListing/LashesListing';
import Brows from '../../components/BrowsListing/BrowsListing'

const Services: React.FC = () => {
  return (
    <section>
      <Header/>
      <div className={styles.services}>
        <Manicure/>
        <Lashes/>
        <Brows/>
      </div>
    </section>
  );
};

export default Services;
