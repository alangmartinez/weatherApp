import {
  Button,
  Divider,
  FormControl,
  FormHelperText,
  FormErrorMessage,
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
  InputRightElement,
} from "@chakra-ui/react";
import { FaCheckCircle, FaInfo, FaPaperPlane, FaPhone } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { TbSend } from "react-icons/tb";
import { Formik, Form } from "formik";

// We create this funciton with the purpose of validate each field in the form
const validate = (values) => {
  // We create an object named errors
  const errors = {};

  // Name validation
  if (!values.name) {
    errors.name = "Please enter a name.";
  } else if (values.name.length < 4 || values.name.length > 10) {
    errors.name = "Name must be between 4-10 characters long.";
  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
    errors.name = "Name can only contain letters and spaces.";
  }

  // Surname validation
  if (!values.surname) {
    errors.surname = "Please enter a surname";
  } else if (values.surname.length < 4 || values.surname.length > 10) {
    errors.surname = "Surame must be between 4-10 characters long.";
  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
    errors.surname = "Surname can only contain letters and spaces.";
  }

  // E-mail validation
  if (!values.email) {
    errors.email = "Please enter an e-mail.";
  } else if (
    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)
  ) {
    errors.email = "Please enter a valid e-mail account.";
  }

  //Telephone validation
  if (!values.tel) {
    errors.tel = "Please enter a phone number.";
  } else if (
    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.tel)
  ) {
    errors.tel = "Phone number can only contain numbers.";
  } else if (values.tel.length < 10) {
    errors.tel = "Phone number must have more than 10 numbers.";
  }

  // We return the object with it's new props inside it
  return errors;
};

const HelpForm = ({ variant }) => {
  const toast = useToast();

  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        email: "",
        tel: "",
        message: "",
      }}
      validate={validate}
      onSubmit={(values, { resetForm }) => {
        resetForm();
        console.log(values);
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
            );
          },
        })
      }}
    >
      {({ handleChange, handleBlur, touched, values, errors }) => (
        <Form>
          <VStack spacing={8}>
            <FormControl isRequired isInvalid={touched.name && errors.name}>
              <FormLabel>Name:</FormLabel>
              <InputGroup>
                <InputLeftElement children={<FaInfo />}></InputLeftElement>
                <Input
                  variant={variant}
                  placeholder="Name..."
                  focusBorderColor="yellow.400"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {errors.name ? (
                  <InputRightElement
                    color="red.500"
                    children={<IoIosWarning />}
                  ></InputRightElement>
                ) : (
                  values.name.length >= 4 && (
                    <InputRightElement
                      color="green.400"
                      children={<FaCheckCircle />}
                    ></InputRightElement>
                  )
                )}
              </InputGroup>
              {touched.name && errors.name ? (
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              ) : (
                <FormHelperText>Enter your name here</FormHelperText>
              )}
            </FormControl>
            <FormControl
              isRequired
              isInvalid={touched.surname && errors.surname}
            >
              <FormLabel>Last Name:</FormLabel>
              <InputGroup>
                <InputLeftElement children={<FaInfo />}></InputLeftElement>
                <Input
                  variant={variant}
                  placeholder="Surname..."
                  focusBorderColor="yellow.400"
                  name="surname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.surname}
                />
                {errors.surname ? (
                  <InputRightElement
                    color="red.500"
                    children={<IoIosWarning />}
                  ></InputRightElement>
                ) : (
                  values.surname.length >= 4 && (
                    <InputRightElement
                      color="green.400"
                      children={<FaCheckCircle />}
                    ></InputRightElement>
                  )
                )}
              </InputGroup>
              {touched.surname && errors.surname ? (
                <FormErrorMessage>{errors.surname}</FormErrorMessage>
              ) : (
                <FormHelperText>Enter your surname here</FormHelperText>
              )}
            </FormControl>

            <Divider w="70%" borderColor="black" />

            <FormControl isRequired isInvalid={touched.email && errors.email}>
              <FormLabel>Email:</FormLabel>
              <InputGroup>
                <InputLeftElement children={<FaMailBulk />}></InputLeftElement>
                <Input
                  type="email"
                  variant={variant}
                  placeholder="E-mail..."
                  focusBorderColor="yellow.400"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  values={values.email}
                />
                {errors.email ? (
                  <InputRightElement
                    color="red.500"
                    children={<IoIosWarning />}
                  ></InputRightElement>
                ) : (
                  values.email.length >= 4 && (
                    <InputRightElement
                      color="green.400"
                      children={<FaCheckCircle />}
                    ></InputRightElement>
                  )
                )}
              </InputGroup>
              {touched.email && errors.email ? (
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              ) : (
                <FormHelperText>example@email.com</FormHelperText>
              )}
            </FormControl>

            <FormControl isInvalid={touched.tel && errors.tel}>
              <FormLabel>Phone Number:</FormLabel>
              <InputGroup>
                <InputLeftElement children={<FaPhone />}></InputLeftElement>
                <Input
                  type="text"
                  placeholder="Phone number..."
                  variant={variant}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.tel}
                />
                {errors.tel ? (
                  <InputRightElement
                    color="red.500"
                    children={<IoIosWarning />}
                  ></InputRightElement>
                ) : (
                  values.tel.length >= 4 && (
                    <InputRightElement
                      color="green.400"
                      children={<FaCheckCircle />}
                    ></InputRightElement>
                  )
                )}
              </InputGroup>
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
                {values.message}
              </Text>
            </Box>
            <Textarea
              paddingX={5}
              paddingY={3}
              focusBorderColor="yellow.400"
              placeholder="Type your message here..."
              fontWeight="light"
              onChange={handleChange}
              resize="none"
              bgColor="white"
              name="message"
              value={values.message}
            />
            
            <Button
              variant="solid"
              colorScheme="yellow"
              boxShadow="sm"
              leftIcon={<TbSend />}
              type="submit"
            >
              Sumbit
            </Button>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};

export default HelpForm;
