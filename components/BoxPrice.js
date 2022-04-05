import React from "react";
import {
  Heading,
  List,
  ListIcon,
  ListItem,
  VStack,
  useColorModeValue,
  Stack,
  Box,
  Text,
  HStack,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

export default function BoxPrice() {
  return (
    <Box
      bg={useColorModeValue("gray.200", "gray.500")}
      mb={4}
      borderWidth="1px"
      shadow="base"
      borderRadius="xl"
      m="auto"
    >
      <Box py={4} px={12}>
        <Text fontWeight="500" fontSize="2xl">
         simple
        </Text>
        <HStack justifyContent="center">
          <Text fontSize="3xl" fontWeight="600">
            $
          </Text>
          <Text fontSize="5xl" fontWeight="900">
            89
          </Text>
          <Text fontSize="3xl" fontWeight="500">
            /month
          </Text>
        </HStack>
      </Box>
      <VStack
        bg={useColorModeValue("gray.50", "gray.700")}
        py={4}
        borderBottomRadius={"xl"}
      >
        <List spacing={3} textAlign="start" px={12}>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            unlimited build minutes
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Lorem, ipsum dolor.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            5TB
          </ListItem>
        </List>
        <Box pt={7} w="70%">
          <Button w="full" colorScheme="red">
            Start Free
          </Button>
        </Box>
      </VStack>
    </Box>
  );
}
