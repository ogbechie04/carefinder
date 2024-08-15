import { Link as ReactRouterLink } from "react-router-dom";
import {
  useDisclosure,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Flex,
  Link,
  Text,
  Avatar,
  Box,
  Stack,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import { FiChevronDown, FiChevronUp, FiMenu } from "react-icons/fi";
import zoro from "../assets/profile-image.svg";
import useUserDetails from "../hooks/useUserDetails";

function HamburgerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {userDetails, handleSignOut} = useUserDetails()

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
              <Link as={ReactRouterLink} to={'/hospitals'} px={8} py={3} _hover={{ textDecoration: "none" }}>
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
              <Link
            as={ReactRouterLink}
            to={userDetails ? "./addHospital" : "/login"}
            px={8}
            py={3}
            _hover={{ textDecoration: "none" }}
          >
            Add a hospital
          </Link>
          {/* TO-DO: Show User Profile is user is logged in or Log In Button */}
          {userDetails ? (
            <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  as={Button}
                  variant={"unstyled"}
                  rightIcon={isOpen ? <FiChevronUp /> : <FiChevronDown />}
                  display={"flex"}
                >
                  <Stack direction={"row"} alignItems={"center"} spacing={3}>
                    <Box
                      borderWidth={1}
                      borderColor={"#0E1AFB"}
                      borderRadius={"full"}
                    >
                      <Avatar
                        name={userDetails.firstName}
                        src={zoro}
                        padding={0.5}
                      ></Avatar>
                    </Box>
                    <Flex gap={7}>
                      <Stack spacing={0.5} fontWeight={"normal"}>
                        <Text textAlign={"left"}>
                          {userDetails.firstName}
                        </Text>{" "}
                        <Text color={"#84868C"}>Super Admin</Text>{" "}
                      </Stack>
                    </Flex>
                  </Stack>
                </MenuButton>
                <MenuList fontFamily={"Open Sans"} marginBlockStart={2}>
                  <MenuItem _hover={{ backgroundColor: "none" }} cursor={'unset'}>
                    <Stack spacing={0}>
                      <Text fontWeight="bold">{userDetails.firstName}</Text>
                      <Text fontSize="sm" color="gray.500">
                        {userDetails.email}
                      </Text>
                    </Stack>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem fontWeight={'semibold'} onClick={handleSignOut}>Sign Out</MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
          ) : (
            <Link as={ReactRouterLink} to='/login'>
            <Button
              color={"white"}
              bgColor={"#0E1AFB"}
              paddingInline={8}
              paddingBlock={3}
              variant={"solid"}
              borderRadius={"1.75rem"}
              _hover={{ textDecoration: "none", bgColor: "#030EDD" }}
              transition={"all 0.8s ease"}
            >
              Log In
            </Button>
            </Link>
          )}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default HamburgerMenu;
