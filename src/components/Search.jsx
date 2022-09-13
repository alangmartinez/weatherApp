import { HStack, Input, StackDivider, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  const [location, setLocation] = useState("");

  return (
    <HStack
      bgColor="gray.50"
      divider={<StackDivider borderColor="gray.400" />}
      padding={3}
      paddingX={5}
      boxShadow="xl"
      maxW="600px"
      w="100%"
      m="auto"
      borderRadius="md"
      spacing={4}
    >
      <Input
        paddingX={1}
        variant="unstyled"
        bgColor="transparent"
        placeholder="Enter your country or city here..."
        autoFocus
        fontSize="xl"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyDown={searchLocation}
        _placeholder={{ color: "blacAlpha.900" }}
      />
      <Icon cursor="pointer" as={BsSearch} w={5} h={5} />
    </HStack>
  );
};

export default Search;
