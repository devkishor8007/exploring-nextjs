import Link from "next/link";
import { HStack } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <HStack display="flex" justifyContent="center" marginTop="30px">
      <Link m="0 24px" href="/">
        <a>Home</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>

      <Link href="/blog">
        <a>Blog</a>
      </Link>

      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </HStack>
  );
}
