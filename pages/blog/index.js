import { Text, Flex, Box, VStack } from "@chakra-ui/react";
import Link from "next/link";

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

export default function index({ data }) {
  return (
    <Box>
      <Box maxW="580px" m="auto">
        <Text p="7px" textAlign="center" fontWeight="bold" mb="12px">
          Fetching From API
        </Text>
        <VStack
          mt={5}
          p="5px"
          justify="center"
          m={{ base: "0", sm: "0", md: "0", lg: "auto" }}
          display="column"
        >
          {/* slice(0, 5) */}
          {/* show data from 0 to 5 i.e 5 is length  */}
          {/* if not using  slice(0, 5)  where show all */}
          {data.slice(0, 10).map((curElem, index) => {
            return (
              <div key={index}>
                <Flex borderRadius="7px" p="1rem" bg="grey">
                  <Text color="white" ml={3} mr={3}>
                    {index + 1}
                  </Text>
                  <Box>
                    <Link href={`/blog/${curElem.id}`} passHref>
                      <Text fontWeight="bold" color="indigo">
                        {curElem.name}
                      </Text>
                    </Link>

                    <span>{curElem.email}</span>
                  </Box>
                </Flex>
              </div>
            );
          })}
        </VStack>
      </Box>
    </Box>
  );
}
