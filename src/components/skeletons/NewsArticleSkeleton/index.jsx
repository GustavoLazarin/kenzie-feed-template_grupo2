import styles from "./style.module.scss";

export const NewsArticleSkeleton = () => {
    return (
        <article className={`stack-large current-news ${styles.news}`}>
            <div className={styles.author}></div>
            <div className={styles.title}></div>
            <div className={styles.image}></div>
            <div className={styles.like}></div>
            <div className={styles.paragraph}></div>
            <div className={styles.paragraph}></div>
            <div className={styles.paragraph}></div>
            <div className={styles.paragraph}></div>
            <div className={styles.paragraph}></div>
        </article>
    );
};
