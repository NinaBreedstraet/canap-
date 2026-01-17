import styles from "./about.module.scss";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className={styles.alles}>
      <div className={styles.boekje}>
        <div className={styles.topper}>
          <p id={styles.left}>
            <a href="/home">
              {t("navigation.home")} * {t("navigation.about")}
            </a>
          </p>
          <p id={styles.right}>1 - {t("navigation.about")}</p>
        </div>

        <div className={styles.content}>
          <div className={styles.textLeft}>
            <div className={styles.header}>
              <p>{t("about.overCanape")}</p>
            </div>
            <div className={styles.inhoud}>{t("about.canapeText")}</div>

            <div className={styles.subtitle}>
              <p>{t("about.missie")}</p>
            </div>

            <div className={styles.inhoud}>{t("about.missieText")}</div>
            <img
              className={styles.ster1}
              src="/Images/meerSterretjes.png"
              alt="meer sterretjes"
            />
          </div>

          <div className={styles.textRight}>
            <img
              className={styles.ster2}
              src="/Images/sterretjes.png"
              alt="sterretjes"
            />

            <div className={styles.subtitle}>
              <p>{t("about.platform")}</p>
            </div>

            <div className={styles.inhoud}>{t("about.platformText")}</div>

            <div className={styles.subtitle}>
              <p> {t("about.conclusie")}</p>
            </div>

            <div className={styles.inhoud}>{t("about.conclusieText")}</div>

            <div className={styles.klikMeer}>
              <a href="/Images/AboutCanapé.pdf">{t("about.leesMeer")}</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.arrows}>
        <button className={styles.arrowButton}>
          <a href="/home">
            <span>&larr;</span>
          </a>
        </button>
        <button className={styles.arrowButton}>
          <a href="/news">
            <span>&rarr;</span>
          </a>
        </button>
      </div>
    </div>
  );
}
