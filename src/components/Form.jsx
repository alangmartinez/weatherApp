import {
  Box, Button,
  Divider,
  FormControl, FormErrorMessage, FormHelperText, FormLabel,
  Input,
  InputGroup, InputLeftElement, InputRightElement, Text, Textarea, Tooltip, useToast, VStack
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { FaCheckCircle, FaInfo, FaMailBulk, FaPhone } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import { useFormValidation } from "../hooks/useFormValidation";

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
      validate={() => useFormValidation({values})}
      onSubmit={(values, { resetForm }) => {
        resetForm();
        toast({
          isClosable: true,
          position: "bottom",
          title: "Success !",
          description: "Your message has been sent successfully.",
          status: "success",
        });
        console.log(JSON.stringify(values));
      }}
    >
      {({ handleChange, handleBlur, touched, values, errors }) => (
        <Form>
          <VStack spacing={8} color="blackAlpha.900">
            <FormControl isRequired isInvalid={touched.name && errors.name}>
              <Tooltip
                placement="left"
                hasArrow
                paddingX={4}
                paddingY={2}
                borderRadius="md"
                boxShadow="md"
                label="Is a required field"
                marginRight={1}
                aria-label="Is a required field"
              >
                <FormLabel>Name:</FormLabel>
              </Tooltip>
              <InputGroup>
                <InputLeftElement children={<FaInfo />}></InputLeftElement>
                <Input
                  color="blackAlpha.900"
                  variant={variant}
                  placeholder="Name..."
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {!errors.name && values.name.length >= 4 && (
                  <InputRightElement
                    color="green.400"
                    children={<FaCheckCircle />}
                  ></InputRightElement>
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
              <Tooltip
                placement="left"
                hasArrow
                paddingX={4}
                paddingY={2}
                borderRadius="md"
                boxShadow="md"
                label="Is a required field"
                marginRight={1}
                aria-label="Is a required field"
              >
                <FormLabel>Surname:</FormLabel>
              </Tooltip>
              <InputGroup>
                <InputLeftElement children={<FaInfo />}></InputLeftElement>
                <Input
                  variant={variant}
                  placeholder="Surname..."
                  name="surname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.surname}
                />
                {!errors.surname && values.surname.length >= 4 && (
                  <InputRightElement
                    color="green.400"
                    children={<FaCheckCircle />}
                  ></InputRightElement>
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
              <Tooltip
                placement="left"
                hasArrow
                paddingX={4}
                paddingY={2}
                borderRadius="md"
                boxShadow="md"
                label="Is a required field"
                marginRight={1}
                aria-label="Is a required field"
              >
                <FormLabel>E-mail:</FormLabel>
              </Tooltip>
              <InputGroup>
                <InputLeftElement children={<FaMailBulk />}></InputLeftElement>
                <Input
                  type="email"
                  variant={variant}
                  placeholder="E-mail..."
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  values={values.email}
                />
                {values.email.length >= 4 && !errors.email && (
                  <InputRightElement
                    color="green.400"
                    children={<FaCheckCircle />}
                  ></InputRightElement>
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
                  type="tel"
                  name="tel"
                  placeholder="Phone number..."
                  variant={variant}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.tel}
                />
                {!errors.tel && values.tel.length >= 4 && (
                  <InputRightElement
                    color="green.400"
                    children={<FaCheckCircle />}
                  ></InputRightElement>
                )}
              </InputGroup>
              {touched.tel && errors.tel ? (
                <FormErrorMessage>{errors.tel}</FormErrorMessage>
              ) : (
                <FormHelperText>
                  * Your phone number will be used only to send you a response
                </FormHelperText>
              )}
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
              colorScheme='telegram'
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
