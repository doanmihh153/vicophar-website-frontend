import React from "react";
import styles from "./loader.module.css";

const TypewriterLoader = () => {
    return (
        <div className={styles["typewriter-alt"]}>
            <div className={styles.slide}>
                <i />
            </div>
            <div className={styles.paper} />
            <div className={styles.keyboard} />
        </div>
    );
};

export default TypewriterLoader;
