import { useState } from "react";
import styles from "./navigations.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    window.dispatchEvent(new CustomEvent("languageChange", { detail: lang }));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={`${styles.bar} ${isMenuOpen ? styles.open : ""}`}></div>
        <div className={`${styles.bar} ${isMenuOpen ? styles.open : ""}`}></div>
        <div className={`${styles.bar} ${isMenuOpen ? styles.open : ""}`}></div>
      </div>

      <div
        className={`${styles.midden} ${
          isMenuOpen ? styles.mobileMenuOpen : ""
        }`}
        style={{ zIndex: 999 }}
      >
        <Link to="/Home" onClick={() => setIsMenuOpen(false)}>
          {t("navigation.home")}
        </Link>
        <Link to="/about" onClick={() => setIsMenuOpen(false)}>
          {t("navigation.about")}
        </Link>
        <Link to="/news" onClick={() => setIsMenuOpen(false)}>
          {t("navigation.news")}
        </Link>
        <Link to="/calendar" onClick={() => setIsMenuOpen(false)}>
          {t("navigation.calendar")}
        </Link>
        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
          {t("navigation.contact")}
        </Link>
        <Link to="/villa" onClick={() => setIsMenuOpen(false)}>
          {t("navigation.villa")}
        </Link>
        <Link to="/support" onClick={() => setIsMenuOpen(false)}>
          {t("navigation.support")}
        </Link>
        <div className={styles.languageButtons}>
          <button
            className={`${styles.langBtn} ${
              i18n.language === "nl" ? styles.active : ""
            }`}
            onClick={() => changeLanguage("nl")}
          >
            NL
          </button>
          <button
            className={`${styles.langBtn} ${
              i18n.language === "en" ? styles.active : ""
            }`}
            onClick={() => changeLanguage("en")}
          >
            EN
          </button>
          <button
            className={`${styles.langBtn} ${
              i18n.language === "fr" ? styles.active : ""
            }`}
            onClick={() => changeLanguage("fr")}
          >
            FR
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
