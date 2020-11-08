import styles from "../styles/Home.module.scss";

export default function Map() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5128.38713974946!2d19.894901000000004!3d50.007727!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165cfb01ef78fd%3A0x6dbe1c3e2d6fad26!2zWmF3acWCYSA2OSwgMzAtMzgyIEtyYWvDs3c!5e0!3m2!1spl!2spl!4v1604756476127!5m2!1spl!2spl"
      width="100%"
      height="100%"
      frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen={true}
      aria-hidden="false"
      tabIndex={0}
    ></iframe>
  );
}
