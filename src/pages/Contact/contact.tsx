import styles from "./contact.module.scss";
import { useState, useEffect } from "react";

type Language = "nl" | "en" | "fr";

const contactTranslations: Record<
  Language,
  {
    title: string;
    pageNumber: string;
    address: string;
    email: string;
    vat: string;
    bankAccount: string;
    coordinator: string;
    curation: string;
    volunteers: string;
    atelier: string;
    neighborhood: string;
    mailMe: string;
    joinChat: string;
    fillForm: string;
  }
> = {
  nl: {
    title: "Canapé ",
    pageNumber: "5 - Contact",
    address: "Kunstenaarsstraat 1,",
    email: "canapebrussel@gmail.com",
    vat: "btw nummer: BE 1017851484",
    bankAccount: "bankrekeningnummer:",
    coordinator: "Algemene coördinator: Anna Van Durme",
    curation: "Curatie, artist management en communicatie: Linde Stevens",
    volunteers: "Vrijwilligerswerking: Louise-Cécile Lauwers",
    atelier: "Atelierwerking: Amber Verhulst",
    neighborhood: "Buurtwerking: Michelle Francq",
    mailMe: "Mail me!",
    joinChat: "Doe hier mee met onze chat!",
    fillForm: "Vul onze form in en we zullen je contacteren met meer informatie.",
  },
  en: {
    title: "Canapé ",
    pageNumber: "5 - Contact",
    address: "Kunstenaarsstraat 1,",
    email: "canapebrussel@gmail.com",
    vat: "VAT number: BE 1017851484",
    bankAccount: "bank account number:",
    coordinator: "General coordinator: Anna Van Durme",
    curation: "Curation, artist management and communication: Linde Stevens",
    volunteers: "Volunteer work: Louise-Cécile Lauwers",
    atelier: "Studio work: Amber Verhulst",
    neighborhood: "Neighborhood work: Michelle Francq",
    mailMe: "Mail me!",
    joinChat: "Join our chat here!",
    fillForm: "Fill in our form and we will contact you with more information.",
  },
  fr: {
    title: "Canapé ",
    pageNumber: "5 - Contact",
    address: "Kunstenaarsstraat 1,",
    email: "canapebrussel@gmail.com",
    vat: "numéro de TVA: BE 1017851484",
    bankAccount: "numéro de compte bancaire:",
    coordinator: "Coordonnateur général: Anna Van Durme",
    curation: "Curation, artist management et communication: Linde Stevens",
    volunteers: "Travail de bénévolat: Louise-Cécile Lauwers",
    atelier: "Travail d'atelier: Amber Verhulst",
    neighborhood: "Travail de quartier: Michelle Francq",
    mailMe: "Mail me!",
    joinChat: "Rejoignez notre chat ici!",
    fillForm: "Remplissez notre formulaire et nous vous contacterons avec plus d'informations.",
  },
};

export default function Contact() {
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

  const t = contactTranslations[language];
  return (
    <div className={styles.alles}>
      <div className={styles.boekje}>
        <div className={styles.topper}>
          <p id={styles.left}>
            <a href="/index.html">{t.title}</a> {">"} Contact
          </p>
          <p id={styles.right}>{t.pageNumber}</p>
        </div>
        <div className={styles.pages}>
          <div className={styles.leftPage}>
            <img className={styles.knuffel} src="/Images/knuffel.png" alt="" />
            <img className={styles.hartje} src="/Images/blinkje4.png" alt="" />
            <div className={styles.belangrijk}>
              <p>
                {t.address} <br />
                1020 Brussel {t.email} <br />
                {t.vat}
                <br />
                {t.bankAccount} <br />
                BE81 3632 5696 1124
              </p>
            </div>
          </div>
          <div className={styles.rightPage}>
            <div className={styles.topContact}>
              <p>{t.coordinator}</p>
              <button className={styles.button}>
                <a href="mailto:annavandurme@canapecanape.be">{t.mailMe}</a>
              </button>
            </div>

            <div>
              <p>{t.curation}</p>
              <button className={styles.button}>
                <a href="mailto:lindestevens@canapecanape.be">{t.mailMe}</a>
              </button>
            </div>
            <div>
              <p>{t.volunteers}</p>
              <div className={styles.buttonLouise}>
                <button className={styles.button}>
                  <a href="mailto:louisececilelauwers@canapecanape.be">
                    {t.mailMe}
                  </a>
                </button>
                <br />
                <button className={styles.button}>
                  <a href="https://chat.whatsapp.com/KwAQWdqR2ZeKmXHcllAEZq">
                    {t.joinChat}
                  </a>
                </button>
                <br />
                <button className={styles.button}>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfIJxAA9gtAJ0LtXHFLMEZp5eM099le9IRGizNYo6B9qeFuEQ/viewform?usp=sf_link">
                    {t.fillForm}
                  </a>
                </button>
              </div>
            </div>
            <div>
              <p>{t.atelier}</p>
              <button className={styles.button}>
                <a href="mailto:amberverhulst@canapecanape.be">{t.mailMe}</a>
              </button>
            </div>
            <div>
              <p>{t.neighborhood}</p>
              <button className={styles.button}>
                <a href="mailto:michellefrancq@canapecanape.be">{t.mailMe}</a>
              </button>
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
        </div>
        <div className={styles.arrows}>
          <button className={styles.arrowButton}>
            <a href="/events">
              <span>&larr;</span>
            </a>
          </button>
          <button className={styles.arrowButton}>
            <a href="/villa">
              <span>&rarr;</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
