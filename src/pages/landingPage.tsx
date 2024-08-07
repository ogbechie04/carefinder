import React, { useState, useEffect } from "react";
import hospitalList from "../backend/hospital-repo";
import Hospital from "../backend/hospital";
import { CSVLink } from "react-csv";
import GenerateRandomImage from "../utils/generateHospitalImage";
import NavBar from "../components/navbar";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import heroBlueBackground from "../assets/hero-section-bg.svg";
import heroDoctor from "../assets/hero-doctors.svg";
import SearchBar from "../components/searchBar";
import CourseCard from "../components/courseCard";

function LandingPage() {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [csvData, setCsvData] = useState<string[][]>([]);


  async function setUp() {
    const response = await hospitalList();
    setHospitals(response);
    console.log(response[0]);
    setCsvData(buildCsv(response));
  }

  useEffect(() => {
    setUp();
  }, []);


  return (
    <>
      <Container
        margin={"unset"}
        padding={"unset"}
        maxW={"100%"}
        bgColor={"#FAFAFA"}
      >
        {/* HEADER SECTION */}
        <Flex direction={"column"}>
          <NavBar />
          {/* HERO SECTION */}
          <Box
            width={"100%"}
            height={{ base: "fit-content", md: "45rem" }}
            position={"relative"}
            bgColor={"#FAFAFA"}
          >
            <Box
              position={"absolute"}
              top={0}
              left={0}
              width={"100%"}
              bgRepeat={"no-repeat"}
              bgPosition={"right"}
              bgSize={"cover"}
              bgImage={heroBlueBackground}
              height={"100%"}
              bgColor={{ base: "#3640FC", md: "inherit" }}
            ></Box>
            <Box
              position={"absolute"}
              top={0}
              right={0}
              width={"60%"}
              bgRepeat={"no-repeat"}
              bgPosition={"center bottom"}
              bgSize={"contain"}
              bgImage={heroDoctor}
              height={"100%"}
              zIndex={1}
              display={{ base: "none", lg: "block" }}
            ></Box>
            <Box
              position={{ base: "relative", md: "absolute" }}
              display={{ base: "flex", md: "block" }}
              flexDirection={{ base: "column" }}
              top={{ md: "10%", lg: "23.61%" }}
              left={{ md: "10%", lg: "5.23%" }}
              zIndex={2}
              maxW={{ base: "100%", md: "80%", lg: "45%" }}
              height={{ base: "100%", md: "auto" }}
              textAlign={{ base: "center", lg: "left" }}
              alignItems={"center"}
              paddingBlockStart={{ base: 10, md: "unset" }}
              paddingInline={{ base: 5, md: "unset" }}
            >
              <Heading
                fontFamily={"Prompt"}
                fontSize={{ base: "4xl", md: "5xl" }}
                fontWeight={"medium"}
                lineHeight={{ md: "4.5rem" }}
                // wordBreak={"break-word"}
                color={{ base: "white", md: "#1A1A1A" }}
              >
                Find the Best Hospital for Your Needs
              </Heading>
              <Text
                fontFamily={"Open Sans"}
                fontSize={{ base: "medium", md: "xl" }}
                lineHeight={8}
                wordBreak={"break-word"}
                color={{ base: "white", md: "#1A1A1A" }}
                letterSpacing={"0.4px"}
              >
                Easily Search, Compare, and Choose Top-Rated Hospitals Near You
              </Text>
            </Box>
            <Box
              position={{ base: "relative", md: "absolute" }}
              top={{ md: "59.86%" }}
              left={{ md: "50%" }}
              zIndex={3}
              transform={{ md: "translate(-50%, -50%)" }}
              w={{ base: "100%", md: "50%" }}
              paddingInline={{ base: 5, md: "unset" }}
              paddingBlockEnd={{ base: 10, md: "unset" }}
              paddingBlockStart={{ base: 5, md: "unset" }}
            >
              <SearchBar />
            </Box>
          </Box>
        </Flex>

        {/* FEATURED HOSPITALS */}
        <Flex
          direction={"column"}
          gap={20}
          alignItems={"center"}
          marginBlockStart={28}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            fontFamily={"Open Sans"}
            fontWeight={"semibold"}
            gap={4}
          >
            <Heading
              fontFamily={"inherit"}
              fontWeight={"inherit"}
              fontSize={"2rem"}
              color={"#020887"}
            >
              FIND THE TOP HOSPITALS NEAR YOU
            </Heading>
            <Text fontSize={"small"} textAlign={"center"} maxW={"66.375rem"}>
              Discover top-rated hospitals known for their exceptional patient
              care and specialized treatments. Explore our curated list of
              specialty hospitals to find the best options for your specific
              health needs.
            </Text>
          </Box>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={"2.375rem"}>
            {hospitals.slice(0, 3).map((hospital, index) => (
              <CourseCard key={index} hospital={hospital} />
            ))}
          </SimpleGrid>
          <Box>
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
            >
              View More Hospitals
            </Button>
          </Box>
        </Flex>
      </Container>
    </>
  );
}

export default LandingPage;
