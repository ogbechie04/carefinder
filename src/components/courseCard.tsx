import Hospital from "../backend/hospital";
import CapitalizeLetter from "../utils/capitalizeFirstLetter";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";

function CourseCard(props: { hospital: Hospital }) {
  // console.log(props.hospital)
  return (
    <>
      <Card maxW={"402px"} fontFamily={"Open Sans"}>
        <CardBody padding={4}>
          <Heading size="md" fontFamily={"Open Sans"}>
            {CapitalizeLetter(props.hospital.name)}
          </Heading>
          <Stack mt="6" spacing={4}>
            <Image
              src={props.hospital.imageURL}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Text
              fontSize={"sm"}
              color={"#84868C"}
              fontWeight={"light"}
              fontStyle={"italic"}
            >
              “Leading provider of cardiac care and surgery”
            </Text>
          </Stack>
          <Text fontSize={"normal"} lineHeight={'1.5rem'} marginBlockStart={3}>
            {CapitalizeLetter(props.hospital.type)}
          </Text>
        </CardBody>
      </Card>
    </>
  );
}

export default CourseCard;
