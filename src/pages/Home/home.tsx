import styles from "./home.module.scss";
import { useState, useEffect } from "react";
import background from "/Images/scansBoekjesWeb_5.png";

type Language = "nl" | "en" | "fr";

const homeTranslations: Record<
  Language,
  {
    myNameIs: string;
    myBirthdayIs: string;
    myEmailIs: string;
    myAddressIs: string;
  }
> = {
  nl: {
    myNameIs: "Mijn naam is:",
    myBirthdayIs: "Mijn verjaardag is op:",
    myEmailIs: "Mijn emailadres is:",
    myAddressIs: "Mijn adres is:",
  },
  en: {
    myNameIs: "My name is:",
    myBirthdayIs: "My birthday is on:",
    myEmailIs: "My email address is:",
    myAddressIs: "My address is:",
  },
  fr: {
    myNameIs: "Mon nom est:",
    myBirthdayIs: "Mon anniversaire est le:",
    myEmailIs: "Mon adresse email est:",
    myAddressIs: "Mon adresse est:",
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("nl");

  useEffect(() => {
    const savedLanguage =
      (localStorage.getItem("language") as Language) || "nl";
    setLanguage(savedLanguage);

    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent<Language>;
      setLanguage(customEvent.detail);
    };

    window.addEventListener("languageChange", handleLanguageChange);
    return () =>
      window.removeEventListener("languageChange", handleLanguageChange);
  }, []);

  const t = homeTranslations[language];
  return (
    <div className={styles.alles}>
      <div className={styles.contentWrapper}>
        <div className={styles.Inhoudstafel}>
          <div className={styles.tekeningInhoudstafel}>
            <img
              src="/Images/mannetjes3.png"
              alt="mannetjes"
              className={styles.mannetjes4}
            />
          </div>

          <div className={styles.hoi}>
            <img src="/Images/leukAnna.png" alt="Hoi!" />
          </div>

          <div className={styles.socials}>
            <a href="https://www.instagram.com/canape.bx?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <img
                className={styles.instagram}
                src="/Images/instagramLogo.png"
                alt=""
              />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61555536804111">
              <img
                className={styles.facebook}
                src="/Images/facebookLogo.png"
                alt=""
              />
            </a>
          </div>
        </div>

        <div className={styles.Inleiding}>
          <div className={styles.vriendenboekje}>
            <div className={styles.naamtekening}>
              <div className={styles.question}>
                <h1>{t.myNameIs}</h1>
                <img
                  src="/Images/naamAnna.png"
                  alt="Canape Logo"
                  className={styles.Logo}
                />
              </div>
              <img
                src="/Images/sterretjes.png"
                alt="sterretjes"
                className={styles.sterretjes}
              />
            </div>

            <br />

            <div className={styles.question}>
              <h1>{t.myBirthdayIs}</h1>
              <img
                src="/Images/15novembre2023.png"
                alt="15 december"
                className={styles.birthday}
              />
            </div>
            <br />

            <div className={styles.question}>
              <h1>{t.myEmailIs}</h1>
              <div className={styles.antwoord}>
                <a href="mailto:canapebrussel@gmail.com?subject=Algemene vraag">
                  <img
                    src="/Images/mail.png"
                    alt="canapebrussel@gmail.com"
                    className={styles.mail}
                  />
                </a>
              </div>
            </div>
            <br />

            <div className={styles.question}>
              <div className={styles.adrestekening}>
                <h1>{t.myAddressIs}</h1>
                <a href="https://maps.app.goo.gl/3viMxCPa5W1nBn3N6">
                  <img
                    src={
                      language === "nl"
                        ? "/Images/adresnewnl.png"
                        : language === "en"
                        ? "/Images/adresnewnl.png"
                        : "/Images/adresnewnl.png"
                    }
                    alt="Kunstenaarsstraat 1"
                    className={styles.adres}
                  />
                </a>
                <img
                  src="/Images/sterMannetjes.png"
                  alt="mannetjes"
                  className={styles.sterMannetjes}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.arrows}>
        <button className={styles.arrowButton}>
          <a href="./about">
            <span>&rarr;</span>
          </a>
        </button>
      </div>
    </div>
  );
}
