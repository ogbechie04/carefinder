import useHospitalData from "../hooks/useHospitalData";
import { Link } from "react-router-dom";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  SimpleGrid,
  Flex,
  Stack,
  Text,
  Button,
  Skeleton,
} from "@chakra-ui/react";
import NavBar from "../components/navbar";
import SearchBar from "../components/searchBar";
import HospitalCard from "../components/hospitalCard";
import { FiChevronRight, FiX } from "react-icons/fi";
import FilterHospital from "../components/filterHospitals";
import ReactPaginate from "react-paginate";
import "../index.css";
import { SetStateAction } from "react";
import Footer from "../components/footer";
import ExportModal from "../components/exportModal";
import ShareButton from "../components/shareButton";

function HospitalPage() {
  const {
    hospitals,
    csvData,
    uniqueState,
    uniqueType,
    setCurrentPage,
    pageCount,
    setSearchTerm,
    setSelectedState,
    setSelectedType,
    loading,
  } = useHospitalData();

  const handlePageClick = (data: { selected: SetStateAction<number> }) => {
    setCurrentPage(data.selected);
  };

  const handleStateFilterChange = (selected: string[]) => {
    setSelectedState(selected);
  };

  const handleTypeFilterChange = (selected: string[]) => {
    setSelectedType(selected);
  };

  const handleClearFilter = () => {
    setSearchTerm("");
    setSelectedState([]);
    setSelectedType([]);
    setCurrentPage(0);
  };
  return (
    <>
      <Container
        margin={"unset"}
        padding={"unset"}
        maxW={"100%"}
        bgColor={"#FAFAFA"}
      >
        <NavBar />
        {/* -------- MAIN SECTION -------- */}
        <Container
          margin={"unset"}
          marginBlockStart={"2.8125rem"}
          paddingInline={{ base: "2rem", md: "3rem", lg: "4.9375rem" }}
          maxW={"100%"}
        >
          {/* -------- SEARCH AND FILTER SECTION -------- */}
          <Flex
            gap={{ base: 4, md: "1.375rem" }}
            paddingInlineEnd={1.5}
            alignItems={"center"}
            justifyContent={"space-between"}
            direction={{ base: "column", md: "row" }}
          >
            <SearchBar onSearch={setSearchTerm} />
            <Stack
              gap={"1.375rem"}
              direction={"row"}
              alignItems={"center"}
              alignSelf={{ base: "flex-end", md: "normal" }}
            >
              <ExportModal exportData={csvData} />
              <ShareButton />
            </Stack>
          </Flex>
          {/* -------- BREADCRUMBS -------- */}
          <Box marginBlockStart={{ base: 4, md: 8 }}>
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

          {/* -------- FILTER SECTION -------- */}
          <Box
            display={"flex"}
            gap={8}
            alignItems={"center"}
            marginBlockStart={{ base: 6, lg: 8 }}
            justifyContent={"space-between"}
          >
            <Stack
              gap={{ base: "none", md: 8 }}
              flexDirection={"row"}
              alignItems={"center"}
            >
              <Text fontFamily={"Open sans"} fontWeight={"semibold"}>
                <Box display={{ base: "none", md: "block" }}>Filter</Box>
              </Text>
              <Stack direction={"row"} spacing={{ base: 4, md: 10 }}>
                <FilterHospital
                  filterCategory={uniqueState}
                  categoryName="Location"
                  onFilterChange={handleStateFilterChange}
                />
                <FilterHospital
                  filterCategory={uniqueType}
                  categoryName="Type"
                  onFilterChange={handleTypeFilterChange}
                />
              </Stack>
            </Stack>
            <Button
              rightIcon={<FiX />}
              variant={"unstyled"}
              display={"flex"}
              onClick={handleClearFilter}
              color={"#84868C"}
            >
              Clear Filter
            </Button>
          </Box>
          {/* -------- HOSPITAL RENDERING -------- */}
          <Box display="flex" flexDirection={"column"} gap={6}>
            {loading ? (
              <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3 }}
                gap={"2.375rem"}
                marginBlockStart={4}
              >
                <Skeleton h="22.875rem" w="25.125rem" />
                <Skeleton h="22.875rem" w="25.125rem" />
                <Skeleton h="22.875rem" w="25.125rem" />
              </SimpleGrid>
            ) : (
              <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3 }}
                marginBlockStart={4}
                justifyItems={"space-between"}
                columnGap={"2.375rem"}
                rowGap={6}
                alignItems={"center"}
                marginBlockEnd={4}
              >
                {hospitals.map((hospital, index) => {
                  return <HospitalCard key={index} hospital={hospital} />;
                })}
              </SimpleGrid>
            )}

            {/* -------- PAGINATE -------- */}
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              pageCount={pageCount}
              marginPagesDisplayed={1}
              pageRangeDisplayed={4}
              onPageChange={handlePageClick}
              containerClassName="pagination"
              activeClassName="active"
              pageClassName="page-item"
              previousClassName="page-item"
              nextClassName="page-item"
              breakLabel={"..."}
            />
          </Box>
        </Container>

        {/* -------- FOOTER SECTION -------- */}
        <Box marginBlockStart={10}>
          <Footer />
        </Box>
      </Container>
    </>
  );
}

export default HospitalPage;
