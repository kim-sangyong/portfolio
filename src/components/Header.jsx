import React from "react";
import styles from "../assets/styles/Header.module.scss";

const Header = () => {
    return(
        <header className={styles.fixed}>
            <div className={styles.headerCon}>
                <nav className={styles.nav}>
                        <h1>
                            Sangyong's Portfolio
                        </h1>
                    <ul className={styles.ul}>
                        <li><a href="#aboutMe" className={styles.link}>About Me</a></li>
                        <li><a href="#skill" className={styles.link}>Skill</a></li>
                        <li><a href="#project" className={styles.link}>Project</a></li>
                        <li><a href="#contact" className={styles.link}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;