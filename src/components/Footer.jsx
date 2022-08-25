import { HStack, VStack, Text } from "@chakra-ui/react";

const Footer = () => {
    return(
        <HStack bgColor='blackAlpha.800' position='absolute' bottom='0' paddingX={10} borderRadius='md'>
            <VStack spacing={2} color='white' fontWeight='semibold'>
                <Text>Home</Text>
                <Text>About Us</Text>
            </VStack>
        </HStack>
    )
};

export default Footer;
