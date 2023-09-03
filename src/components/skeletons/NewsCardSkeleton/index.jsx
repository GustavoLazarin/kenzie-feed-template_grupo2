import styles from "./style.module.scss";

export const NewsCardSkeleton = () => {
    return (
        <li className={styles.skeletonCard}>
            <div className={styles.image}></div>
            <div className={styles.author}></div>
            <div className={styles.title}></div>
            <div className={styles.button}></div>
        </li>
    );
};
