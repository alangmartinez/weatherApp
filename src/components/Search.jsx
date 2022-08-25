import { HStack, Input, StackDivider, Icon } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <HStack
      bgColor="white"
      divider={<StackDivider />}
      padding={3}
      paddingX={5}
      boxShadow="xl"
      maxW="600px"
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
      />
      <Icon cursor="pointer" as={BsSearch} w={5} h={5} />
    </HStack>
  );
};

export default Search;
