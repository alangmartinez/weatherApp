import {
  Icon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
  Text,
  useDisclosure,
  Box,
  StackDivider,
  DrawerFooter,
  Button,
} from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function MobileNavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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

  return (
    <Box paddingY={4} paddingX={4}>
      <Icon
        as={HiMenu}
        boxSize={9}
        color="black"
        onClick={onOpen}
        cursor="pointer"
      />
      <Drawer isOpen={isOpen} onClose={onClose} placement="right">
        <DrawerOverlay />
        <DrawerContent
          boxShadow="lg"
          bgColor="black"
          transition="ease"
          fontFamily="drawer"
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
              {
                pages.map( page => 
                <Link key={page.name} to={page.path} onClick={onClose}>
                  <Text cursor='pointer'>{page.name}</Text>
                </Link>)
              }
            </VStack>
          </DrawerBody>
          <DrawerFooter alignSelf='center'>
            <Button colorScheme='orange' fontWeight='thin' fontSize='md' size='lg' boxShadow='xl'>Sign Out</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
