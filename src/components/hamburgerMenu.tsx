import React, { useState } from "react";
import {
  useDisclosure,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Flex,
  Link,
  Text,
  Avatar,
  Box,
  Stack,
  Button,
} from "@chakra-ui/react";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import zoro from "../assets/profile-image.svg";

function HamburgerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <IconButton
        aria-label="Open Menu"
        icon={<FiMenu />}
        display={{ base: "flex", lg: "none" }}
        onClick={onOpen}
        variant={'unstyled'}
      ></IconButton>
      <Drawer isOpen={isOpen} onClose={onClose} placement="right">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          {/* <DrawerHeader>I'm a head</DrawerHeader> */}
          <DrawerBody>
            <Flex
              gap={4}
              fontFamily={"Open Sans"}
              fontWeight={"semibold"}
              alignItems={"center"}
              flexDirection={'column'}
              justifyContent={'center'}
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
                    <Avatar
                      name="Roronoa Zoro"
                      src={zoro}
                      padding={0.5}
                    ></Avatar>
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
                  _hover={{ textDecoration: "none" }}
                >
                  Log In
                </Button>
              )}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default HamburgerMenu;
