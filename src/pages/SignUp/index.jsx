import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import useSignUpValidation from "../../hooks/useSignUpValidation";

export default function SignUp() {
  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validate={(values) => useSignUpValidation({ values })}
      onSubmit={(values) => {
        localStorage.setItem("user", JSON.stringify(values));
      }}
    >
      {({
        handleChange,
        values,
        errors,
        touched,
        handleBlur,
        handleSubmit,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Box
            bgColor="whiteAlpha.500"
            backdropFilter="auto"
            backdropBlur="14px"
            p={16}
            paddingBottom={12}
            borderRadius="lg"
            boxShadow="dark-lg"
          >
            <HStack justify="space-between" spacing={6} marginBottom={10}>
              <VStack spacing={4} flex={1}>
                <FormControl
                  isRequired
                  isInvalid={errors.email && touched.email}
                >
                  <FormLabel htmlFor="email">Email:</FormLabel>
                  <Input
                    variant="filled"
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email ? (
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  ) : (
                    <FormHelperText>Enter your e-mail here.</FormHelperText>
                  )}
                </FormControl>
                <FormControl isRequired isInvalid={errors.name && touched.name}>
                  <FormLabel htmlFor="name">Name:</FormLabel>
                  <Input
                    placeholder="Name"
                    id="name"
                    name="name"
                    value={values.name}
                    variant="filled"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.name && errors.name ? (
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  ) : (
                    <FormHelperText>Enter your name here.</FormHelperText>
                  )}
                </FormControl>
                <FormControl
                  isRequired
                  isInvalid={errors.surname && touched.surname}
                >
                  <FormLabel htmlFor="surname">Surname:</FormLabel>
                  <Input
                    placeholder="Surname"
                    id="surname"
                    name="surname"
                    value={values.surname}
                    variant="filled"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.surname && errors.surname ? (
                    <FormErrorMessage>{errors.surname}</FormErrorMessage>
                  ) : (
                    <FormHelperText>Enter your surname here.</FormHelperText>
                  )}
                </FormControl>
              </VStack>

              <VStack spacing={4} flex={1}>
                <FormControl
                  isRequired
                  isInvalid={errors.password && touched.password}
                >
                  <FormLabel htmlFor="password">Password:</FormLabel>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    value={values.password}
                    placeholder="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.password && errors.password ? (
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  ) : (
                    <FormHelperText>
                      Password must have between 4 - 10 characters.
                    </FormHelperText>
                  )}
                </FormControl>
                <FormControl
                  isRequired
                  isInvalid={errors.confirmPassword && touched.confirmPassword}
                >
                  <FormLabel htmlFor="repeatPassword">
                    Repeat Password:
                  </FormLabel>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    variant="filled"
                    value={values.repeatPassword}
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.confirmPassword && errors.confirmPassword ? (
                    <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
                  ) : (
                    <FormHelperText>
                      Password must have between 4 - 10 characters.
                    </FormHelperText>
                  )}
                </FormControl>
              </VStack>
            </HStack>
            <VStack spacing={5}>
              <Button
                colorScheme="facebook"
                size="lg"
                borderRadius="md"
                type="submit"
              >
                Register
              </Button>
              <Button variant="link">You are already register? Log In</Button>
            </VStack>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
