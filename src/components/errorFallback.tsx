import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import { FallbackProps } from 'react-error-boundary';
import { Link } from "react-router-dom";

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      gap={6}
      textAlign="center"
    >
      <Heading size="2xl" fontFamily={"Open Sans"}>Oops, something went wrong!</Heading>
      <Text fontFamily={"Open Sans"}>{error.message}</Text>
      <Stack direction={"row"} gap={6} fontFamily={"Open Sans"}>
        <Button
          color={"white"}
          bgColor={"#0E1AFB"}
          paddingInline={8}
          paddingBlock={3}
          variant={"solid"}
          borderRadius={"1.75rem"}
          _hover={{ textDecoration: "none", bgColor: "#030EDD" }}
          transition={"all 0.5s ease"}
          onClick={resetErrorBoundary}
        >
          Try Again
        </Button>
        <Button
          color={"white"}
          bgColor={"#0E1AFB"}
          paddingInline={8}
          paddingBlock={3}
          variant={"solid"}
          borderRadius={"1.75rem"}
          _hover={{ textDecoration: "none", bgColor: "#030EDD" }}
          transition={"all 0.5s ease"}
          as={Link}
          to={'/'}
        >
          Go to Home
        </Button>
      </Stack>
    </Box>
  );
}

export default ErrorFallback;
