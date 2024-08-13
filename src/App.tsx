import { useState, useEffect } from "react";
import HospitalCard from "./components/hospitalCard";
import hospitalList from "./backend/hospital-repo";
import Hospital from "./backend/hospital";
import { CSVLink } from "react-csv";
import { SimpleGrid } from "@chakra-ui/react";
import NavBar from "./components/navbar";
import SearchBar from "./components/searchBar";
import Footer from "./components/footer.tsx";
import BlogCard from "./components/blogCard";
import PatientReviewCard from "./components/patientReviewCard.tsx";
import { buildCsv } from "./backend/csv-builder";
import GenerateRandomImage from "./utils/generateHospitalImage";
import FaqAccordion from "./components/faqAccordion.tsx";
import CourseCard from "./components/courseCard.tsx";
import FaqPills from "./components/faqPills.tsx";
import Home from "./pages/home.tsx";
import Carousel from "./components/carousel.tsx";
import HospitalPage from "./pages/hospitalPage.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExportModal from "./components/exportModal.tsx";
import ShareButton from "./components/shareButton.tsx";

function App() {
  console.log(window.location.href)
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HospitalPage" element={<HospitalPage />} />
      </Routes>
    </Router>
    // <ShareButton />
  )
  // return (
  //   <>
  //   {/* <ExportModal /> */}
  //   {/* <Carousel /> */}
  //   {/* <LandingPage /> */}
  //   {/* <HospitalPage /> */}
  //     {/* <CourseCard /> */}
  //     {/* <FaqPills /> */}
  //     {/* <FaqAccordion /> */}
  //     {/* <NavBar /> */}
  //     {/* <BlogCard /> */}
  //     {/* <SearchBar /> */}
  //     {/* <PatientReviewCard /> */}
  //     {/* <Footer /> */}
  //    </>
  // );
  // const [hospitals, setHospitals] = useState<Hospital[]>([]);
  // const [csvData, setCsvData] = useState<string[][]>([])

  // async function setUp() {
  //   const response = await hospitalList();
  //   setHospitals(response);
  //   setCsvData(buildCsv(response))
  // }

  // useEffect(() => {
  //   setUp();
  // }, []);

  // return (
  //   <>
  //     <CSVLink data={csvData} target="_blank" filename='hospital' extension='.csv'>Download me</CSVLink>

  //     <SimpleGrid
  //       columns={{ sm: 1, md: 2, lg: 3 }}
  //       mx={"auto"}
  //       justifyItems={'center'}
  //       rowGap={4}
  //       alignItems={"center"}
  //     >
  //       {hospitals.map((hospital) => {
  //         return <HospitalCard hospital={hospital} />;
  //       })}
  //     </SimpleGrid>
  //   </>
  // );
}

export default App;
