import NavBar from "../components/navbar";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Button,
  Stack,
  useBreakpointValue,
  Skeleton,
  Image
} from "@chakra-ui/react";
import heroBlueBackground from "../assets/hero-section-bg.svg";
import blogBrain from "../assets/blog-brain.svg";
import blogFood from "../assets/blog-food.svg";
import blogHeart from "../assets/blog-heart.svg";
import heroDoctor from "../assets/hero-doctors.svg";
import CourseCard from "../components/courseCard";
import Carousel from "../components/carousel";
import FaqPills from "../components/faqPills";
import FaqAccordion from "../components/faqAccordion";
import BlogCard from "../components/blogCard";
import Footer from "../components/footer";
import useHospitalData from "../hooks/useHospitalData";
import { Link } from "react-router-dom";

function Home() {
  const { hospitals, loading } = useHospitalData();
  const numCards = useBreakpointValue({ base: 3, md: 4, lg: 3 });

  return (
    <>
      <Container
        margin={"unset"}
        padding={"unset"}
        maxW={"100%"}
        bgColor={"#FAFAFA"}
      >
        {/* -------- HEADER SECTION -------- */}
        <Flex direction={"column"}>
          <NavBar />
          {/* HERO SECTION */}
          <Box
            width={"100%"}
            height={{ base: "fit-content", lg: "45rem" }}
            position={"relative"}
            bgColor={{base: "#3640FC", lg: "#FAFAFA"}}
          >
            <Box
              position={"absolute"}
              top={0}
              left={0}
              width={"100%"}
              height={"100%"}
              zIndex={0}
            >
              <Image
                src={heroBlueBackground}
                alt="Hero Blue Background"
                objectFit={"cover"}
                width={"100%"}
                height={"100%"}
                display={{base: 'none', lg: 'block'}}
              />
            </Box>
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
              position={{ base: "relative", lg: "absolute" }}
              display={{ base: "flex", lg: "block" }}
              flexDirection={{ base: "column" }}
              top={{ lg: "23.61%" }}
              left={{ lg: "5.23%" }}
              zIndex={2}
              maxW={{ base: "100%", lg: "45%" }}
              height={{ base: "100%", lg: "auto" }}
              textAlign={{ base: "center", md: "left" }}
              alignItems={{ base: "center", md: "flex-start" }}
              paddingBlockStart={{ base: 10, lg: "unset" }}
              paddingInline={{ base: 5, lg: "unset" }}
            >
              <Heading
                fontFamily={"Prompt"}
                fontSize={{ base: "4xl", lg: "5xl" }}
                fontWeight={"medium"}
                lineHeight={{ md: "4.5rem" }}
                color={{ base: "white", lg: "#1A1A1A" }}
              >
                Find the Best Hospital for Your Needs
              </Heading>
              <Text
                fontFamily={"Open Sans"}
                fontSize={{ base: "medium", md: "xl" }}
                lineHeight={8}
                wordBreak={"break-word"}
                color={{ base: "white", lg: "#1A1A1A" }}
                letterSpacing={"0.4px"}
              >
                Easily Search, Compare, and Choose Top-Rated Hospitals Near You
              </Text>
            </Box>
            <Box
              position={{ base: "relative", lg: "absolute" }}
              top={{ lg: "59.86%" }}
              left={{ lg: "50%" }}
              zIndex={3}
              transform={{ lg: "translate(-50%, -50%)" }}
              w={{ base: "100%", lg: "50%" }}
              paddingInline={{ base: 5, lg: "unset" }}
              paddingBlockEnd={{ base: 10, md: 16, lg: "unset" }}
              paddingBlockStart={{ base: 5, md: 12, lg: "unset" }}
            >
              {/* <SearchBar /> */}
            </Box>
          </Box>
        </Flex>

        {/* -------- MAIN SECTION -------- */}
        <Container
          margin={"unset"}
          marginBlockStart={{ base: 16, md: 20, lg: 28 }}
          paddingInline={{ base: "2rem", md: "3rem", lg: "4.9375rem" }}
          maxW={"100%"}
        >
          {/* -------- FEATURED HOSPITALS -------- */}
          <Flex
            direction={"column"}
            gap={{ base: 12, lg: 20 }}
            alignItems={"center"}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              fontFamily={"Open Sans"}
              fontWeight={"semibold"}
              gap={4}
              textAlign={"center"}
            >
              <Heading
                fontFamily={"Poppins"}
                fontWeight={"inherit"}
                fontSize={{ base: "2xl", md: "2rem" }}
                color={"#020887"}
              >
                FIND THE TOP HOSPITALS NEAR YOU
              </Heading>
              <Text
                fontSize={"0.875rem"}
                textAlign={"center"}
                maxW={"66.375rem"}
              >
                Discover top-rated hospitals known for their exceptional patient
                care and specialized treatments. Explore our curated list of
                specialty hospitals to find the best options for your specific
                health needs.
              </Text>
            </Box>
            {loading ? (
              <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={"2.375rem"}>
                <Skeleton h="22.875rem" w="25.125rem" />
                <Skeleton h="22.875rem" w="25.125rem" />
                <Skeleton h="22.875rem" w="25.125rem" />
              </SimpleGrid>
            ) : (
              <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={"2.375rem"}>
                {hospitals.slice(0, numCards).map((hospital, index) => (
                  <CourseCard key={index} hospital={hospital} />
                ))}
              </SimpleGrid>
            )}
            <Box>
              <Link to={"/hospitals"}>
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
              </Link>
            </Box>
          </Flex>

          {/* -------- TESTIMONIALS -------- */}
          <Flex
            marginBlockStart={{ base: 20, lg: "2.625rem" }}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={"2.375rem"}
            direction={{ base: "column", lg: "row" }}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={{
                base: "flex-start",
                md: "center",
                lg: "flex-start",
              }}
              fontFamily={"Open Sans"}
              fontWeight={"semibold"}
              gap={4}
              textAlign={{ base: "justify", md: "center", lg: "left" }}
            >
              <Heading
                fontFamily={"Poppins"}
                fontWeight={"inherit"}
                fontSize={{ base: "2xl", md: "2rem" }}
                color={"#020887"}
              >
                WHAT ARE PATIENTS SAYING
              </Heading>
              <Text fontSize={"0.875rem"} maxW={"38.875rem"}>
                Read honest reviews and testimonials from real patients to gain
                insights into their experiences and the quality of care
                provided. Our ratings system helps you quickly compare hospitals
                to make informed decisions
              </Text>
            </Box>
            <Carousel />
          </Flex>

          {/* -------- RESOURCES SECTION -------- */}
          <Flex
            marginBlockStart={"6.5rem"}
            alignItems={"center"}
            justifyContent={"center"}
            direction={"column"}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={{ base: "flex-start", md: "center" }}
              justifyContent={"center"}
              fontFamily={"Open Sans"}
              fontWeight={"semibold"}
              gap={4}
            >
              <Heading
                fontFamily={"Poppins"}
                fontWeight={"inherit"}
                fontSize={{ base: "2xl", md: "2rem" }}
                color={"#020887"}
              >
                EDUCATE YOURSELF!
              </Heading>
              <Text
                fontSize={"0.875rem"}
                textAlign={{ base: "justify", md: "center" }}
                maxW={"66.375rem"}
              >
                Access a wealth of health articles, tips, and guides to stay
                informed about various health topics and treatments. Our FAQs
                section answers common questions to help you navigate the
                process of finding and choosing the right hospital.
              </Text>
            </Box>
            <Box alignSelf={{ lg: "flex-start" }} marginBlockStart={14}>
              <Stack spacing={1.5}>
                <Text
                  fontFamily={"Open Sans"}
                  fontSize={{ base: "lg", md: "2xl" }}
                  fontWeight={"bold"}
                  color={"#191A23"}
                >
                  Frequently Asked Questions
                </Text>
                <Stack direction={"row"}>
                  <Box
                    w={2.5}
                    h={1}
                    bgColor={"#0E1AFB"}
                    borderRadius={"base"}
                  ></Box>
                  <Box
                    w={2.5}
                    h={1}
                    bgColor={"#0E1AFB"}
                    borderRadius={"base"}
                  ></Box>
                  <Box
                    flex={1}
                    h={1}
                    bgColor={"#0E1AFB"}
                    borderRadius={"base"}
                  ></Box>
                </Stack>
              </Stack>
            </Box>
            <SimpleGrid
              columns={4}
              columnGap={"6.375rem"}
              marginBlockStart={"3.8125rem"}
              justifyContent={"space-between"}
              display={{ base: "none", lg: "grid" }}
            >
              <FaqPills pillText={"Choosing a Hospital"} />
              <FaqPills pillText={"Visitor Policies and Amenities"} />
              <FaqPills pillText={"Insurance & Billing"} />
              <FaqPills pillText={"Preparing for Hospitalization"} />
            </SimpleGrid>
            <SimpleGrid
              columns={3}
              columnGap={"6.375rem"}
              marginBlockStart={"2.1875rem"}
              justifyContent={"space-between"}
              display={{ base: "none", lg: "grid" }}
            >
              <FaqPills pillText={"Hospital Stay and Discharge"} />
              <FaqPills pillText={"Patient Rights and Responsibilities"} />
              <FaqPills pillText={"Hospital Services"} />
            </SimpleGrid>

            {/* -------- FAQ ACCORDION -------- */}
            <Flex
              marginBlockStart={{ base: "1.9375rem", lg: 16 }}
              direction={"column"}
              gap={6}
            >
              <FaqAccordion
                accordionHeading="How do I choose the right hospital for my medical needs?"
                panelText="Consider factors such as the hospital's specialties, reputation, patient reviews, location, and whether it accepts your insurance. Consulting with your primary care physician for recommendations can also be helpful."
              />
              <FaqAccordion
                accordionHeading="How can I find out if a hospital accepts my health insurance?"
                panelText="Contact the hospital's billing department or check with your insurance provider to confirm if the hospital is within your insurance network."
              />
              <FaqAccordion
                accordionHeading="Are there any restrictions on visiting hours or visitor policies?"
                panelText="Yes, visiting hours and policies vary by hospital and department. It is best to check the hospital's website or contact the information desk for specific visiting guidelines.."
              />
              <FaqAccordion
                accordionHeading="What should I bring with me to the hospital for a planned admission?"
                panelText="Bring personal identification, insurance information, a list of current medications, any necessary medical records, comfortable clothing, and personal hygiene items."
              />
            </Flex>
            <Box marginBlockStart={{ base: 12, lg: "20" }}>
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
                View More Questions
              </Button>
            </Box>
          </Flex>

          {/* -------- BLOG SECTION -------- */}
          <Flex
            marginBlockStart={16}
            direction={"column"}
            gap={"1.9375rem"}
            alignItems={"center"}
          >
            <Box alignSelf={"flex-start"}>
              <Stack spacing={1.5}>
                <Text
                  fontFamily={"Open Sans"}
                  fontSize={"2xl"}
                  fontWeight={"bold"}
                  color={"#191A23"}
                >
                  Poplular Blogs
                </Text>
                <Stack direction={"row"}>
                  <Box
                    w={2.5}
                    h={1}
                    bgColor={"#0E1AFB"}
                    borderRadius={"base"}
                  ></Box>
                  <Box
                    w={2.5}
                    h={1}
                    bgColor={"#0E1AFB"}
                    borderRadius={"base"}
                  ></Box>
                  <Box
                    flex={1}
                    h={1}
                    bgColor={"#0E1AFB"}
                    borderRadius={"base"}
                  ></Box>
                </Stack>
              </Stack>
            </Box>
            <Flex
              gap={"2.375rem"}
              justifyContent={"space-between"}
              flexDirection={["column", "row"]}
              alignSelf={"stretch"}
            >
              <BlogCard
                blogImage={blogHeart}
                imageAlt={"heart image"}
                blogHeading={
                  "Understanding Heart Health: Tips for a Stronger Heart"
                }
                blogText={
                  '"Learn essential tips to maintain and improve your heart health through diet, exercise, and lifestyle changes. Discover how small adjustments can significantly reduce your risk of heart disease."'
                }
              />
              <BlogCard
                blogImage={blogBrain}
                imageAlt={"brain image"}
                blogHeading={
                  "Navigating Mental Health: Strategies for Managing Stress and Anxiety"
                }
                blogText={
                  '"Explore effective strategies to manage stress and anxiety in your daily life. From mindfulness techniques to professional resources, find the support you need to maintain mental well-being."'
                }
              />
              <BlogCard
                blogImage={blogFood}
                imageAlt={"food image"}
                blogHeading={
                  "Boosting Immunity: Foods and Habits to Strengthen Your Immune System"
                }
                blogText={
                  '"Discover the best foods and habits to keep your immune system strong and resilient. Learn how a balanced diet and healthy lifestyle can help protect you against illnesses."'
                }
              />
            </Flex>
            <Box marginBlockStart={{ base: "1.0625rem", lg: "3.0625rem" }}>
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
                View More Blogs
              </Button>
            </Box>
          </Flex>
        </Container>

        {/* -------- FOOTER -------- */}
        <Container
          margin={"unset"}
          marginBlockStart={14}
          padding={"unset"}
          maxW={"100%"}
        >
          <Footer />
        </Container>
      </Container>
    </>
  );
}

export default Home;
