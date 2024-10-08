import { useState } from "react";
import {
  Icon,
  Button,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightAddon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const placeholder = useBreakpointValue({
    base: "Search",
    md: "Search for a Hospital",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value); // Call the onSearch prop with the updated value
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
  };

  return (
    <>
      <InputGroup
        alignItems={"center"}
        borderColor={"#E5E5E5"}
        borderRightRadius={{ base: "4.5rem", md: "0" }}
        color={"#84868C"}
        justifyContent={"center"}
        maxW={"59.875rem"}
        size={{ md: "lg", base: "md" }}
        zIndex={1}
      >
        <InputLeftElement
          pointerEvents="none"
          paddingInlineStart={{ base: "2rem", md: "3.75rem" }}
        >
          <Icon as={FiSearch} fontWeight={600} boxSize={6}></Icon>
        </InputLeftElement>
        <Input
          type="text"
          placeholder={placeholder}
          _placeholder={{ color: "#84868C" }}
          borderLeftRadius={"4.5rem"}
          sx={{ borderRightRadius: { base: "4.5rem", md: "0" } }}
          focusBorderColor="#0E1AFB"
          paddingLeft={{ base: "4rem", md: "5.5rem" }}
          color={"black"}
          _focus={{ boxShadow: "none" }}
          bgColor={"white"}
          borderColor={'#0E1AFB'}
          value={searchTerm}
          onChange={handleInputChange}
        />
        <InputRightAddon
          p={0}
          border="none"
          bg={"unset"}
          display={{ base: "none", md: "block" }}
        >
          <Button
            color={"#0E1AFB"}
            borderColor={"#0E1AFB"}
            paddingInline={8}
            paddingBlock={3}
            variant={"outline"}
            borderRightRadius={"2.8125rem"}
            borderLeftRadius={0}
            height={"100%"}
            _hover={{
              textDecoration: "none",
              color: "#fff",
              bgColor: "#0E1AFB",
            }}
            transition={"all .5s ease"}
            bgColor={"white"}
            onClick={handleSearchClick}
          >
            Search
          </Button>
        </InputRightAddon>
      </InputGroup>
    </>
  );
}

export default SearchBar;
