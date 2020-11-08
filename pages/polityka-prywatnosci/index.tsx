import Head from "next/head";
import styles from "./styles.module.scss";
import Navbar from "../../components/navbar";
import Header from "../../components/subHeader";
import ContactForm from "../../components/contactForm";
import Footer from "../../components/footer";
import Socials from "../../components/socialMedia";

export default function Home({ fileNames }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Polityka Prywatności Kyambalo - produkty z kory afrykańskich drzew
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar currentSite="polityka-prywatnosci" />
      <Header img="bg1.jpg" tytul="POLITYKA PRYWATNOŚCI" />
      <main className={styles.main}>
        <Socials />
        <section className={styles.section}>
          <p>
            Ochrona danych osobowych stanowi dla Kyambalo najwyższy priorytet.
            Poniżej zawarte są informacje dotyczące postępowania z danymi
            osobowymi oraz stosowania plików cookies.
          </p>
          <h3>
            <strong>§ 1 POSTANOWIENIA OGÓLNE</strong>
          </h3>
          <ol>
            <li>
              Administratorem danych osobowych Klientów oraz odwiedzających
              stronę www przekazanych nam dobrowolnie w ramach w ramach
              odwiedzin naszej witryny, profilu na Facebook, w ramach
              świadczenia przez Sprzedawcę usług drogą elektroniczną lub innych
              wyraźnie określonych w tym w Regulaminie w ramach innych
              okoliczności określonych w Regulaminie, jest firma F.H.U. TIP-TOP,
              ul. Zawiła 269, 30-390 Kraków, NIP: 679-141-04-69, Regon:
              350771686, wpisana do CEIDG; e-mail:{" "}
              <a href="mailto:kontakt@kyambalo.com">kontakt@kyambalo.com</a>,
              zwany dalej na potrzeby niniejszej polityki „Administratorem”.
            </li>
            <li>
              Dane osobowe Klientów są przetwarzane zgodnie z ogólnym
              rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z
              dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w
              związku z przetwarzaniem danych osobowych i w sprawie swobodnego
              przepływu takich danych (dalej „RODO”) i przepisami krajowymi w
              zakresie ochrony danych osobowych w tym ustawą o ochronie danych
              osobowych oraz ustawą o świadczeniu usług drogą elektroniczną z
              dnia 18 lipca 2002 r. (Dz.U.2017.1219 t.j. ze zm..)
            </li>
            <li>
              Administrator dokłada szczególnej staranności w celu ochrony
              interesów osób, których dane dotyczą, a w szczególności zapewnia,
              że zbierane przez niego dane są przetwarzane zgodnie z prawem;
              zbierane dla oznaczonych, zgodnych z prawem celów i niepoddawane
              dalszemu przetwarzaniu niezgodnemu z tymi celami; merytorycznie
              poprawne i adekwatne w stosunku do celów, w jakich są przetwarzane
              oraz przechowywane w postaci umożliwiającej identyfikację osób,
              których dotyczą, nie dłużej niż jest to niezbędne do osiągnięcia
              celu przetwarzania.
            </li>
            <li>
              Administrator Danych nie powołał Inspektora Danych Osobowych.
            </li>
            <li>
              Możliwe jest odwiedzanie strony internetowej Administratora bez
              podawania danych osobowych identyfikujących osobę fizyczną. Dane
              osobowe takie są przechowywane po zakończeniu sesji przeglądarki i
              przykładowo wykorzystywane podczas kolejnej wizyty na stronie
              internetowej. Podanie innych danych osobowych jest dobrowolne, ale
              może być konieczne w celu zawarcia umowy lub innym na jaki zgodę
              wyrazi osoba podająca dane .
            </li>
          </ol>
          <h3>
            <strong>§ 2 CEL, ZAKRES I PODSTAWA ZBIERANIA DANYCH</strong>
          </h3>
          <ol>
            <li>
              Celem zbierania danych osobowych przez Administratora jest:
              <ul>
                <li>
                  Nawiązanie, ukształtowanie treści, zmiana, wykonanie lub
                  rozwiązanie stosunku umownego między Usługodawcą i
                  Usługobiorcą polegającego na świadczeniu usług poprzez stronę
                  www.
                </li>
                <li>
                  Marketing bezpośredni własnych produktów lub usług
                  Administratora;
                </li>
                <li>Analiza poprzez pliki cookies</li>
              </ul>
            </li>
            <li>
              Administrator przetwarza następujące dane osobowe Usługobiorców:
              imię i nazwisko; adres poczty elektronicznej; numer telefonu
              kontaktowego;. W wypadku Usługobiorców zawierających umowy o
              świadczenie usług związanych z poprawą kondycji fizycznej
              Usługodawca może wymagać podania innych danych w tym o stanie
              zdrowia. Podanie danych może być konieczne w celu uniknięcia
              zagrożenia dla zdrowia i życia Usługobiorcy. Dane te nigdy nie są
              przesyłane drogą elektroniczną, nie są podawane poprzez stronę www
              ale przechowywane mogą być w programach obsługi klienta
              Administratora.
            </li>
            <li>
              Podanie danych osobowych, o których mowa ust. 2 jest dobrowolne,
              ale w określonych sytuacjach może być niezbędne do zawarcia Umowy
              o świadczenie usług związanych z poprawą kondycji fizycznej lub
              umowy o świadczenie Usług świadczonych droga elektroniczną.
            </li>
            <li>
              Podstawą przetwarzania danych osobowych Usługobiorcy jest
              niezbędność do celów wynikających z prawnie uzasadnionych
              interesów realizowanych przez administratora zgoda lub konieczność
              realizacji umowy, której Klient jest stroną bądź podjęcia na jego
              żądanie działań przed lub po jej zawarciu, a także marketing
              bezpośredni własnych produktów lub usług Administratora.
            </li>
            <li>
              Podane przez Klientów dane osobowe nie będą udostępniane innym
              podmiotom poza tymi którzy posiadają właściwą podstawę prawną, w
              tym na podstawie umów przetwarzania danych w sposób nie mniej
              restrykcyjny niż ten jaki zapewnia Administrator danych.
            </li>
          </ol>
          <h3>
            <strong>§ 3 DANE EKSPLOATACYJNE</strong>
          </h3>
          <ol>
            <li>
              Administrator może przetwarzać za pomocą odpowiedniego
              oprogramowania następujące dane charakteryzujące sposób
              korzystania przez Usługobiorcę z Usług (dane eksploatacyjne):
              <ul>
                <li>
                  Oznaczenia identyfikujące zakończenie sieci telekomunikacyjnej
                  lub system teleinformatyczny, z którego korzystał
                  Usługobiorca;
                </li>
                <li>
                  Informacje o rozpoczęciu, zakończeniu oraz zakresie
                  każdorazowego korzystania przez Usługobiorcę z usługi
                  świadczonej drogą elektroniczną;
                </li>
                <li>
                  Informacje o skorzystaniu przez Usługobiorcę z usług
                  świadczonych drogą elektroniczną;
                </li>
              </ul>
            </li>
            <li>
              Dane eksploatacyjne mają charakter zbiorczy i anonimowy, tj. nie
              zawierają cech identyfikujących osoby odwiedzające stronę Serwis i
              nie są ujawniane osobom trzecim.
            </li>
          </ol>
          <h3>
            <strong>
              § 4 PRAWO KONTROLI, DOSTĘPU DO TREŚCI SWOICH DANYCH ORAZ ICH
              POPRAWIANIA
            </strong>
          </h3>
          <ol>
            <li>
              Klient ma prawo dostępu do dostępu do treści swoich danych oraz
              prawo ich sprostowania, usunięcia, ograniczenia przetwarzania,
              prawo do przenoszenia danych, prawo wniesienia sprzeciwu, prawo do
              cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z
              prawem przetwarzania, którego dokonano na podstawie zgody przed
              jej cofnięciem; To z jakich praw może Klient skorzystać zależy np.
              od podstawy prawnej na jakiej przetwarzane są jego dane oraz celu
              ich przetwarzania.
            </li>
            <li>
              Każdej osobie przysługuje prawo do kontroli przetwarzania danych
              zawartych w zbiorze danych Administratora, które jej dotyczą, a
              zwłaszcza prawo do: żądania uzupełnienia, uaktualnienia,
              sprostowania danych osobowych, czasowego lub stałego wstrzymania
              ich przetwarzania lub ich usunięcia, szczególnie jeżeli są one
              niekompletne, nieaktualne, nieprawdziwe lub zostały zebrane z
              naruszeniem ustawy albo są już zbędne do realizacji celu, dla
              którego zostały zebrane.
            </li>
            <li>
              W przypadku przetwarzania danych w celu marketingu bezpośredniego
              własnych produktów lub usług Administratora osoba, której dane
              dotyczą uprawniona jest także do wniesienia pisemnego żądania
              zaprzestania przetwarzania jej danych oraz wniesienia sprzeciwu
              wobec przetwarzania jej danych.
            </li>
            <li>
              W celu realizacji uprawnień, o których mowa powyżej można przesłać
              stosowne żądanie poprzez wiadomość pocztą elektroniczną na adres:
              <a href="mailto:kontakt@kyambalo.com">
                kontakt@kyambalo.com
              </a>{" "}
              albo pisemnie na adres siedziby Administratora.
            </li>
            <li>
              Każda osoba ma prawo wniesienia skargi do Prezesa Urzędu Ochrony
              Danych Osobowych (PUODO dawniej GIODO) gdy uzna, iż przetwarzanie
              jej danych osobowych narusza przepisy ogólnego rozporządzenia o
              ochronie danych osobowych z dnia 27 kwietnia 2016 r.
            </li>
            <li>
              Dane osobowe nie będą przekazywane do państwa
              trzeciego/organizacji międzynarodowej.
            </li>
            <li>
              Dane osobowe będą przechowywane przez okres trwania umowy oraz
              okres wymagany obowiązkami prawnymi w tym 5 lat od dnia
              wystawienia ostatniej faktury/rachunku zgodnie z ustawą o
              rachunkowości a przypadku braku zapłaty lub innych roszczeń przez
              okres konieczny do dochodzenia roszczenia (przedawnienie). Dane
              przekazane na podstawie zgody będą przetwarzane do czasu odwołania
              zgody.
            </li>
            <li>
              Dane nie będą przetwarzane w sposób zautomatyzowany w tym również
              w formie profilowania tzn. żadne decyzje wywołujące wobec osoby
              skutki prawne lub w podobny sposób na nią istotnie wpływające nie
              będą oparte wyłącznie na automatycznym przetwarzaniu danych
              osobowych i nie wiążą się z taką automatycznie podejmowaną
              decyzją. Należy jednak mieć na uwadze, że Partnerzy współpracujący
              z administratorem, których wskazuje się w § 5 niniejszej polityki
              przetwarzają dane zebrane za pośrednictwem strony www w celu
              skierowania reklamy opartej na zainteresowaniach Klientów. Dane
              jakie mogą być przekazywane to w szczególności: Adres IP (Internet
              Protocol), dane geolokalizacyjne pochodzące z adresu IP Klienta,
              identyfikator reklamy mobilnej (MAID) (który pozwala programistom
              aplikacji mobilnych określić, kto korzysta z ich aplikacji
              mobilnych), identyfikator aplikacji mobilnej, typ przeglądarki,
              język przeglądarki, typ systemu operacyjnego oraz datę i godzinę w
              której klient odwiedził witrynę, zachowanie w witrynie takie jak
              czas jej przeglądania przez klienta oraz przejawiane przez niego
              zainteresowania, odnośny adres URL i sposoby wyszukiwania w sieci,
              których klient używa do lokalizowania i odwiedzania witryny,
              informacje na temat korzystania przez klienta z narzędzi (np. do
              wyszukiwania określonych treści w witrynie) oferowanych przez
              Partnerów Administratora, które mogą być udostępniane w witrynie.
              Dane te pozwalają na stworzenie profilów marketingowych odbiorców
              reklam oraz analizę funkcjonalności strony w celu dostosowania jej
              do preferencji klientów.
            </li>
            <li>
              Dane określone w ust 8 zbierane są za pośrednictwem plików
              cookies. Informacje na temat stosowania plików cookies, a także na
              temat możliwości zarządzania plikami cookies, w tym blokowania ich
              wykorzystania znajdują się w § 5 niniejszej polityki.
            </li>
          </ol>
          <h3>
            <strong>§ 5 WYKORZYSTANIE PLIKÓW COOKIE</strong>
          </h3>
          <ol>
            <li>
              Pliki cookies to małe pliki tekstowo-numeryczne umieszczane na
              komputerze Użytkownika podczas odwiedzin strony/witryny. Pliki
              cookie umożliwiają stronom internetowym rozpoznanie komputera
              użytkownika. Pliki te w większości przypadków nie umożliwiają
              identyfikacji tożsamości użytkownika sieci. Pliki cookie nie
              powodują żadnych szkód w komputerze Użytkownika i nie zawierają
              wirusów.
            </li>
            <li>
              Powszechnie stosowane są dwa rodzaje plików cookie – sesyjne oraz
              stałe. Cookies sesyjne, to pliki tymczasowe, które pozostają na
              urządzeniu użytkownika do momentu wylogowania ze strony
              internetowej lub wyłączenia przeglądarki. Cookies stałe pozostają
              w pamięci urządzenia użytkownika przez czas określony w ich
              parametrach lub do momentu ich ręcznego usunięcia.
            </li>
            <li>
              Administrator może wykorzystywać Cookies własne w szczególności: w
              celu poprawnej konfiguracji strony internetowej, realizacji
              procesów niezbędnych dla jej pełnej funkcjonalności,
              uwierzytelniania klienta w serwisie i zapewnienia ciągłości sesji
              klienta w serwisie, zapamiętania lokalizacji klienta, w celu
              analiz i badań oraz audytu oglądalności, a także w celu
              świadczenia usług reklamowych.
            </li>
            <li>
              Administrator może wykorzystywać cookies zewnętrzne, w
              szczególności: w zakresie stosowania narzędzi analitycznych,
              świadczenia usług reklamowych w tym w celu identyfikacji grup
              klientów, którzy podzielają określone zainteresowania, w celu
              umożliwienia udostępniania treści zawartych w witrynie na innych
              stronach internetowych.
            </li>
            <li>
              Administrator wykorzystuje następujące cookies zewnętrzne:
              <ul>
                <li>
                  W celu polubienia strony Administratora lub bezpośredniego
                  przejścia do profilu Kyambalo na Facebooku za pomocą̨ serwisu
                  Facebook Connect niezależnie od tego, czy masz konto na
                  Facebooku i czy jesteś zalogowany(a) do Facebooka
                  administrator cookies zewnętrznego: Facebook Inc z siedzibą w
                  USA lub Facebook Ireland z siedzibą w Irlandii) – szczegóły i
                  polityka Cookiem fb{" "}
                  <a href="https://www.facebook.com/policies/cookies">
                    https://www.facebook.com/policies/cookies
                  </a>
                </li>
                <li>
                  W celu lokalizacji usługi Google Map i Google Earth za pomocą
                  serwisu Google (administrator cookies zewnętrznego: Google Inc
                  z siedzibą w USA) Więcej na ten temat:
                  <a href="https://privacy.google.com/intl/pl/businesses/mapscontrollerterms/">
                    https://privacy.google.com/intl/pl/businesses/mapscontrollerterms/
                  </a>
                </li>
              </ul>
            </li>
            <li>
              Poniżej można wyrazić zgodę na korzystanie z zewnętrznych plików
              cookie służących do profilowania w celach marketingowych
              zainstalowanych za pośrednictwem naszych stron i serwisów, lub
              zobaczyć wcześniej dokonany wybór, które można dowolnie zmieniać w
              każdej chwili.
            </li>
          </ol>
          <table width="100%">
            <thead>
              <tr>
                <th>
                  <strong>Źródło</strong>
                </th>
                <th>
                  <strong>Nazwa domeny cookie</strong>
                </th>
                <th>
                  <strong>Typ Cookie </strong>
                </th>
                <th>
                  <strong>Polityka Cookies</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Facebook</td>
                <td>Facebook.com</td>
                <td>Profilowanie</td>
                <td>
                  <a href="https://www.facebook.com/policies/cookies">
                    https://www.facebook.com/policies/cookies
                  </a>
                </td>
              </tr>
              <tr>
                <td>Google</td>
                <td>Gogle.com</td>
                <td>Lokalizacja</td>
                <td>
                  <a href="https://privacy.google.com/intl/pl/businesses/mapscontrollerterms/">
                    https://privacy.google.com/intl/pl/businesses/mapscontrollerterms/
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Administrator danych nie ponosi odpowiedzialności za jakiekolwiek
            wadliwe działanie witryn stron trzecich wymienionych na tej stronie.
          </p>
          <ol start={7}>
            <li>
              Jeżeli Użytkownicy nie życzą sobie wykorzystania plików cookies,
              mogą w każdej chwili zarządzać użyciem plików w tym zrezygnować z
              tej formy gromadzenia danych w następujący sposób:
              <ul>
                <li>
                  Poprzez modyfikację ustawień przeglądarki internetowej, gdzie
                  w ustawieniach zabezpieczeń można niezależnie od siebie
                  dopuszczać lub blokować tymczasowe i trwale zapisane pliki
                  cookie. Szczegółowe informacje o możliwości i sposobach
                  obsługi plików cookie dostępne są w zakładce Pomoc w menu
                  każdej przeglądarki.
                </li>
                <li>
                  Poprzez odwiedzenie wskazanych w ust. 5 witryn w celu
                  rezygnacji z wykorzystania zewnętrznych plików cookies w tym
                  plików cookie do wyświetlania reklam opartych na
                  zainteresowaniach (jeśli dostawca takiej witryny lub sieć
                  reklamowa dają taką możliwość).
                </li>
                <li>
                  Za pośrednictwem specjalnie przeznaczonych do tego narzędzi do
                  obsługi wyborów konsumenckich, które służą do zarządzania
                  plikami cookie używanymi do wyświetlania reklam, opartych na
                  zainteresowaniach Użytkowników dostępnych np. tutaj{" "}
                  <a href="http://www.youronlinechoices.eu/">
                    http://www.youronlinechoices.eu/
                  </a>{" "}
                  lub tutaj{" "}
                  <a href="http://www.aboutads.info/choices/">
                    http://www.aboutads.info/choices/
                  </a>{" "}
                  .
                </li>
              </ul>
            </li>
            <li>
              Jeżeli pliki cookie zostaną dezaktywowane, z wykorzystaniem metod
              określonych w niniejszym paragrafie istnieje zagrożenie, że
              niektóre funkcjonalności na naszej stronie internetowej będą
              niedostępne, a niektóre strony internetowe będą wyświetlane
              nieprawidłowo.
            </li>
          </ol>
          <h3>
            <strong>§ 6 POSTANOWIENIA KOŃCOWE</strong>
          </h3>
          <ol>
            <li>
              Strona internetowa może ale nie musi zawierać odnośniki do innych
              stron internetowych. Administrator zaleca by po przejściu na inne
              strony, zapoznać się z polityką prywatności tam ustaloną.
              Niniejsza polityka prywatności dotyczy tylko serwisu i strony
              Administratora.
            </li>
            <li>
              Administrator stosuje środki techniczne i organizacyjne
              zapewniające ochronę przetwarzanych danych osobowych odpowiednią
              do zagrożeń oraz kategorii danych objętych ochroną, a w
              szczególności zabezpiecza dane przed ich udostępnieniem osobom
              nieupoważnionym, zabraniem przez osobę nieuprawnioną,
              przetwarzaniem z naruszeniem obowiązujących przepisów oraz zmianą,
              utratą, uszkodzeniem lub zniszczeniem zgodnie z obowiązującymi
              przepisami prawa.
            </li>
          </ol>
          <p>
            Niniejsza Polityka Prywatności jest udostępniana Użytkownikom
            bezpłatnie także w wersji pdf, która może zostać pobrana na prywatną
            jednostkę komputerową samodzielnie przez Użytkownika bez żadnych
            ograniczeń.
          </p>
        </section>

        <ContactForm />
      </main>

      <Footer currentSite="polityka-prywatnosci" />
    </div>
  );
}
