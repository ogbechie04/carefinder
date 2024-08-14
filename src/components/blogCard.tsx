import {
  Card,
  CardBody,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

function BlogCard(props) {
  const { blogImage, imageAlt, blogHeading, blogText } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Card
        maxW={"25.125rem"}
        padding={"unset"}
        borderRadius={"xl"}
        onClick={onOpen}
        cursor={"pointer"}
      >
        <CardBody padding={"unset"}>
          <Image borderTopRadius={"xl"} src={blogImage} alt={imageAlt} />
          <Stack
            fontFamily={"Open Sans"}
            gap={4}
            paddingBlockStart={4}
            paddingInline={3}
            paddingBlockEnd={"0.8125rem"}
          >
            <Heading
              fontFamily={"Open Sans"}
              fontSize={"normal"}
              fontWeight={"semibold"}
            >
              {blogHeading}
            </Heading>
            <Text
              fontSize={"small"}
              overflow={"hidden"}
              textOverflow={"ellipsis"}
              noOfLines={1}
            >
              {blogText}
            </Text>
          </Stack>
        </CardBody>
      </Card>

      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "xs", md: "lg" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{blogHeading}</ModalHeader>
          <ModalCloseButton display={{ base: "none", md: "inline-block" }} />
          <ModalBody>{blogText}</ModalBody>
          <ModalFooter>
            <Button
              onClick={onClose}
              color={"white"}
              bgColor={"#0E1AFB"}
              paddingInline={8}
              paddingBlock={3}
              variant={"solid"}
              borderRadius={"1.75rem"}
              _hover={{ textDecoration: "none", bgColor: "#030EDD" }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BlogCard;
