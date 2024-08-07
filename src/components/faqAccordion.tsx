import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";

function FaqAccordion(props) {
    const { accordionHeading, panelText } = props
  return (
    <>
      <Accordion
        allowToggle
        maxW={"52.625rem"}
        borderRadius={"1.125rem"}
        boxShadow={
          "0px -4px 4px 0px rgba(0, 0, 0, 0.02), 0px 2px 4px 0px rgba(0, 0, 0, 0.06)"
        }
      >
        <AccordionItem
          borderBlock={"none"}
          fontFamily={"Open Sans"}
          fontWeight={"semibold"}
        >
          <Heading fontFamily={"Open Sans"}>
            <AccordionButton
              padding={"unset"}
              paddingBlock={"1.875rem"}
              paddingInline={10}
              _expanded={{ color: "#84868c", paddingBlockEnd: 3.5 }}
            >
              <Box
                as="span"
                flex={1}
                textAlign={"left"}
                fontWeight={"semibold"}
              >
                {accordionHeading}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel padding={"unset"}
              paddingBlockEnd={"1.875rem"}
              paddingInline={10}>
            <Stack direction={"row"} gap={2}>
              <Box minW={'1.5px'} backgroundColor={'#0E1AFB'}></Box>
              <Text>
              {panelText}
              </Text>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default FaqAccordion;
