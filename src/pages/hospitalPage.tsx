import useHospitalData from "../hooks/useHospitalData";
import { CSVLink } from "react-csv";
import { Link } from "react-router-dom";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  SimpleGrid,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import NavBar from "../components/navbar";
import SearchBar from "../components/searchBar";
import CapitalizeLetter from "../utils/capitalizeFirstLetter";
import HospitalCard from "../components/hospitalCard";
import { FiChevronDown, FiChevronRight, FiDownload } from "react-icons/fi";
import { PiShareFatBold } from "react-icons/pi";
import FilterHospital from "../components/filterHospitals";

function HospitalPage() {
  const { hospitals, csvData, uniqueState, uniqueType, currentPage, setCurrentPage, pageCount } = useHospitalData();

  const handlePageClick = (data) => {
    setCurrentPage(data.selected)
  }
  return (
    <>
      <Container
        margin={"unset"}
        padding={"unset"}
        maxW={"100%"}
        bgColor={"#FAFAFA"}
      >
        <NavBar />
        {/* MAIN SECTION */}
        <Container
          margin={"unset"}
          marginBlockStart={"2.8125rem"}
          paddingInline={{ base: "2rem", md: "3rem", lg: "4.9375rem" }}
          maxW={"100%"}
        >
          <Flex
            gap={"1.375rem"}
            paddingInlineEnd={1.5}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <SearchBar />
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
            >
              Export
            </Button>
            <Button
              rightIcon={<PiShareFatBold />}
              fontFamily={"Open Sans"}
              color={"#191A23"}
              bgColor={"white"}
              paddingInline={8}
              paddingBlock={3}
              variant={"outline"}
              borderRadius={"2.8125rem"}
              _hover={{ textDecoration: "none" }}
              fontWeight={"semibold"}
              gap={0.5}
            >
              <CSVLink data={csvData} target="_blank" filename="hospital.csv">
                Share
              </CSVLink>
            </Button>
          </Flex>
          {/* BreadCrumbs */}
          <Box marginBlockStart={8}>
            <Breadcrumb
              spacing={2.5}
              separator={<FiChevronRight color="#84868C" />}
              fontFamily={"Open Sans"}
              fontSize={"0.875rem"}
              lineHeight={6}
            >
              <BreadcrumbItem>
                <BreadcrumbLink
                  as={Link}
                  to={"/"}
                  color={"#84868C"}
                  _hover={{ textDecoration: "none" }}
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>Explore</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>

          {/* FILTER SECTION */}
          <Box display={'flex'} gap={8} alignItems={'center'}>
            <Text>Filter:</Text>
            <Stack direction={'row'} spacing={10}>
              <FilterHospital
                filterCategory={uniqueState}
                categoryName="Location"
              />
              <FilterHospital filterCategory={uniqueType} categoryName="Type" />
            </Stack>
          </Box>
        </Container>

        {/* HOSPITAL RENDERING */}
        <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        marginBlockStart={4}
        justifyItems={'center'}
        rowGap={6}
        alignItems={"center"}
      >
        {hospitals.map((hospital, index) => {
          return <HospitalCard key={index} hospital={hospital} />;
        })}
      </SimpleGrid>
      </Container>
    </>
  );
}

export default HospitalPage;
