import Head from "next/head";
import { Heading, Text, Flex, Box, VStack } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

// inbuild function
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
};

export default function Home({ data }) {
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

      <main className={styles.main}>
        <Text fontWeight="bold" mb="5px">
          Fetching From API
        </Text>
        <VStack w="550px" justify="center" m="auto" display="column">
          {/* slice(0, 5) */}
          {/* show data from 0 to 5 i.e 5 is length  */}
          {/* if not using  slice(0, 5)  where show all */}
          {data.slice(0, 5).map((api, index) => {
            return (
              <>
                <Flex borderRadius="7px" p="1rem" bg="grey">
                  <Text color="white" ml={3} mr={3}>
                    {index + 1}
                  </Text>
                  <Box>
                    <Text fontWeight="bold" color="indigo">
                      {api.name}
                    </Text>
                    <span>{api.email}</span>
                  </Box>
                </Flex>
              </>
            );
          })}
        </VStack>
      </main>

      <footer className={styles.footer}>
        <Text>Develop by Kishor KC</Text>
      </footer>
    </div>
  );
}
