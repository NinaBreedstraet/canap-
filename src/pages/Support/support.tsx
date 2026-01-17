import { useTranslation } from "react-i18next";
import styles from "./support.module.scss";

export default function Support() {
  const { t } = useTranslation();
  return (
    <div className={styles.alles}>
      <div className={styles.boekje}>
        <div className={styles.topper}>
          <p id={styles.left}>
            <a href="/home">Canape </a> &gt;{" "}
            {t("support.breadcrumb").split(" > ")[1]}
          </p>
          <p id={styles.left}>{t("support.pageNumber")}</p>
        </div>
        <div className={styles.pages}>
          <div className={styles.leftPage}>
            <img className={styles.bloemen} src="/Images/nijntje.png" alt="" />
          </div>
          <div className={styles.rightPage}>
            <p>
              {t("support.content")}
              <a href="mailto:canapebrussel@gmail.com?subject=Interesse Core Team">
                {t("support.mailLink")}
              </a>
              !
            </p>

            <div className={styles.tekening}>
              <div>
                <img
                  className={styles.hartjes}
                  src="/Images/mannetjes3.png"
                  alt=""
                />
              </div>
              <div className={styles.glitter}>
                <img
                  className={styles.imageOne}
                  id={styles.One}
                  src="/Images/blinkje1.png"
                  alt=""
                />
                <img
                  className={styles.imageOne}
                  id={styles.Two}
                  src="/Images/blinkje10.png"
                  alt=""
                />
                <img
                  className={styles.imageOne}
                  id={styles.Three}
                  src="/Images/blinkje7.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.arrows}>
        <button className={styles.arrowButton}>
          <a href="/villa">
            <span>&larr;</span>
          </a>
        </button>
      </div>
    </div>
  );
}
