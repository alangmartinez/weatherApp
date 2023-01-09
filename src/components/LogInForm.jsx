import {
  FormControl,
  Input,
  InputGroup,
  VStack,
  InputLeftElement,
  FormHelperText,
  FormLabel,
  Button,
  FormErrorMessage,
  Divider,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import useLogInValidation from "../hooks/useLogInValidation";

function LogInForm({ onClose }) {
  function validateUser({ values }) {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user.email === values.email && user.password === values.password) {
      return true;
    }
    return false;
  }

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => useLogInValidation(values)}
        onSubmit={(values, { resetForm }) => {
          validateUser({ values }) && onClose();
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
        }) => (
          <Form onSubmit={() => handleSubmit()}>
            <VStack spacing={6} py={6} px={5}>
              <VStack spacing={3} w="full">
                {/* Email Field */}
                <FormControl
                  isRequired
                  isInvalid={errors.email && touched.email}
                >
                  <FormLabel htmlFor="email">E-mail:</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      children={<FaUserAlt />}
                    ></InputLeftElement>
                    <Input
                      autoFocus
                      placeholder="example@email.com"
                      type="text"
                      name="email"
                      id="email"
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </InputGroup>
                  {touched.email && errors.email ? (
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  ) : (
                    <FormHelperText>Enter your e-mail here.</FormHelperText>
                  )}
                </FormControl>

                {/* Password Field */}
                <FormControl
                  isRequired
                  isInvalid={errors.password && touched.password}
                >
                  <FormLabel htmlFor="password">Password:</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      children={<RiLockPasswordFill />}
                    ></InputLeftElement>
                    <Input
                      placeholder="Password"
                      type="password"
                      name="password"
                      id="password"
                      value={values.password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </InputGroup>
                  {touched.password && errors.password ? (
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  ) : (
                    <FormHelperText>Enter your password here.</FormHelperText>
                  )}
                </FormControl>
              </VStack>

              <Divider w="62%" borderColor="blackAlpha.600" />

              {/* Buttons */}
              <Button
                rightIcon={<FiLogIn />}
                variant="solid"
                colorScheme="facebook"
                borderRadius="md"
                size="lg"
                type="submit"
                w="full"
                boxShadow="lg"
              >
                Log In
              </Button>
              <Button variant="link">Forgot your password ?</Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default LogInForm;
