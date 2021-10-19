import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import styles from "./PostDetail.module.css";
import Layout from "../../components/layout";

export default function postDetail() {
  return (
    <Layout>
      <Head>
        <title>I am a post</title>
        <meta name={"keyword"} content={["learning next.js"]} />
      </Head>
      <Image
        src={"/images/profile.jpeg"}
        height={300}
        width={300}
        alt={"Author name"}
      />
      <h1 className={styles.postHeading}>I am a post h1</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nulla
        elementum, lacinia velit sed, aliquam ex. Suspendisse vitae nisi rutrum,
        ultricies risus quis, cursus dui. Vestibulum tincidunt rutrum tincidunt.
        Phasellus id lacus erat. Vivamus ultricies tempor libero, efficitur
        gravida massa tincidunt in. Donec nunc est, faucibus eu turpis at,
        sagittis scelerisque mauris. Suspendisse eget nibh ultrices arcu iaculis
        efficitur.F
      </p>
      <Link href={"/posts"}>Go Back</Link>
    </Layout>
  );
}
