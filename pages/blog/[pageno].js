import { Text, Flex, Box } from "@chakra-ui/react";
import Link from "next/link";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((curElem) => {
    return {
      params: {
        pageno: curElem.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageno;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
};
export default function myData({ data }) {
  return (
    <>
      <Box maxW="580px" m="auto" mt={5} p="5px">
        <Link href={"/blog"}>Back</Link>
        <Flex borderRadius="7px" p="1rem" bg="grey">
          <Text color="white" ml={3} mr={3}>
            {data.id + 1}
          </Text>
          <Box>
            <Text fontWeight="bold" color="indigo">
              {data.name}
            </Text>

            <span>{data.email}</span>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
