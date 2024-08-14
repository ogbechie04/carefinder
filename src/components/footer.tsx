import React from "react";
import SearchBar from "./searchBar";
import { Box, Flex, Heading, Stack, Link } from "@chakra-ui/react";

function Footer() {
  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        gap={"1.375rem"}
        bgColor={"#030EDD"}
        color={"white"}
        paddingInline={{ base: 5, md: "unset" }}
        paddingBlockStart={{ base: 5, md: "4.875rem" }}
        paddingBlockEnd={{ base: 10, md: "7.9375rem" }}
      >
        <Heading
          as={"h2"}
          fontFamily={"Prompt"}
          fontWeight={"medium"}
          fontSize={{ base: "xl", md: "2rem" }}
          lineHeight={{ md: "4.5rem" }}
          textAlign={"center"}
        >
          Finding the Best Hospitals in Nigeria
        </Heading>
        <SearchBar />
        <Flex
          gap={{ base: 8, md: "11.25rem" }}
          marginBlockStart={{ base: 5, md: "2.6875rem" }}
          w={{ base: "100%", md: "unset" }}
          justifyContent={"space-between"}
        >
          <Stack spacing={4}>
            <Heading
              as={"h5"}
              fontSize={{ base: "large", lg: "2xl" }}
              fontWeight={"semibold"}
              fontFamily={"Prompt"}
            >
              Our Company
            </Heading>
            <Stack
              fontFamily={"Open Sans"}
              spacing={6}
              fontSize={{ base: "small", md: "medium" }}
            >
              <Link _hover={{ textDecoration: "none" }}>About Us</Link>
              <Link _hover={{ textDecoration: "none" }}>Log In</Link>
              <Link _hover={{ textDecoration: "none" }}>Contact Us</Link>
            </Stack>
          </Stack>
          <Stack spacing={4} display={{ base: "none", md: "flex" }}>
            <Heading
              as={"h5"}
              fontSize={"2xl"}
              fontWeight={"semibold"}
              fontFamily={"Prompt"}
            >
              Resources
            </Heading>
            <Stack fontFamily={"Open Sans"} spacing={6}>
              <Link _hover={{ textDecoration: "none" }}>FAQ</Link>
              <Link _hover={{ textDecoration: "none" }}>Blog</Link>
            </Stack>
          </Stack>
          <Stack spacing={4}>
            <Heading
              as={"h5"}
              fontSize={{ base: "large", lg: "2xl" }}
              fontWeight={"semibold"}
              fontFamily={"Prompt"}
            >
              Community
            </Heading>
            <Stack
              fontFamily={"Open Sans"}
              spacing={6}
              fontSize={{ base: "small", md: "medium" }}
            >
              <Link _hover={{ textDecoration: "none" }}>Gmail</Link>
              <Link _hover={{ textDecoration: "none" }}>Instagram</Link>
              <Link _hover={{ textDecoration: "none" }}>Twitter</Link>
              <Link _hover={{ textDecoration: "none" }}>Whatsapp</Link>
            </Stack>
          </Stack>
          <Stack spacing={4} display={{ base: "none", lg: "flex" }}>
            <Heading
              as={"h5"}
              fontSize={"2xl"}
              fontWeight={"semibold"}
              fontFamily={"Prompt"}
            >
              Legal
            </Heading>
            <Stack fontFamily={"Open Sans"} spacing={6}>
              <Link _hover={{ textDecoration: "none" }}>
                Terms & Conditions
              </Link>
              <Link _hover={{ textDecoration: "none" }}>Privacy Policy</Link>
            </Stack>
          </Stack>
        </Flex>
      </Box>
    </>
  );
}

export default Footer;
