import { HStack, Icon, Input, StackDivider } from "@chakra-ui/react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  const [location, setLocation] = useState("");

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
        _placeholder={{ color: "blackAlpha.900", fontSize: "md" }}
        autoFocus
        fontSize="xl"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        color="blackAlpha.900"
      />
      <Icon cursor="pointer" as={BsSearch} w={5} h={5} />
    </HStack>
  );
};

export default Search;
