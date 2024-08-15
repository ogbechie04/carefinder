import {
  Box,
  Container,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Stack,
  Link,
  FormErrorMessage,
  FormHelperText,
  useToast,
  Icon,
} from "@chakra-ui/react";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import NavBar from "../components/navbar";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebaseConfig.ts";
import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";

function LogIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const toast = useToast()

  const navigate = useNavigate();

  const handleLogIn = async (e: React.FormEvent) => {
    e.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    if (email === "") {
      setEmailError(true);
    }

    if (password === "") {
      setPasswordError(true);
    }

    if (email === "" || password === "") {
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "Login successful!",
        status: "success",
        duration: 2000,
        isClosable: true,
        render: () => (
          <Box color="white" p={3} bg="#0E1AFB" borderRadius="md" display={'flex'} alignItems={'center'} gap={4}>
            <Icon as={FiCheckCircle} />
            <Text>Login successful!</Text>
          </Box>
        ),
      });
      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error Signing Up:", error.message);
      } else {
        console.error("An unknown error occurred.");
      }
    }
  };

  return (
    <>
      <Container
        maxW={"100%"}
        h={"100vh"}
        padding={"unset"}
        margin={"unset"}
        bgColor={"#FAFAFA"}
      >
        <NavBar />
        <Box
          paddingBlock={"2.8125rem"}
          paddingInline={{ base: "2rem", md: "3rem", lg: "4.9375rem" }}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          gap={14}
        >
          <Stack alignItems={"center"} spacing={4}>
            <Heading
              fontFamily={"Poppins"}
              size={"md"}
              fontWeight={"semibold"}
              color={"#1A1A1A"}
            >
              Log in as Admin
            </Heading>
            <Text
              fontFamily={"Open Sans"}
              fontSize={"normal"}
              lineHeight={"taller"}
              letterSpacing={"0.32px"}
            >
              Welcome back, please input your details
            </Text>
          </Stack>
          <form onSubmit={handleLogIn} style={{ width: "100%" }}>
            <VStack spacing={4} fontFamily={"Open Sans"} w={"100%"}>
              <FormControl id="email" maxW={"35.875rem"} isInvalid={emailError}>
                <FormLabel lineHeight={"taller"} letterSpacing={"0.32px"}>
                  Email Address
                </FormLabel>
                <Input
                  maxW={"35.875rem"}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  paddingBlock={2}
                  paddingInline={6}
                  borderRadius={"xl"}
                  placeholder="example@gmail.com"
                  _placeholder={{
                    color: "#84868C",
                    fontSize: "0.875rem",
                    lineHeight: "taller",
                    letterSpacing: "0.32px",
                  }}
                  backgroundColor={"#F4F6FA"}
                  focusBorderColor="#0E1AFB"
                />
                {!emailError ? (
                  <FormHelperText>
                    Enter the email you'd like to receive the newsletter on.
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>Email is required.</FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                id="password"
                maxW={"35.875rem"}
                marginBlockStart={6}
                isInvalid={passwordError}
              >
                <FormLabel lineHeight={"taller"} letterSpacing={"0.32px"}>
                  Password
                </FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  paddingBlock={2}
                  paddingInline={6}
                  borderRadius={"xl"}
                  placeholder="heresmypassword"
                  _placeholder={{
                    color: "#84868C",
                    fontSize: "0.875rem",
                    lineHeight: "taller",
                    letterSpacing: "0.32px",
                  }}
                  backgroundColor={"#F4F6FA"}
                  focusBorderColor="#0E1AFB"
                />
                {!passwordError ? (
                  <FormHelperText>
                    Enter the email you'd like to receive the newsletter on.
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>Password is required.</FormErrorMessage>
                )}
              </FormControl>
              <Button
                type="submit"
                fontFamily={"Open Sans"}
                color={"white"}
                bgColor={"#0E1AFB"}
                paddingInline={8}
                paddingBlock={3}
                variant={"solid"}
                borderRadius={"1.75rem"}
                _hover={{ textDecoration: "none", bgColor: "#030EDD" }}
                transition={"all 0.5s ease"}
                maxW={"35.875rem"}
                w={"full"}
                marginBlockStart={14}
              >
                Log In
              </Button>
              <Text fontSize="sm" marginBlockStart={4}>
                Don't have an account?&nbsp;
                <Link
                  as={ReactRouterLink}
                  to={"/signup"}
                  _hover={{ textDecoration: "underline", color: "#0E1AFB" }}
                >
                  Sign up
                </Link>
              </Text>
            </VStack>
          </form>
        </Box>
      </Container>
    </>
  );
}

export default LogIn;
