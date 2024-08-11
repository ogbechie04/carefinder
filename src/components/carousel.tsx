import React, { useState } from "react";
import PatientReviewCard from "./patientReviewCard";
import { Box, IconButton, Stack, Text, Flex } from "@chakra-ui/react";
import patientGeorge from "../assets/patient-George.svg";
import patientMartha from "../assets/patient-martha.svg";
import patientBen from "../assets/patient-ben.svg";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function Carousel() {
  const carouselCards = [
    <PatientReviewCard
      patientName={"George"}
      patientImage={patientGeorge}
      patientReview={
        '"Thanks to the dedicated staff at Emel Hospital, I received exceptional care and am now fully recovered. Their professionalism and compassion made all the difference during my treatment."'
      }
    />,
    <PatientReviewCard
      patientName={"Martha"}
      patientImage={patientMartha}
      patientReview={
        '"The care I received at May Clinics Ltd was outstanding. The medical team was attentive and compassionate, making my recovery process smooth and comfortable."'
      }
    />,
    <PatientReviewCard
      patientName={"Ben"}
      patientImage={patientBen}
      patientReview={
        '"Choosing Godfrey Hospital was the best decision for my health. Their state-of-the-art facilities and expert staff provided me with top-notch care and support throughout my treatment."'
      }
    />,
  ];
  const totalCards = carouselCards.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  }

  function handlePrevious() {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? totalCards - 1 : prevIndex - 1);
  }
  return (
    <>
      <Box maxW={{base: '18rem', md: "38.875rem"}} overflow={'hidden'}>
        <Stack direction={"row"} spacing={6} alignItems={"center"} justifyContent={'flex-end'}>
          <Text
            fontFamily={"Open Sans"}
            fontSize={"small"}
            fontWeight={"bold"}
            color={"#84868C"}
          >
            {currentIndex + 1}&nbsp;/&nbsp;{totalCards}
          </Text>
          <Stack direction={"row"} spacing={4}>
            <IconButton
              aria-label="previous"
              icon={<FiArrowLeft />}
              variant={"outline"}
              color={"#0E1AFB"}
              padding={2.5}
              border={"none"}
              borderRadius={"0.8125rem"}
              fontSize={"1.5rem"}
              w={"fit-content"}
              h={"auto"}
              boxShadow={
                "0px -4px 4px 0px rgba(0, 0, 0, 0.02), 0px 2px 4px 0px rgba(0, 0, 0, 0.06)"
              }
              onClick={handlePrevious}
            />
            <IconButton
              aria-label="previous"
              icon={<FiArrowRight />}
              variant={"outline"}
              color={"#0E1AFB"}
              padding={2.5}
              border={"none"}
              borderRadius={"0.8125rem"}
              fontSize={"1.5rem"}
              w={"fit-content"}
              h={"auto"}
              boxShadow={
                "0px -4px 4px 0px rgba(0, 0, 0, 0.02), 0px 2px 4px 0px rgba(0, 0, 0, 0.06)"
              }
              onClick={handleNext}
            />
          </Stack>
        </Stack>
        <Flex
          transition="transform 0.7s ease"
          transform={`translateX(-${currentIndex * 100}%)`}
              marginBlockStart={6}
        >
          {carouselCards.map((card, index) => (
            <Box key={index} minWidth="100%" minH={'100%'}>
              {card}
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
}

export default Carousel;
