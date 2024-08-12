import { Menu, MenuButton, MenuList, MenuItem, Button, Stack, Text, Checkbox, Divider } from "@chakra-ui/react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import CapitalizeLetter from "../utils/capitalizeFirstLetter";

interface filterHospitalProps {
  filterCategory: string[],
  categoryName: string
}

const FilterHospital: React.FC<filterHospitalProps> = ({ filterCategory, categoryName }) => {
  return (
      <Menu isLazy>
        {({ isOpen }) => (
        <>
      <MenuButton
        as={Button}
        rightIcon={isOpen ? <FiChevronUp /> : <FiChevronDown />}
        fontFamily={"Open Sans"}
        fontWeight={"normal"}
        bgColor={"white"}
        border={"2px solid #EEEEEE"}
        maxW={"fit-content"}
        _hover={{ backgroundColor: "none" }}
        _focus={{ backgroundColor: "none" }}
        _active={{ backgroundColor: "none" }}
        paddingInline={8}
        paddingBlock={3}
        gap={0.5}
      >
        {categoryName}
      </MenuButton>
      <MenuList
        maxH={"11.4375rem"}
        maxW={"11.25rem"}
        overflowY={"auto"}
        borderRadius={"xl"}
        paddingInline={4}
        _hover={{ backgroundColor: "transparent" }}
        sx={{
          "&::-webkit-scrollbar": {
            width: "0",
            height: "0",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "-webkit-overflow-scrolling": "touch",
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        }}
      >
        {filterCategory.sort().map((state: string, index: number) => (
          <MenuItem
            key={index}
            display={"column"}
            justifyContent={"space-between"}
            padding={"unset"}
            _hover={{ backgroundColor: "none" }}
            _focus={{ backgroundColor: "none" }}
            transition={"all 0.9s ease"}
          >
            <Stack
              direction="row"
              justifyContent={"space-between"}
              paddingBlockStart={3}
            >
              <Text fontFamily={"Open Sans"} fontSize={"0.875rem"}>
                {CapitalizeLetter(state)}
              </Text>
              <Checkbox
                iconColor={"#84868C"}
                iconSize={1}
                color={"#0E1AFB"}
              />
            </Stack>
            <Divider paddingBlock={1.5} />
          </MenuItem>
        ))}
      </MenuList>
       </>
       )}
    </Menu>
  );
};

export default FilterHospital;
