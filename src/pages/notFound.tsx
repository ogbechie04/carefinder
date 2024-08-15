import { Box, Button, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { FiFrown } from "react-icons/fi";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <Box display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      gap={6}
      textAlign="center">
        <Stack fontFamily={"Open Sans"} alignItems={'center'} gap={6}>
          <Icon as={FiFrown} boxSize={20} />
          <Heading fontFamily={"Open Sans"}>Oops, page not found!</Heading>
          <Text>
            The page you're looking for doesn't exist. Let's get you back on
            track.
          </Text>
        </Stack>
        <Button
          fontFamily={"Open Sans"}
          color={"white"}
          bgColor={"#0E1AFB"}
          paddingInline={8}
          paddingBlock={3}
          variant={"solid"}
          borderRadius={"1.75rem"}
          _hover={{ textDecoration: "none", bgColor: "#030EDD" }}
          transition={"all 0.5s ease"}
          as={Link}
          to={"/"}
        >
          Go Home
        </Button>
      </Box>
    </>
  );
}

export default NotFound;
