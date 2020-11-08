import emailjs from "emailjs-com";
import styles from "../styles/contactForm.module.scss";

export default function ContactUs() {
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
        <p>Chcesz dowiedzieć się czegoś więcej na temat marki Kyambalo?</p>
        <p>Skontaktuj się z nami.</p>
        <a href="tel:608382988">+48 608 382 988</a>
        <br />
        <a href="mailto:kontakt@kyambalo.com">kontakt@kyambalo.com</a>
        <p>Showroom : ul. Zawiła 69, 30-390 Kraków</p>
        <strong>Spotkania i wizyty po uprzednim kontakcie telefonicznym</strong>
        <p>FHU TIP-TOP DARIUSZ MAŁEK</p>
        <p>NIP: 6791410469</p>
        <p>Regon: 350771686</p>
        <p>Rok założenia 1993</p>
      </div>
      <form className={styles.contactForm} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="IMIĘ I NAZWISKO" />
        <br />
        <input type="email" name="user_email" placeholder="ADRES E-MAIL" />
        <br />
        <textarea name="message" placeholder="WPISZ SWOJĄ WIADOMOŚĆ" />
        <br />
        <p>
          Administratorem Państwa danych osobowych jest F.H.U. TIP-TOP Dariusz
          Małek z siedzibą w Krakowie, ul. Spółdzielców 3, 30-682 Kraków.
        </p>
        <p>
          Przetwarzamy Państwa dane wyłącznie w celu udzielenia odpowiedzi na
          pytanie zawarte w formularzu kontaktowym. Podstawa przetwarzania
          danych to realizacja prawnie uzasadnionych interesów administratora w
          postaci komunikacji z użytkownikami strony. Państwa dane będą
          przetwarzane nie dłużej, niż jest to konieczne do udzielenia
          odpowiedzi, a po tym czasie mogą być przetwarzane przez okres
          przedawnienia ewentualnych roszczeń.
        </p>
        <input
          type="submit"
          value="WYŚLIJ ZGŁOSZENIE"
          className={styles.submit}
        />
      </form>
    </section>
  );
}
