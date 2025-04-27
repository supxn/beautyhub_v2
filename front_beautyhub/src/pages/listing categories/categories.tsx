import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link для перехода
import styles from './categories.module.scss';
import useScrollToHash from '../../hooks/useScrollToHash';

import Header from '../../components/CategoriesListingHeaderComp/CategoriesHeader';
import Manicure from '../../components/ManicureListing/ManicureListing';
import Lashes from '../../components/LashesListing/LashesListing';
import Brows from '../../components/BrowsListing/BrowsListing'

const Services: React.FC = () => {
  useScrollToHash(); 
  return (
    <section>
      <Header/>
      <div className={styles.services}>
        <div id="manicure">
          <Manicure />
        </div>
        <div id="lashes">
          <Lashes />
        </div>
        <div id="brows">
          <Brows />
        </div>
      </div>
    </section>
  );
};

export default Services;
