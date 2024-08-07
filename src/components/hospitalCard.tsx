import React from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Icon,
  Flex,
} from "@chakra-ui/react";
import Hospital from "../backend/hospital";
import CapitalizeLetter from "../utils/capitalizeFirstLetter";
import arrow from "../assets/icons/thick-right-arrow.svg";
import { FiHome, FiMapPin, FiPhone, FiMail } from "react-icons/fi";

function HospitalCard(props: { hospital: Hospital }) {

  return (
    <>
      <Card maxW={"402px"} fontFamily={'Open Sans'}>
        <CardBody padding={4}>
          <Image
            src={props.hospital.imageURL}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="1">
            <Flex alignItems={"center"} justifyContent={"space-between"}>
              <Heading size="md" fontFamily={'Open Sans'}>{CapitalizeLetter(props.hospital.name)}</Heading>
              <Button variant={"unstyled"} minW={"unset"} h={"unset"}>
                <Image src={arrow}></Image>
              </Button>
            </Flex>
            <Text fontSize={'sm'} color={'#84868C'}>{CapitalizeLetter(props.hospital.type)}</Text>
          </Stack>
          <Stack mt={6} spacing={5}>
            <Stack direction={'row'} align={'center'} spacing={3}>
                <Icon as={FiHome} boxSize={5} color={'#84868C'}></Icon>
                <Text fontSize={'sm'}>{CapitalizeLetter(props.hospital.type)}</Text>
            </Stack>
            <Stack direction={'row'} align={'center'} spacing={3}>
                <Icon as={FiMapPin} boxSize={5} color={'#84868C'}></Icon>
                <Text fontSize={'sm'}>{props.hospital.address}</Text>
            </Stack>
            <Stack direction={'row'} align={'center'} spacing={3}>
                <Icon as={FiPhone} boxSize={5} color={'#84868C'}></Icon>
                <Text fontSize={'sm'}>{props.hospital.phoneNumber?.join(' ')}</Text>
            </Stack>
            <Stack direction={'row'} align={'center'} spacing={3}>
                <Icon as={FiMail} boxSize={5} color={'#84868C'}></Icon>
                <Text fontSize={'sm'}>{props.hospital.email}</Text>
            </Stack>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}

export default HospitalCard;
