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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import HamburgerMenu from "./hamburgerMenu";
import auth from "../firebaseConfig";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import useUserDetails from "../hooks/useUserDetails";

function NavBar() {
  const {userDetails, handleSignOut} = useUserDetails();

  return (
    <>
      <Flex
        w={"100%"}
        paddingInline={{ lg: 20, md: 10, base: 5 }}
        paddingBlock={5}
        style={{ whiteSpace: "nowrap" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        backgroundColor={"white"}
      >
        <Link
          fontFamily={"Montserrat"}
          fontSize={{ lg: "4xl", base: "x-large" }}
          fontWeight={"bold"}
          _hover={{ textDecoration: "none" }}
          as={ReactRouterLink}
          to={"/"}
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
          <Link
            as={ReactRouterLink}
            to={"/HospitalPage"}
            px={8}
            py={3}
            _hover={{ textDecoration: "none" }}
          >
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
            <Link as={ReactRouterLink} to="/login">
              <Button
                onClick={() => auth.signOut()}
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
        {/* SMALL SCREEN MENU */}
        <Flex>
          <HamburgerMenu />
        </Flex>
      </Flex>
    </>
  );
}

export default NavBar;
