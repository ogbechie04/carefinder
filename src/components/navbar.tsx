import { useState } from "react";
import zoro from "../assets/profile-image.svg";
import {
  Link,
  Flex,
  Text,
  Spacer,
  Button,
  Stack,
  Avatar,
  Box,
  IconButton,
} from "@chakra-ui/react";
import HamburgerMenu from "./hamburgerMenu";
import { FiChevronDown } from "react-icons/fi";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <Flex
        w={"100%"}
        paddingInline={{lg:20, md: 10, base: 5}}
        paddingBlock={5}
        style={{ whiteSpace: "nowrap" }}
        alignItems={"center"}
        justifyContent={'space-between'}
      >
        <Link
          fontFamily={"Montserrat"}
          fontSize={{lg: "4xl", base: "x-large"}}
          fontWeight={"bold"}
          _hover={{ textDecoration: "none" }}
        >
          Carefinder
        </Link>
        <Spacer />
        {/* LARGE SCREEN MENU */}
        <Flex
          gap={4}
          fontFamily={"Open Sans"}
          fontWeight={"semibold"}
          alignItems={"center"}
          display={{ lg: "flex", base: "none" }}
        >
          <Link px={8} py={3} _hover={{ textDecoration: "none" }}>
            Explore
          </Link>
          <Link px={8} py={3} _hover={{ textDecoration: "none" }}>
            FAQ
          </Link>
          <Link px={8} py={3} _hover={{ textDecoration: "none" }}>
            Blog
          </Link>
          <Link px={8} py={3} _hover={{ textDecoration: "none" }}>
            Contact Us
          </Link>
          {/* Show Add Hospital if User is logged in or not */}
          {isLoggedIn ? (
            <Link px={8} py={3} _hover={{ textDecoration: "none" }}>
              Add a hospital
            </Link>
          ) : (
            <Link
              px={8}
              py={3}
              display={"none"}
              _hover={{ textDecoration: "none" }}
            >
              Add a hospital
            </Link>
          )}
          {/* Show User Profile or Log In Button */}
          {isLoggedIn ? (
            // <Button onClick={handleAuth} variant={"link"} mr={4} _hover={{ textDecoration: "none" }}>
            //   User Profile
            // </Button>
            <Stack direction={"row"} alignItems={"center"} spacing={3}>
              <Box
                borderWidth={1}
                borderColor={"#0E1AFB"}
                borderRadius={"full"}
              >
                <Avatar name="Roronoa Zoro" src={zoro} padding={0.5}></Avatar>
              </Box>
              <Flex gap={7}>
                <Stack spacing={0.5} fontWeight={"normal"}>
                  <Text>Amaka</Text>{" "}
                  {/* TO-DO: Change to user login name as a prop */}
                  <Text color={"#84868C"}>Super Admin</Text>{" "}
                  {/* TO-DO: Change to user login name */}
                </Stack>
                <IconButton
                  aria-label="profile dropdown"
                  icon={<FiChevronDown />}
                  variant={"unstyled"}
                  onClick={handleAuth}
                ></IconButton>
              </Flex>
            </Stack>
          ) : (
            <Button
              onClick={handleAuth}
              color={"white"}
              bgColor={"#0E1AFB"}
              paddingInline={8}
              paddingBlock={3}
              variant={"solid"}
              borderRadius={"1.75rem"}
              _hover={{ textDecoration: "none", bgColor: '#030EDD' }}
              transition={"all 0.8s ease"}
              display={'hidden'}
            >
              Log In
            </Button>
          )}
        </Flex>
        {/* SMALL SCREEN MENU */}
        <Flex>
          <HamburgerMenu />
        </Flex>
      </Flex>
    </>
  );
}

export default NavBar;
