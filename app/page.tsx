import Head from "next/head";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cafe & Fruits | Coffee & Fresh Juices</title>
        <meta
          name="description"
          content="Exceptional Coffee & Fresh Juices in the Heart of Paris"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Raleway:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Hero />
      <Menu />
      <Gallery />
      <About />
      <Contact />
    </>
  );
}
