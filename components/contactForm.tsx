import emailjs from "emailjs-com";
import styles from "../styles/contactForm.module.scss";
import useTranslation from "next-translate/useTranslation";

export default function ContactUs() {
  const { t, lang } = useTranslation();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d3vtwmq",
        "template_olhynrc",
        e.target,
        "user_L725slcip99QgrrJHAWux"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <section className={styles.contactFormContainer}>
      <div className={styles.info}>
        <p>{t("common:paragraf1")}</p>
        <p>{t("common:paragraf2")}</p>
        <a href="tel:608382988">+48 608 382 988</a>
        <br />
        <a href="mailto:kontakt@kyambalo.com">kontakt@kyambalo.com</a>
        <p>{t("common:paragraf3")}</p>
        <strong>{t("common:paragraf4")}</strong>
        <br />
        <br />

        <p>FHU TIP-TOP DARIUSZ MAŁEK</p>
        <p>NIP: 6791410469</p>
        <p>Regon: 350771686</p>
        <p>{t("common:paragraf5")}</p>
      </div>
      <form className={styles.contactForm} onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          placeholder={t("common:placeholder1")}
        />
        <br />
        <input
          type="email"
          name="user_email"
          placeholder={t("common:placeholder2")}
        />
        <br />
        <textarea name="message" placeholder={t("common:placeholder3")} />
        <br />
        <p>{t("common:disclaimer1")}</p>
        <p>{t("common:disclaimer2")}</p>
        <input
          type="submit"
          value={t("common:button")}
          className={styles.submit}
        />
      </form>
    </section>
  );
}
