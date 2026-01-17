import styles from "./news.module.scss";
import { useTranslation } from "react-i18next";
import BeholdWidget from "../../components/Behold/behold.tsx";
import { useRef } from "react";

export default function News() {
  const { t } = useTranslation();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <div className={styles.alles}>
      <div className={styles.boekje}>
        <div className={styles.topper}>
          <p className={styles.left}>
            <a href="/home">{t("navigation.home")}</a> &gt;{" "}
            {t("navigation.news")}
          </p>
          <p className={styles.right}>2 - {t("navigation.news")}</p>
        </div>

        <div className={styles.pages}>
          <div className={styles.leftPage}>
            <h2>{t("news.followUs")}</h2>
            <BeholdWidget />
          </div>

          <div className={styles.rightPage}>
            <div className={styles.myAlbum}>
              <div className={styles.iframeContainer}>
                <iframe
                  src="https://myalbum.com/folder/HgvWJcsADZ62/?invite=bcc3f743-1ef4-4312-b4ec-e179418d175d"
                  className={styles.googleIframe}
                  ref={iframeRef}
                  allowFullScreen
                ></iframe>
                <button
                  className={styles.fullscreenButton}
                  onClick={() => iframeRef.current?.requestFullscreen()}
                >
                  ⛶
                </button>
              </div>
              <button
                className={styles.openTabButton}
                onClick={() =>
                  window.open(
                    "https://myalbum.com/folder/HgvWJcsADZ62/?invite=bcc3f743-1ef4-4312-b4ec-e179418d175d",
                    "_blank"
                  )
                }
              >
                {t("news.openInNew")}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.arrows}>
        <button className={styles.arrowButton}>
          <a href="/about">
            <span>&larr;</span>
          </a>
        </button>
        <button className={styles.arrowButton}>
          <a href="/calendar">
            <span>&rarr;</span>
          </a>
        </button>
      </div>
    </div>
  );
}
