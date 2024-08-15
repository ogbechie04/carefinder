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
  Button
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
    setSelectedType
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
    setSearchTerm("")
    setSelectedState([])
    setSelectedType([])
    setCurrentPage(0)
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
            <SearchBar onSearch={setSearchTerm} />
            <ExportModal exportData={csvData} />
            <ShareButton />
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
          <Box display={"flex"} gap={8} alignItems={"center"} marginBlockStart={8} justifyContent={'space-between'}>
            <Stack gap={8} flexDirection={'row'} alignItems={'center'}>
            <Text fontFamily={'Open sans'} fontWeight={'semibold'}>Filter:</Text>
            <Stack direction={"row"} spacing={10}>
              <FilterHospital
                filterCategory={uniqueState}
                categoryName="Location"
                onFilterChange={handleStateFilterChange}
              />
              <FilterHospital filterCategory={uniqueType} categoryName="Type" onFilterChange={handleTypeFilterChange} />
            </Stack>
            </Stack>
            <Button rightIcon={<FiX />} variant={'unstyled'} display={'flex'} onClick={handleClearFilter} color={'#84868C'}>
                Clear Filter
            </Button>
          </Box>
          {/* HOSPITAL RENDERING */}
          <Box display="flex" flexDirection={"column"} gap={6}>
            <SimpleGrid
              columns={{ sm: 1, md: 2, lg: 3 }}
              marginBlockStart={4}
              justifyItems={"space-between"}
              columnGap={'2.375rem'}
              rowGap={6}
              alignItems={"center"}
              marginBlockEnd={4}
            >
              {hospitals.map((hospital, index) => {
                return <HospitalCard key={index} hospital={hospital} />;
              })}
            </SimpleGrid>

            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              marginPagesDisplayed={1}
              pageRangeDisplayed={5}
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

        {/* Footer */}
        <Box marginBlockStart={10}>
            <Footer />
        </Box>
      </Container>
    </>
  );
}

export default HospitalPage;
