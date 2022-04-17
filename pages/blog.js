import { Text, Box, VStack } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

export default function blog() {
  const datas = [
    {
      ques: "How to learn Reactjs with in 1day?",
      ans: "You can learn creating components, calling multiple components, stats , props and basic playing with them. Output: For sure not the Facebook App but a simple app for sure.",
    },
    {
      ques: "What is Nextjs?",
      ans: "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed",
    },
    {
      ques: "Nextjs vs Reactjs",
      ans: "React is - like it says on the tin - a Javascript library for building user interfaces where Next.js is a production framework for React",
    },
    {
      ques: "What is Advantages of React?",
      ans: "Easy to code and Communicate",
    },
    {
      ques: "What is Nextjs?",
      ans: "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed",
    },
  ];
  return (
    <VStack
      maxW="560px"
      m="auto"
      w="full"
      flex={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      paddingTop="3rem"
      textAlign="start"
      align="start"
    >
      <Text>Latest Blogs</Text>

      <Box>
        {datas.map((e, index) => {
          return (
            <div key={index}>
              <Link passHref href={`/blogpost/${e.ques}`}>
                <Text color="blue" m="10px" cursor="pointer">
                  {e.ques}
                </Text>
              </Link>
              <Text m="10px">{e.ans}</Text>
            </div>
          );
        })}
      </Box>
    </VStack>
  );
}
