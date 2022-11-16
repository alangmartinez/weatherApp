import { HStack, Icon, Input, StackDivider } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ fetchWeather }) => {
  const inputRef = useRef();


  const handleSearch = () => {
    fetchWeather(inputRef.current.value);
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

export default SearchBar;
