import { Box, Button, Container, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogInForm from "./LogInForm";
import NavBar from "./NavBar";

const Header = () => {
  const [bgColor, setBgColor] = useState("transparent");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isASmallerScreen } = useMediaQuery("(max-width: 768px)");

  const color = bgColor === "transparent" ? "blackAlpha.900" : "whiteAlpha.900";

  function handleScroll() {
    const nav = document.querySelector("header");
    const navHeight = nav.getBoundingClientRect().height;
    const scrollHeight = window.scrollY;

    scrollHeight > navHeight
      ? setBgColor("#13141535")
      : setBgColor("transparent");
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);



  return (
    <>
      <Box
        as="header"
        position="sticky"
        top={0}
        backdropFilter={bgColor === "transparent" ? "none" : "blur(5px)"}
        backdropBlur={bgColor === "transparent" ? "none" : "blur(5px)"}
        boxShadow={bgColor === "transparent" ? "none" : "lg"}
        w="full"
        zIndex="sticky"
        bgColor={bgColor}
        transition="all .35s ease-in-out"
      >
        <Container maxW="container.xl" as="nav">
          <HStack justify="space-between" paddingY={5}>
            {
              isASmallerScreen ? ' ' : <NavBar color={color}/>
            }
            <HStack spacing={8}>
              <Button
                variant="ghost"
                size="lg"
                fontSize="xl"
                onClick={onOpen}
                color={color}
              >
                Log In
              </Button>
              <Button
                fontSize="xl"
                boxShadow="md"
                colorScheme="facebook"
                p="1.8rem 2rem"
                size="lg"
                rightIcon={<FaArrowRight />}
              >
                <Link to="/sign-up">Sign Up</Link>
              </Button>
            </HStack>
          </HStack>
        </Container>
      </Box>

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
};

export default Header;
