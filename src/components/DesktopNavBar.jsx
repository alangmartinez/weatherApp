import {
  Button,
  HStack,
  IconButton,
  Text,
  useDisclosure,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalFooter,
  ModalCloseButton,
  VStack,
  ModalContent,
  ModalHeader,
  Input,
  StackDivider,
  InputGroup
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";

export default function DesktopNavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HStack spacing={9}>
        <Text fontWeight="bold" fontSize="3xl">
          Weather App
        </Text>
        <HStack spacing={12} paddingY={3} fontWeight="semibold" paddingX={6}>
          <Link to="/">
            <Button variant="ghost" colorScheme='gray' fontSize={18}>
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
          <IconButton icon={<IoMoon />} />
        </HStack>
      </HStack>
      <HStack spacing={8}>
        <Button variant='ghost' size='md' onClick={onOpen}>
          Log In
        </Button>
        <Button
          boxShadow="md"
          colorScheme="facebook"
          size="lg"
          rightIcon={<FaArrowRight />}
        >
          Sign Up
        </Button>
      </HStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log In :</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {" "}
            <VStack divider={<StackDivider w='50%' alignSelf borderColor='blackAlpha.500'/>} spacing={6}>
              <InputGroup></InputGroup>
              <Input placeholder="Password" type="password" />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <HStack spacing={4}>
              <Button variant="ghost" colorScheme='gray' onClick={onClose}>
                Close
              </Button>
              <Button rightIcon={<FiLogIn/>} variant="solid" colorScheme='facebook' borderRadius='md'>Log In</Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
