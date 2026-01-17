import styles from "./villa.module.scss";
import { useTranslation } from "react-i18next";
import { CiMail } from "react-icons/ci";

export default function Villa() {
  const { t } = useTranslation();
  return (
    <div className={styles.alles}>
      <div className={styles.boekje}>
        <div className={styles.topper}>
          <p id={styles.left}>
            <a href="/home">Canapé </a> &gt; Villa Canapé
          </p>
          <p id={styles.right}>{t("villa.pageNumber")}</p>
        </div>
        <div className={styles.pages}>
          <div id={styles.leftPageLayout}>
            <div className={styles.mobileOverzicht}>
              <a href="/villa/layout3">{t("villa.basement")}</a>
              <a href="/villa/layout0">{t("villa.groundFloor")}</a>
              <a href="/villa/layout1">{t("villa.firstFloor")}</a>
              <a href="./villa/layout2">{t("villa.secondFloor")}</a>
            </div>
            <div className={styles.house}>
              <div className={styles.buttonsLayout}>
                <a href="/villa/layout3" className={styles.totaal}>
                  <img
                    src="/Images/circleLayout.png"
                    alt=""
                    className={styles.etage3Layout}
                  />
                  <p className={styles.etage3}>{t("villa.clickBasement")}</p>
                </a>
                <a href="/villa/layout0" className={styles.totaal}>
                  <img
                    src="/Images/circleLayout.png"
                    alt=""
                    className={styles.etage0Layout}
                  />
                  <p className={styles.etage0}>{t("villa.clickGroundFloor")}</p>
                </a>

                <a href="/villa/layout1" className={styles.totaal}>
                  <img
                    src="/Images/circleLayout.png"
                    alt=""
                    className={styles.etage1Layout}
                  />
                  <p className={styles.etage1}>{t("villa.clickFirstFloor")}</p>
                </a>

                <a href="/villa/layout2" className={styles.totaal}>
                  <img
                    src="/Images/circleLayout.png"
                    alt=""
                    className={styles.etage2Layout}
                  />
                  <p className={styles.etage2}>{t("villa.clickSecondFloor")}</p>
                </a>
              </div>
              <img
                src="/Images/house.png"
                className={styles.imageHouse}
                alt=""
              />
            </div>
            <p className={styles.tekst}>
              {t("villa.freeSpaces")}
              <a href="mailto:canapebrussel@gmail.com?subject=Interesse vrije ruimte">
                <CiMail />
              </a>
              !
            </p>
          </div>

          <div className={styles.rightPage} id={styles.rightPage}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2582.863104628848!2d4.34856337665663!3d50.88100447167762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c36167eff0b3%3A0x85591068ebadd4fa!2sVilla%20Canap%C3%A9!5e1!3m2!1snl!2sbe!4v1749634940610!5m2!1snl!2sbe"
              style={{
                border: 0,
                borderRadius: "20px",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.iframe}
            ></iframe>
          </div>
        </div>
      </div>
      <div className={styles.arrows}>
        <button className={styles.arrowButton}>
          <a href="/contact">
            <span>&larr;</span>
          </a>
        </button>
        <button className={styles.arrowButton}>
          <a href="/support">
            <span>&rarr;</span>
          </a>
        </button>
      </div>
    </div>
  );
}
