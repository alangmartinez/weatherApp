import {
  Button,
  HStack, Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text, useDisclosure
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogInForm from "./LogInForm";

export default function DesktopNavBar({color}) {
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <>
      <HStack spacing={9} color={color}>
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
        <Button variant="ghost" size="lg" fontSize='xl' onClick={onOpen} color={color}>
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
