import { HStack, Icon, Input, StackDivider } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useContext } from "react";
import { weatherContext } from "../context/weatherContext";

const Search = () => {
  const { setSearch } = useContext(weatherContext);
  const inputRef = useRef();

  const handleSearch = () => {
    setSearch(inputRef.current.value);
  };

  return (
    <HStack
      bgColor="gray.100"
      divider={<StackDivider borderColor="gray.400" />}
      padding={3}
      paddingX={5}
      boxShadow="dark-lg"
      maxW="600px"
      w="100%"
      m="auto"
      borderRadius="md"
      spacing={4}
      color="blackAlpha.900"
    >
      <Input
        paddingX={1}
        variant="unstyled"
        bgColor="transparent"
        placeholder="Enter your country or city here..."
        _placeholder={{
          color: "blackAlpha.900",
          fontSize: "lg",
          paddingLeft: 1,
        }}
        autoFocus
        fontSize="lg"
        name="city"
        ref={inputRef}
        onChange={handleSearch}
        color="blackAlpha.900"
      />
      <Icon cursor="pointer" as={BsSearch} w={5} h={5} />
    </HStack>
  );
};

export default Search;
