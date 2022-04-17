import Head from "next/head";
import { Text } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kishor KC</title>
        <meta name="description" content="portfolio website" />
        <meta name="keyword" content="HTML, CS, flutter, next.js" />
        <meta name="author" content="devkishor" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Text>Home Page</Text>
      </main>
    </div>
  );
}
