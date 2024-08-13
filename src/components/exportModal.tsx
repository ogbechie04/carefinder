import React from "react";
import {
  Text,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Stack,
  Image,
} from "@chakra-ui/react";
import { CSVLink } from "react-csv";
import { FiDownload } from "react-icons/fi";
import check from "../assets/check.svg";

function ExportModal(props) {
  const { exportData } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isNestedOpen,
    onOpen: onNestedOpen,
    onClose: onNestedClose,
  } = useDisclosure();

  const handleCSVDownload = () => {
    onClose();

    setTimeout(() => {
      onNestedOpen();
    }, 1000);
  };

  return (
    <>
      <Button
        fontFamily={"Open Sans"}
        color={"#191A23"}
        bgColor={"white"}
        paddingInline={8}
        paddingBlock={3}
        variant={"outline"}
        borderRadius={"2.8125rem"}
        _hover={{ textDecoration: "none" }}
        fontWeight={"semibold"}
        rightIcon={<FiDownload fontWeight={"semibold"} />}
        gap={0.5}
        onClick={onOpen}
      >
        Export
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"lg"}>
        <ModalOverlay />
        <ModalContent borderRadius={"xl"}>
          <ModalCloseButton />
          <ModalBody paddingBlock={14}>
            <Stack alignItems={"center"} spacing={"1.875rem"}>
              <Text fontFamily={"Open Sans"} fontWeight={"semibold"}>
                Export your list of hospitals as a CSV file?
              </Text>
              <CSVLink
                data={exportData}
                target="_blank"
                filename="hospital.csv"
                onClick={handleCSVDownload}
              >
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
                  rightIcon={<FiDownload fontWeight={"semibold"} />}
                >
                  Export
                </Button>
              </CSVLink>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal isOpen={isNestedOpen} onClose={onNestedClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody paddingBlock={14}>
            <Stack alignItems={"center"} spacing={"1.875rem"}>
              <Image src={check} />
              <Text fontFamily={"Open Sans"} fontWeight={"semibold"}>
                Successfully exported as a csv file
              </Text>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ExportModal;
