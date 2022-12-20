import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  HStack,
  Icon,
  IconButton,
  StackDivider,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import SignUpModal from "./SignUpModal";

export default function MobileNavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toggleColorMode } = useColorMode();

  const pages = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about-us",
    },
    {
      name: "Favorites",
      path: "/favorites",
    },
    {
      name: "Help",
      path: "/help",
    },
  ];

  const icon = useColorModeValue(<BsFillMoonFill />, <BsFillSunFill />);

  return (
    <>
      <HStack w="100%" justifyContent="space-between">
        <Icon as={HiMenu} boxSize={8} onClick={onOpen} cursor="pointer" />
        <HStack spacing={10}>
          <IconButton
            aria-label="change color mode"
            icon={icon}
            onClick={toggleColorMode}
            isRound
            variant="solid"
          />
          <HStack spacing={3}>
            <Button variant="ghost" colorScheme="facebook">
              Log In
            </Button>
            <Button
              variant="solid"
              shadow="md"
              colorScheme="facebook"
              onClick={onOpen}
            >
              Sign Up
            </Button>
          </HStack>
        </HStack>
      </HStack>
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay
          bgColor="whiteAlpha.200"
          backdropFilter="auto"
          backdropBlur="6px"
        />
        <DrawerContent
          boxShadow="lg"
          bgColor="blackAlpha.800"
          transition="ease"
          backdropFilter="auto"
          backdropBlur="9px"
          borderRadius="lg"
          h="90%"
          margin='auto auto auto 4rem'
        >
          <DrawerCloseButton
            onClick={onClose}
            size="lg"
            color="whiteAlpha.900"
          />
          <DrawerBody
            paddingX={14}
            paddingY={20}
            fontWeight="normal"
            fontSize="xl"
            color="whiteAlpha.900"
          >
            <VStack
              spacing={8}
              align="start"
              divider={<StackDivider borderColor="whiteAlpha.900" w="20%" />}
            >
              {pages.map((page) => (
                <Link key={page.name} to={page.path} onClick={onClose}>
                  <Text cursor="pointer">{page.name}</Text>
                </Link>
              ))}
            </VStack>
          </DrawerBody>
          <DrawerFooter alignSelf="center">
            <Button colorScheme="red" p={5} boxShadow="xl" marginBottom={6}>
              Sign Out
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      {/* <SignUpModal isOpen={isOpen} onClose={onClose}/> */}
    </>
  );
}
