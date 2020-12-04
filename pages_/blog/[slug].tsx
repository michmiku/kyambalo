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
import { Image } from "cloudinary-react";
import React, { useEffect } from "react";
import Disqus from "../../components/disqusComment";
import { getPosts } from "../api/posts";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = await params.slug.toString().toLowerCase();
  const post = await getSinglePost(slug);
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
};
export const getStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return {
    paths,
    fallback: true,
  };
};
const PostPage = ({ post }) => {
  // useEffect(() => {
  //   (window as any).disqus_config = function () {
  //     this.page.url = window.location.href;
  //     this.page.identifier = post.slug;
  //   };

  //   const script = document.createElement("script");
  //   script.src = "https://kyambalo.disqus.com/embed.js";
  //   script.setAttribute("data-timestamp", Date.now().toString());
  //   console.log(script);
  // });
  return (
    <div className={styles.container}>
      <Head>
        <title>Kyambalo - {post !== undefined ? post.title : "post"}</title>
        <meta
          name="description"
          content={`${post !== undefined ? post.excerpt : "excerpt"}`}
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link
          rel="canonical"
          href={`https://kyambalo.com/blog/${
            post !== undefined ? post.slug : "post"
          }`}
        />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={`Kyambalo - ${post !== undefined ? post.title : "post"}`}
        />
        <meta
          property="og:description"
          content={`${post !== undefined ? post.excerpt : "excerpt"}`}
        />
        <meta
          property="og:url"
          content={`https://kyambalo.com/blog/${
            post !== undefined ? post.slug : "post"
          }/`}
        />
        <meta
          property="og:image"
          content={
            post !== undefined
              ? post.feature_image
              : "https://res-5.cloudinary.com/hai1uwfgg/image/upload/q_auto/v1/ghost-blog-images/Blog-1.jpg"
          }
          key="ogimage"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content={`${post !== undefined ? post.excerpt : "excerpt"}`}
        />
        <meta
          name="twitter:title"
          content={`Kyambalo - ${post !== undefined ? post.title : "post"}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar currentSite={"blog/" + (post !== undefined ? post.slug : null)} />
      <Header img="bg9_ykc40t" tytul={post !== undefined ? post.title : null} />
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
              <header className={styles.header}>
                <p>{post.primary_tag.name}</p>
                <h1>
                  <b>{post.title}</b>
                </h1>
                <section>
                  <p>{post.excerpt}</p>
                  <section className={styles.imageContainer}>
                    <Image src={post.feature_image} alt={post.title} />
                  </section>
                </section>
              </header>
              <hr />

              <footer>
                <div className={styles.authorImage}>
                  <Image
                    src={post.primary_author.profile_image}
                    alt={post.primary_author.name}
                  />
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

              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          ) : null}
        </section>
        <section className={styles.disqus}>
          {post !== undefined ? <Disqus post={post} /> : null}
        </section>
        <section className={styles.section}>
          <ContactForm />
        </section>
      </main>
      <Footer currentSite={"blog/" + (post !== undefined ? post.slug : null)} />
    </div>
  );
};
export default PostPage;
