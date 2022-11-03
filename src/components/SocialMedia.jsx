import { HStack, Icon } from "@chakra-ui/react";
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function SocialMedia({ boxSize, color }) {
  const icons = [FaGithub, FaTwitter, FaFacebookF, FaLinkedin];
  return (
      <HStack spacing={7}>
        {icons.map((icon, index) => (
          <Icon as={icon} color={color} key={index} boxSize={boxSize} cursor="pointer" />
        ))}
      </HStack>
  );
}
