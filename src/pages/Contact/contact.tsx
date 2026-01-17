import styles from "./contact.module.scss";

export default function Calendar() {
  return (
    <div className={styles.alles}>
      <div className={styles.boekje}>
        <div className={styles.topper}>
          <p id={styles.left}>
            <a href="/index.html">Canapé </a> {">"} Contact
          </p>
          <p id={styles.right}>5 - Contact</p>
        </div>
        <div className={styles.pages}>
          <div className={styles.leftPage}>
            <img className={styles.knuffel} src="/Images/knuffel.png" alt="" />
            <img className={styles.hartje} src="/Images/blinkje4.png" alt="" />
            <div className={styles.belangrijk}>
              <p>
                Kunstenaarsstraat 1, <br />
                1020 Brussel canapebrussel@gmail.com <br />
                btw nummer: BE 1017851484
                <br />
                bankrekeningnummer: <br />
                BE81 3632 5696 1124
              </p>
            </div>
          </div>
          <div className={styles.rightPage}>
            <div className={styles.topContact}>
              <p>Algemene coördinator: Anna Van Durme</p>
              <button className={styles.button}>
                <a href="mailto:annavandurme@canapecanape.be">Mail me!</a>
              </button>
            </div>

            <div>
              <p>Curatie, artist management en communicatie: Linde Stevens</p>
              <button className={styles.button}>
                <a href="mailto:lindestevens@canapecanape.be">Mail me!</a>
              </button>
            </div>
            <div>
              <p>Vrijwilligerswerking: Louise-Cécile Lauwers</p>
              <div className={styles.buttonLouise}>
                <button className={styles.button}>
                  <a href="mailto:louisececilelauwers@canapecanape.be">
                    Mail me!
                  </a>
                </button>
                <br />
                <button className={styles.button}>
                  <a href="https://chat.whatsapp.com/KwAQWdqR2ZeKmXHcllAEZq">
                    Doe hier mee met onze chat!
                  </a>
                </button>
                <br />
                <button className={styles.button}>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfIJxAA9gtAJ0LtXHFLMEZp5eM099le9IRGizNYo6B9qeFuEQ/viewform?usp=sf_link">
                    Vul onze form in en we zullen je contacteren met meer
                    informatie.
                  </a>
                </button>
              </div>
            </div>
            <div>
              <p>Atelierwerking: Amber Verhulst</p>
              <button className={styles.button}>
                <a href="mailto:amberverhulst@canapecanape.be">Mail me!</a>
              </button>
            </div>
            <div>
              <p>Buurtwerking: Michelle Francq</p>
              <button className={styles.button}>
                <a href="mailto:michellefrancq@canapecanape.be">Mail me!</a>
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
