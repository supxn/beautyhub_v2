import styles from "./favourites.module.scss";
import { useFavourites } from '../../components/MastersListingComp/MasterComp/useFavourites';
import { mastersList } from '../../datas/masterData';
import MasterProfile from '../../components/MastersListingComp/MasterComp/Master';

const FavoritePage: React.FC = () => {
    const { favourites } = useFavourites();
    const favMasters = mastersList.filter(m => favourites.includes(m.phone));
    return (
        <div className={styles.mastersList}>
            {favMasters.length === 0 ? (
                <div className={styles.emptyText}>У вас пока нет избранных мастеров.</div>
            ) : (
                favMasters.map(master => (
                    <MasterProfile key={master.phone} master={master} categoryOfMaster={""} />
                ))
            )}
        </div>
    );
}

export default FavoritePage