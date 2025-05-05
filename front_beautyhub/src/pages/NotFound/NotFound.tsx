import styles from './NotFound.module.scss'
export const NotFound: React.FC = () => {
    return(
        <div className={styles.notFoundArea}>
           <h1 className={styles.notFoundTitle}>404</h1>
           <span className={styles.notFoundDescription}>Такой страницы не существует</span>
        </div>
    );
}

