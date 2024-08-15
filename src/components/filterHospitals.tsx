import { useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button, Stack, Text, Checkbox, Divider } from "@chakra-ui/react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import CapitalizeLetter from "../utils/capitalizeFirstLetter";

interface filterHospitalProps {
  filterCategory: string[],
  categoryName: string,
  onFilterChange: (selected: string[]) => void
}

const FilterHospital: React.FC<filterHospitalProps> = ({ filterCategory, categoryName, onFilterChange }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleFilterChange = (item: string) => {
    const updatedSelection = selectedItems.includes(item) ? selectedItems.filter((i) => i !== item) : [...selectedItems, item]

    setSelectedItems(updatedSelection)
    onFilterChange(updatedSelection)
  }

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
        paddingInline={{base: 2, md: 8}}
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
        _hover={{ backgroundColor: "white" }}
        sx={{
          "&::-webkit-scrollbar": {
            width: "0",
            height: "0",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "white",
          },
          "&::-webkit-scrollbar-track": {
            background: "white",
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
            onClick={() => handleFilterChange(state)}
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
                isChecked={selectedItems.includes(state)}
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
