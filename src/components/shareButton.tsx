import {
  useClipboard,
  useToast,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Stack,
  Image,
  Text,
  Flex,
  Box,
  Icon,
} from "@chakra-ui/react";
import { PiShareFatBold } from "react-icons/pi";
import linkIcon from "../assets/share-icons/link-icon.svg";
import gmailIcon from "../assets/share-icons/gmail-logo.svg";
import facebookIcon from "../assets/share-icons/facebook-logo.svg";
import xIcon from "../assets/share-icons/X-logo.svg";
import whatsappIcon from "../assets/share-icons/WhatsApp-logo.svg";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FiCheckCircle } from "react-icons/fi";

function ShareButton() {
  const shareURL = window.location.href;
  const { onCopy } = useClipboard(shareURL);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleCopyLink = () => {
    onCopy();
    toast({
      title: "Link copied to the clipboard!",
      status: "success",
      duration: 2000,
      isClosable: true,
      render: () => (
        <Box color="white" p={3} bg="#0E1AFB" borderRadius="md" display={'flex'} alignItems={'center'} gap={4}>
          <Icon as={FiCheckCircle} />
          <Text>Link successfully copied to clipboard!</Text>
        </Box>
      ),
    });
  };
  return (
    <>
      <Button
        rightIcon={<PiShareFatBold />}
        display={"flex"}
        fontFamily={"Open Sans"}
        color={"#191A23"}
        bgColor={{base: 'none', lg:"white"}}
        paddingInline={8}
        paddingBlock={3}
        variant={{base: 'unstyled', lg:"outline"}}
        borderRadius={"2.8125rem"}
        _hover={{ textDecoration: "none" }}
        fontWeight={"semibold"}
        justifyContent={{ base: "center", lg: "space-between" }}
        textAlign={"center"}
        gap={0.5}
        onClick={onOpen}
      >
        <Box display={{ base: "none", lg: "block" }}>Share</Box>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent borderRadius={"xl"}>
          <ModalCloseButton />
          <ModalBody paddingBlockEnd={"3.375rem"} paddingBlockStart={"3.25rem"}>
            <Stack alignItems={"center"} spacing={10}>
              <Text fontFamily={"Open Sans"} fontWeight={"semibold"}>
                Share your list of hospitals via
              </Text>
              <Flex
                alignItems={"center"}
                gap={10}
                fontFamily={"Open Sans"}
                fontSize={"0.875rem"}
              >
                <Stack alignItems={"center"} spacing={3}>
                  <Button
                    borderRadius={"full"}
                    border={"1px solid #84868C"}
                    variant={"outline"}
                    width={"2.625rem"}
                    padding={1}
                    _hover={{ background: "none" }}
                    _active={{ background: "none" }}
                    onClick={handleCopyLink}
                  >
                    <Image src={linkIcon} />
                  </Button>
                  <Text>Copy link</Text>
                </Stack>
                <Stack alignItems={"center"} spacing={3}>
                  <Button
                    borderRadius={"full"}
                    border={"1px solid #84868C"}
                    variant={"outline"}
                    width={"2.625rem"}
                    padding={1}
                    _hover={{ background: "none" }}
                    _active={{ background: "none" }}
                    onClick={() =>
                      (window.location.href = `mailto:?subject=HOSPITAL LIST&body=Wanna find a hospital? Check this link: ${shareURL}`)
                    }
                  >
                    <Image src={gmailIcon} />
                  </Button>
                  <Text>Mail</Text>
                </Stack>
                <Stack alignItems={"center"} spacing={3}>
                  <TwitterShareButton url={shareURL}>
                    <Button
                      borderRadius={"full"}
                      border={"1px solid #84868C"}
                      variant={"outline"}
                      width={"2.625rem"}
                      padding={1}
                      _hover={{ background: "none" }}
                      _active={{ background: "none" }}
                    >
                      <Image src={xIcon} />
                    </Button>
                  </TwitterShareButton>
                  <Text>X</Text>
                </Stack>
                <Stack alignItems={"center"} spacing={3}>
                  <FacebookShareButton url={shareURL}>
                    <Button
                      borderRadius={"full"}
                      border={"1px solid #84868C"}
                      variant={"outline"}
                      width={"2.625rem"}
                      padding={1}
                      _hover={{ background: "none" }}
                      _active={{ background: "none" }}
                    >
                      <Image src={facebookIcon} />
                    </Button>
                  </FacebookShareButton>
                  <Text>Facebook</Text>
                </Stack>
                <Stack alignItems={"center"} spacing={3}>
                  <WhatsappShareButton url={shareURL}>
                    <Button
                      borderRadius={"full"}
                      border={"1px solid #84868C"}
                      variant={"outline"}
                      width={"2.625rem"}
                      padding={1}
                      _hover={{ background: "none" }}
                      _active={{ background: "none" }}
                    >
                      <Image src={whatsappIcon} />
                    </Button>
                  </WhatsappShareButton>
                  <Text>Whatsapp</Text>
                </Stack>
              </Flex>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ShareButton;
