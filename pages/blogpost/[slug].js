import { useRouter } from "next/router";
import React from "react";
import { Text, Box } from "@chakra-ui/react";

export default function slug() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { slug } = router.query;
  return (
    <Box
      minH="100vh"
      flex={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      paddingTop="3rem"
    >
      <Text>{slug}</Text>
      <Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic corporis
        iste temporibus maxime assumenda animi doloremque expedita quia? Iusto
        odit recusandae modi possimus quia eum fugiat ducimus minus esse
        tempora.
      </Text>
    </Box>
  );
}
