import emailjs from "emailjs-com";
import styles from "../styles/contactForm.module.scss";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";

export default function ContactUs() {
  const { t, lang } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nfw0r06",
        "template_olhynrc",
        e.target,
        "user_L725slcip99QgrrJHAWux"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(t("common:contact"));
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          alert(error.text);
        }
      );
  }

  return (
    <section className={styles.contactFormContainer}>
      <div className={styles.info}>
        <p>{t("common:paragraf1")}</p>
        <p>{t("common:paragraf2")}</p>
        <p style={{ margin: 0, fontWeight: "bold" }}>Dariusz Małek</p>
        <a href="tel:608382988">+48 608 382 988</a>
        <br />
        <a href="mailto:kontakt@kyambalo.com">kontakt@kyambalo.com</a>
        <p style={{ margin: "0", marginTop: "20px", fontWeight: "bold" }}>
          Product manager
        </p>
        <p style={{ margin: "0", fontWeight: "bold" }}>Tomasz Bryk</p>
        <a href="tel:728549587">+48 728 549 587</a>
        <br />
        <a href="mailto:tomasz.bryk@kyambalo.com">tomasz.bryk@kyambalo.com</a>
        <p style={{ marginTop: "20px", fontWeight: "bold" }}>
          {t("common:ukraineRep")}
        </p>
        <p>Aspect Polska Sp. z o.o</p>
        <p>{t("common:ukrRepAddress")}</p>
        <span style={{ display: "flex", flexDirection: "row" }}>
          tel:{" "}
          <a href="tel:505998983" style={{ margin: "0 5px" }}>
            505998983
          </a>
          <a href="tel:508095316" style={{ marginLeft: "10px" }}>
            508095316
          </a>
        </span>
        <a href="mailto:krzysztof.kmak@gmail.com">krzysztof.kmak@gmail.com</a>
        <br />
        <a href="mailto:aspect.polska@gmail.com ">aspect.polska@gmail.com </a>
        <br />
        <a href="http://aspect.com.ua" target="_blank">
          http://aspect.com.ua
        </a>
        <p style={{ marginTop: "20px" }}>{t("common:paragraf3")}</p>
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
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <input
          type="email"
          name="user_email"
          placeholder={t("common:placeholder2")}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <textarea
          name="message"
          placeholder={t("common:placeholder3")}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
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
