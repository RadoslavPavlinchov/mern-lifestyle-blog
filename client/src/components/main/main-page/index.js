import React from 'react';
import styles from './index.module.css'

const Main = () => {
    const scrollOnClick = () => {
        window.scrollTo({
            top: 950,
            // left: 100,
            behavior: 'smooth'
          });
    }
    return(
        <main className={styles.main}>
            <section className={styles.siteTitle}>
                <div className={styles.siteBackground}>
                    <h3 className={styles.texts}>This is just amazing</h3>
                    <h1 className={styles.texts}>Create. Read. Update. Delete.</h1>
                    <button className={styles.btn} onClick={scrollOnClick}>Read More</button>
                </div>
            </section>
        </main>
    )
}

export default Main;