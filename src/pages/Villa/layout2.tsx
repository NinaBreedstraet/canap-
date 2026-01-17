import styles from "./villa.module.scss";
import ateliersData from "./data.json";
import { useTranslation } from "react-i18next";
import { CiMail } from "react-icons/ci";

export default function Layout2() {
  const { t } = useTranslation();
  return (
    <div className={styles.alles}>
      <div className={styles.boekje}>
        <div className={styles.topper}>
          <p id={styles.left}>
            <a href="/home">Canape </a> &gt; Villa Canapé
          </p>
          <p id={styles.right}>{t("villa.pageNumber")}</p>
        </div>
        <div className={styles.pages}>
          <div id={styles.leftPageLayout}>
            <div className={styles.mobileOverzicht}>
              <a href="/villa/layout3">{t("villa.basement")}</a>
              <a href="/villa/layout0">{t("villa.groundFloor")}</a>
              <a href="/villa/layout1">{t("villa.firstFloor")}</a>
              <a href="/villa/layout2">{t("villa.secondFloor")}</a>
            </div>
            <img src="/Images/house.png" className={styles.imageHouse} alt="" />
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
            <p className={styles.tekst}>
              {t("villa.freeSpaces")}{" "}
              <a href="mailto:canapebrussel@gmail.com?subject=Interesse vrije ruimte">
                <CiMail />
              </a>
              !
            </p>
          </div>

          <div className={styles.rightPage} id={styles.rightPage}>
            {ateliersData
              .filter((atelier) => atelier.etage === "2")
              .map((atelier, index) => (
                <div key={index} className={styles.atelier}>
                  <div className={styles.title}>{t(`${atelier.title}`)}</div>
                  <div className={styles.content}>
                    {atelier.content.link && atelier.content.text ? (
                      <>
                        <a href={atelier.content.link}>
                          {t(`${atelier.content.text}`)}
                        </a>
                        <br />
                      </>
                    ) : null}
                  </div>
                </div>
              ))}
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
