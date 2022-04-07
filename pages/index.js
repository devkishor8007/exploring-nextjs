import Head from "next/head";
import { Text } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

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
        <Text>Image Optimization</Text>
        <Image
          alt="demo image"
          src="/thirdtest.png"
          height="450"
          width="300"
        ></Image>

        <Image
          alt="we are one"
          src="https://images.unsplash.com/photo-1648544373484-b327f2051e60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          height="300"
          width="300"
        ></Image>
      </main>
    </div>
  );
}
