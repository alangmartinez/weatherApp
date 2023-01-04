import { HStack, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoIosMail } from 'react-icons/io';

export default function SocialMedia({ boxSize }) {
  const icons = [FaGithub, FaTwitter, IoIosMail, FaLinkedin];
  return (
      <HStack spacing={7} color='whitesmoke'>
        {icons.map((icon, index) => (
          <Icon as={icon} key={index} boxSize={boxSize} cursor="pointer" />
        ))}
      </HStack>
  );
}
