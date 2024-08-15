import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import quotes from "../assets/patient-card-bg-image.svg";

function PatientReviewCard(props: { patientImage: string; patientName: string; patientReview: string; }) {
  const { patientImage, patientName, patientReview } = props;
  return (
    <>
      <Card
        fontFamily={"Open Sans"}
        w={"fit-content"}
        minH={{base: '25.375rem', md: '18rem'}}
        borderRadius={"lg"}
        paddingBlockStart={4}
        paddingBlockEnd={"4.0625rem"}
        paddingInlineEnd={"0.625rem"}
        paddingInlineStart={6}
        minW={{base: '18rem', md: "38.875rem"}}
        bgImage={`url(${new URL(quotes, import.meta.url).href})`}
        bgRepeat={"no-repeat"}
        bgPosition={"bottom right"}
        gap={"1.9375rem"}
      >
        <CardHeader padding={"unset"}>
          <Flex alignItems={"center"} gap={4}>
            <Avatar name={patientName} src={patientImage} />
            <Box>
              <Heading
                size="md"
                fontFamily={"Open Sans"}
                fontWeight={"semibold"}
              >
                {patientName}
              </Heading>
              <Text color={"#84868C"} fontSize={"sm"} lineHeight={"1.875rem"}>
                Out Patient
              </Text>
            </Box>
          </Flex>
        </CardHeader>
        <CardBody padding={"unset"}>
          <Text lineHeight={"1.875rem"} letterSpacing={"0.32px"}>
            {patientReview}
          </Text>
        </CardBody>
      </Card>
    </>
  );
}

export default PatientReviewCard;
