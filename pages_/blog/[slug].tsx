import { getSinglePost } from "../api/posts";
import { GetStaticProps } from "next";
import styles from "./post.module.scss";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Header from "../../components/subHeader";
import Socials from "../../components/socialMedia";
import ContactForm from "../../components/contactForm";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let post = undefined;
  if (params !== undefined) {
    post = await getSinglePost(params.slug);
  }

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
};
export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};
const PostPage = ({ post }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog Kyambalo - produkty z kory afrykańskich drzew</title>
        <meta
          name="description"
          content="Chcesz dowiedzieć się czegoś więcej o naszym materiale i Ugandzie? zapraszam na naszego bloga!"
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href="https://kyambalo.com/blog/" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:type" content="blog" />
        <meta
          property="og:title"
          content="Blog Kyambalo - produkty z kory afrykańskich drzew"
        />
        <meta
          property="og:description"
          content="Chcesz dowiedzieć się czegoś więcej o naszym materiale i Ugandzie? zapraszam na naszego bloga!"
        />
        <meta property="og:url" content="https://kyambalo.com/blog/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Chcesz dowiedzieć się czegoś więcej o naszym materiale i Ugandzie? zapraszam na naszego bloga!"
        />
        <meta
          name="twitter:title"
          content="Blog Kyambalo - produkty z kory afrykańskich drzew"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar currentSite={"blog/" + (post !== undefined ? post.slug : null)} />
      <Header img="bg1.jpg" tytul={post !== undefined ? post.title : null} />
      <main className={styles.main}>
        <Socials />
        <Link href="/blog">
          <div className={styles.arrowContainer}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              className={styles.leftArrow}
            />
            <a>Posty</a>
          </div>
        </Link>

        <section className={styles.post}>
          {post !== undefined ? (
            <div>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          ) : null}
        </section>
        <section className={styles.section}>
          <ContactForm />
        </section>
      </main>
      <Footer currentSite={"blog/" + post.slug} />
    </div>
  );
};
export default PostPage;
