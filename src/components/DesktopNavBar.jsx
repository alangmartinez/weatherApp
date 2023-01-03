import {
  Button,
  HStack, Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";
import LogInForm from "./LogInForm";

import { BsSunFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function DesktopNavBar() {
  const { toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const icon = useColorModeValue(<IoMoon />, <BsSunFill />);

  return (
    <>
      <HStack spacing={9}>
        <Text fontWeight="bold" fontSize="3xl">
          Weather App
        </Text>
        <HStack spacing={12} paddingY={3} fontWeight="semibold" paddingX={6}>
          <Link to="/">
            <Button variant="ghost" colorScheme="gray" fontSize={18}>
              Home
            </Button>
          </Link>
          <Link to="/about-us">
            <Button variant="ghost" fontSize={18}>
              About Us
            </Button>
          </Link>
          <Link to="/favorites">
            <Button variant="ghost" fontSize={18}>
              Favorites
            </Button>
          </Link>
          <Link to="/help">
            <Button variant="ghost" fontSize={18}>
              Help
            </Button>
          </Link>

        </HStack>
      </HStack>
      <HStack spacing={8}>
        <Button variant="ghost" size="lg" fontSize='xl' onClick={onOpen}>
          Log In
        </Button>
        <Button
        fontSize='xl'
          boxShadow="md"
          colorScheme="facebook"
          p="1.8rem 2rem"
          size='lg'
          rightIcon={<FaArrowRight />}
        >
          Sign Up
        </Button>
      </HStack>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay
          backdropFilter="auto"
          backdropBlur="14px"
          bgColor="whiteAlpha.100"
        />
        <ModalContent p="1rem 1rem" boxShadow="dark-lg">
          <ModalHeader>Log In :</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <LogInForm onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
