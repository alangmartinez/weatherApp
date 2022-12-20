import {
  Input,
  FormLabel,
  FormErrorMessage,
  InputGroup,
  InputLeftElement,
} from "chakra-ui/react";
import { Formik, Form } from "formik";
import { FaUserAlt } from "react-icons/fa";
import useLogInValidation from "../hooks/useLogInValidation";

export default function LogInForm() {
  return (
    <>
      <Formik>
        initialValues=
        {{
          user: "",
          password: "",
        }}
        validate={() => useLogInValidation(values)}
        onSubmit=
        {(values, { resetForm }) => {
          resetForm();
          console.log(values);
        }}
        <Form>
          {({values, errors}) => (
            <>
              <FormLabel>E-mail or User Name:</FormLabel>
              <InputGroup>
                <InputLeftElement children={<FaUserAlt />}></InputLeftElement>
                <Input type="text" name="user" />
                </>
          )}
        </Form>
      </Formik>
    </>
  );
}
