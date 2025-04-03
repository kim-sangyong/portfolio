import React from "react";
import styles from "../assets/styles/Footer.module.scss";

const Footer = () => {
    return(
       <footer className={styles.footerCon} id="contact">
            <div className={styles.footerBox}>
                <div className={styles.textBox}>
                    <p className={styles.text}>끊임없이 발전하는 퍼블리셔와 함께하고 싶으신가요?</p>
                    <strong className={styles.footerStrong}>sdragon0416@gmail.com</strong>
                    <p className={styles.text}>궁금한 점이 있으시다면 언제든지 연락 주세요!</p>
                    <p className={styles.text}>빠르게 답장 드리겠습니다!</p>
                    <a href="mailto:sdragon0416@gmail.com" className={styles.mail}>메일 보내기 <span className={styles.mailIcon}>📧</span></a>
                </div>
                    <div className={styles.copyRight}>
                        <p className={styles.copyText}>Copyright © 2025 All rights reserved</p>
                    </div>
            </div>
       </footer>
    );
}

export default Footer;