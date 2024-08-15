import { Box, Container, Heading } from "@chakra-ui/react";
import MarkdownEditor from "../components/markDownEditor";
import NavBar from "../components/navbar";

function AddHospitalPage() {
  const handleSaveHospital = (markdownContent: string) => {
    console.log("Hospital content saved:", markdownContent);
  };

  return (
    <Container margin={"unset"}
    padding={"unset"}
    maxW={"100%"} backgroundColor={'#FAFAFA'}>
        <NavBar />
    <Box paddingInline={6} paddingBlock={10} display={'flex'} flexDirection={'column'}  w={'100%'} gap={8}>
      <Heading color={'#0E1AFB'} fontFamily={'Open Sans'} fontSize={'3xl'} fontWeight={'semibold'} alignSelf={'center'}>Add a New Hospital</Heading>
      <MarkdownEditor onSave={handleSaveHospital} />
    </Box>
    </Container>
  );
}

export default AddHospitalPage;
