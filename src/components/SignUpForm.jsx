import React from 'react';
import { Form, Formik } from 'formik';
import { FormControl, InputGroup, VStack, Input } from '@chakra-ui/react';
import { FaUserAlt } from 'react-icons/fa';


const SignUpForm = () => {
    return (
        <>
            <Formik
                initialValues={
                    {
                        username: '',
                        password: ''
                    }
                }
                validate={() => useSignUpValidation()}
                onSubmit={(values, {resetForm}) => {
                    resetForm();
                }
                }
            >
                {
                    () => (
                        <Form>
                            <VStack>
                                <FormControl isRequired>
                                    <FormLabel>User Name :</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement children={<FaUserAlt/>}></InputLeftElement>
                                        <Input type='text' placeholder='Username...' name='username' ></Input>
                                    </InputGroup>
                                </FormControl>
                            </VStack>
                        </Form>
                    )
                }
            </Formik>
        </>
    );
}

export default SignUpForm;