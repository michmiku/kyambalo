import Head from "next/head";
import styles from "./styles.module.scss";
import Navbar from "../../components/navbar";
import ContactForm from "../../components/contactForm";
import Footer from "../../components/footer";
import Header from "../../components/subHeader";
import Socials from "../../components/socialMedia";
import useTranslation from "next-translate/useTranslation";
import { GetStaticProps } from "next";
import { getPosts } from "../api/posts";
import Link from "next/link";
import { Image } from "cloudinary-react";

const CONTENT_API_KEY = "e64dbe539a67c568204584e5ce";
const BLOG_URL = "https://kyambalo-blog.herokuapp.com";

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await getPosts();

  return {
    revalidate: 10,
    props: {
      posts,
    },
  };
};
const Blog: React.FC<{ posts: any }> = ({ posts }) => {
  const { t, lang } = useTranslation();
  console.log(posts);
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
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Blog Kyambalo - produkty z kory afrykańskich drzew"
        />
        <meta
          property="og:description"
          content="Chcesz dowiedzieć się czegoś więcej o naszym materiale i Ugandzie? zapraszam na naszego bloga!"
        />
        <meta property="og:url" content="https://kyambalo.com/blog/" />
        <meta
          property="og:image"
          content="https://res-5.cloudinary.com/hai1uwfgg/image/upload/q_auto/v1/ghost-blog-images/Blog-1.jpg"
          key="ogimage"
        />
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
      <Navbar currentSite="blog" />
      <Header img="bg4_vupemt" tytul="BLOG" />
      <main className={styles.main}>
        <Socials />
        <section className={styles.post}>
          {posts.map((post) => (
            <Link href={`/blog/[slug]`} as={`/blog/${post.slug}`} key={post.id}>
              <article>
                <section className={styles.imageContainer}>
                  <Image src={post.feature_image} alt={post.title} />
                </section>
                <div className={styles.card}>
                  <a>
                    <header>
                      <p>{post.primary_tag.name}</p>
                      <h2>
                        <b>{post.title}</b>
                      </h2>
                    </header>
                    <section>
                      <p>{post.excerpt}</p>
                    </section>
                  </a>
                  <footer>
                    <div className={styles.authorImage}>
                      <Image src={post.primary_author.profile_image} />
                    </div>
                    <div className={styles.content}>
                      <span className={styles.author}>
                        <p>{post.primary_author.name}</p>
                      </span>
                      <span className={styles.time}>
                        <time dateTime={post.published_at.slice(0, 10)}>
                          {post.published_at.slice(0, 10)}
                        </time>
                        <span> • {post.reading_time} min read</span>
                      </span>
                    </div>
                  </footer>
                </div>
              </article>
            </Link>
          ))}
        </section>
        <section className={styles.section}>
          <ContactForm />
        </section>
      </main>
      <Footer currentSite="blog" />
    </div>
  );
};
export default Blog;
