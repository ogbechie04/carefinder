import {
  Box,
  Link,
  Container,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  FormErrorMessage,
  Stack,
  useToast,
  Icon,
} from "@chakra-ui/react";
import {Link as ReactRouterLink, useNavigate} from "react-router-dom";
import NavBar from "../components/navbar";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth, { db } from "../firebaseConfig.ts";
import {  doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";

function SignUp() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const navigate = useNavigate()
  const toast = useToast()

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    if (!email) {
      setEmailError(true);
    }

    if (!password) {
      setPasswordError(true);
    }

    if (email && password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser
        console.log(user)
        toast({
          title: "Registration Successful!",
          status: "success",
          duration: 2000,
          isClosable: true,
          render: () => (
            <Box color="white" p={3} bg="#0E1AFB" borderRadius="md" display={'flex'} alignItems={'center'} gap={4}>
              <Icon as={FiCheckCircle} />
              <Text>Registration Successful!</Text>
            </Box>
          ),
        });
        if(user) {
            await setDoc(doc(db, 'Users', user.uid), {
                email: user.email,
                firstName: fname,
                lastName: lname
            })
        }
        navigate("/")
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error Signing Up:", error.message);
        } else {
          console.error("An unknown error occurred.");
        }
      }
    }
  };

  return (
    <>
      <Container maxW={"100%"} h={'100%'} padding={"unset"} margin={"unset"}
      bgColor={'#FAFAFA'}>
        <NavBar />
        <Box
          paddingBlock={"2.8125rem"}
          paddingInline={{ base: "2rem", md: "3rem", lg: "4.9375rem" }}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          gap={14}

        >
          <Stack alignItems={'center'} spacing={4}>
            <Heading
              fontFamily={"Poppins"}
              size={"md"}
              fontWeight={"semibold"}
              color={"#1A1A1A"}
            >
              Sign Up as Admin
            </Heading>
            <Text fontFamily={'Open Sans'} fontSize={'normal'} lineHeight={"taller"} letterSpacing={"0.32px"}>Welcome! Please enter your details to sign up.</Text>
            </Stack>
          <form onSubmit={handleSignUp} style={{ width: "100%" }}>
            <VStack fontFamily={"Open Sans"} w={"100%"}>
              <FormControl id="fname" maxW={"35.875rem"}>
                <FormLabel lineHeight={"taller"} letterSpacing={"0.32px"}>
                  First Name
                </FormLabel>
                <Input
                  maxW={"35.875rem"}
                  type="text"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  required
                  paddingBlock={2}
                  paddingInline={6}
                  borderRadius={"xl"}
                  placeholder="Jane"
                  _placeholder={{
                    color: "#84868C",
                    fontSize: "0.875rem",
                    lineHeight: "taller",
                    letterSpacing: "0.32px",
                  }}
                  backgroundColor={"#F4F6FA"}
                  focusBorderColor="#0E1AFB"
                />
                {/* {emailError && (
                  <FormErrorMessage>Email is required.</FormErrorMessage>
                )} */}
              </FormControl>
              <FormControl id="lname" maxW={"35.875rem"} marginBlockStart={6}>
                <FormLabel lineHeight={"taller"} letterSpacing={"0.32px"}>
                  Last Name
                </FormLabel>
                <Input
                  maxW={"35.875rem"}
                  type="text"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  required
                  paddingBlock={2}
                  paddingInline={6}
                  borderRadius={"xl"}
                  placeholder="Doe"
                  _placeholder={{
                    color: "#84868C",
                    fontSize: "0.875rem",
                    lineHeight: "taller",
                    letterSpacing: "0.32px",
                  }}
                  backgroundColor={"#F4F6FA"}
                  focusBorderColor="#0E1AFB"
                />
                {/* {emailError && (
                  <FormErrorMessage>Email is required.</FormErrorMessage>
                )} */}
              </FormControl>
              <FormControl id="email" maxW={"35.875rem"} isInvalid={emailError} marginBlockStart={6}>
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
                {emailError && (
                  <FormErrorMessage>Email is required.</FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                id="password"
                maxW={"35.875rem"}

                isInvalid={passwordError}
              >
                <FormLabel lineHeight={"taller"} letterSpacing={"0.32px"} marginBlockStart={6}>
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
                {passwordError && (
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
                Sign Up
              </Button>
              <Text fontSize="sm" marginBlockStart={4}>
                Already have an account? <Link as={ReactRouterLink} to={"/login"} _hover={{textDecoration: 'underline', color: '#0E1AFB'}}>Log in</Link>
              </Text>
            </VStack>
          </form>
        </Box>
      </Container>
    </>
  );
}

export default SignUp;
