import {
  Button,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  Box,
  InputLeftElement,
  Textarea,
  Text,
  VStack,
  HStack,
  useToast,
  Icon,
} from "@chakra-ui/react";
import { FaInfo, FaPaperPlane } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import { Formik, Form } from 'formik';


const HelpForm = ({ variant }) => {
  const toast = useToast();



  return (
    <Formik
    initialValues={{
      name: '',
      surname: '',
      email: '',
      tel: '',
      message: ''
    }}
    onSubmit={(values, {resetForm}) => {

    }}    
    >
      ({}) => {

      <VStack spacing={8}>
        <FormControl isRequired>
          <FormLabel>Name:</FormLabel>
          <InputGroup>
            <InputLeftElement children={<FaInfo />}></InputLeftElement>
            <Input
              variant={variant}
              placeholder="Enter your name here..."
              focusBorderColor="yellow.400"
              onChange={handleOnChange}
              name="name"
            />
          </InputGroup>
          <FormHelperText>
            Name must be between 4-8 characters long
          </FormHelperText>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Last Name:</FormLabel>
          <InputGroup>
            <InputLeftElement children={<FaInfo />}></InputLeftElement>
            <Input
              variant={variant}
              placeholder="Enter your surname here..."
              focusBorderColor="yellow.400"
              onChange={handleOnChange}
              name="surname"
            />
          </InputGroup>
          <FormHelperText>Surname must be 4-8 characters long</FormHelperText>
        </FormControl>
        <Divider w="70%" borderColor="black" />
        <FormControl isRequired>
          <FormLabel>Email:</FormLabel>
          <InputGroup>
            <InputLeftElement children={<FaMailBulk />}></InputLeftElement>
            <Input
              type="email"
              variant={variant}
              placeholder="Enter your e-mail"
              focusBorderColor="yellow.400"
              onChange={handleOnChange}
              name="email"
            />
          </InputGroup>
          <FormHelperText>example@email.com</FormHelperText>
        </FormControl>
        <Box
          w="100%"
          padding={4}
          bgColor="white"
          borderRadius="md"
          boxShadow="sm"
        >
          <Text fontWeight="semibold">Your message:</Text>
          <Text fontWeight="light" paddingX={3}>
            {message}
          </Text>
        </Box>
        <Textarea
          paddingX={5}
          paddingY={3}
          focusBorderColor="yellow.400"
          placeholder="Type your message here..."
          fontWeight="light"
          onChange={handleMessage}
          resize="none"
          bgColor="white"
          name="message"
        />
        <Button
          variant="solid"
          colorScheme="yellow"
          boxShadow="sm"
          leftIcon={<TbSend />}
          type="submit"
          onClick={() =>
            toast({
              isClosable: true,
              position: "bottom-right",
              render: () => {
                return (
                  <Box
                    p={8}
                    borderRadius="md"
                    boxShadow="lg"
                    bgColor="green.300"
                  >
                    <HStack spacing={4}>
                      <Icon as={<FaPaperPlane />} color="whiteAlpha.900" />
                      <VStack>
                        <Text fontWeight="semibold">Success !</Text>
                        <Text>Your message has been sent successfully</Text>
                      </VStack>
                    </HStack>
                  </Box>
                )
              },
            })
          }
        >
          Sumbit
        </Button>
      </VStack>
      }
    </Formik>
  );
};

export default HelpForm;
