import React from 'react';
import styles from './index.module.css'

const Main = () => {
    return(
        <main>
            <section className={styles.siteTitle}>
                <div className={styles.siteBackground}>
                    <h3>This is just amazing</h3>
                    <h1>Create. Read. Update. Delete.</h1>
                    <button className={styles.btn}>Read More</button>
                </div>
            </section>
        </main>
    )
}

export default Main;