import { Container } from '@chakra-ui/react';
import Form from '../components/Form';

const Help = () => {
    return(
        <Container bgColor='gray.50' padding={12} borderRadius='md' boxShadow='xl' marginY={14} >
            <Form variant='filled' />
        </Container>
    )
}

export default Help;