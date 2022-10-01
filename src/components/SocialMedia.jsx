import { HStack, VStack, Text, Icon } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaFacebookF, FaLinkedin } from 'react-icons/fa';

export default function SocialMedia() {
    const icons = [FaGithub, FaTwitter, FaFacebookF, FaLinkedin ]
  return (
    <VStack justify='start' align='start' spacing={4}>
      <Text fontWeight='bold'>Social Media:</Text>
      <HStack justify='start' spacing={7}>
        {
            icons.map( (icon, index) => <Icon as={icon} key={index} boxSize={7} cursor='pointer' />)
        }
      </HStack>
    </VStack>
  );
}
