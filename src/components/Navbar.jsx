import {
  ColorModeContext,
  HStack,
  IconButton,
  Container,
  Box,
  Text,
  Avatar,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { useContext } from "react";
import avatar from  '../assets/image/avatar.png';

const Navbar = () => {
  const isActiveLink = ({ isActive }) => {
    return isActive ? { borderBottom: "2px solid" } : undefined;
  };

  let { isDark, toggleColorMode } = useContext(ColorModeContext);

  return (
    <Box as="header">
      <Container maxW="container.lg" as="nav">
        <HStack justify="space-between">
          <Avatar name="Alan Martinez" size="md" src={avatar} cursor='pointer' order={2} bgColor="transparent" bg='telegram.500' />
          <HStack spacing={12} paddingY={3} fontWeight="semibold" paddingX={6} order={1}>
            <IconButton
              icon={isDark ? <FaSun /> : <FaMoon />}
              onClick={toggleColorMode}
              isRound
              bgColor="transparent"
            ></IconButton>
            <NavLink style={isActiveLink} to="/">
              <Text cursor="pointer" paddingY={3}>
                Home
              </Text>
            </NavLink>
            <NavLink style={isActiveLink} to="/about-us">
              <Text cursor="pointer" paddingY={3}>
                About Us
              </Text>
            </NavLink>
            <NavLink style={isActiveLink} to="/favorites">
              <Text cursor="pointer" paddingY={3}>
                Favorites
              </Text>
            </NavLink>
            <NavLink style={isActiveLink} to="/help">
              <Text cursor="pointer" paddingY={3}>
                Help
              </Text>
            </NavLink>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;
