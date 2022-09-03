import {
  HStack,
  Switch,
  Button,
  Text,
  IconButton,
  StackDivider,
  ColorModeContext,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { FaMoon, FaSun } from 'react-icons/fa';

export default function DesktopNavBar() {
  const isActiveLink = ({ isActive }) => {
    return isActive ? { borderBottom: "2px solid" } : undefined;
  };
  const { colorMode, toggleColorMode } = useContext(ColorModeContext);

  let isDark = colorMode === "dark";
  return (
    <>
        <HStack divider={<StackDivider borderColor="gray.300" />} spacing={3}>
          <Button variant="ghost" colorScheme="yellow">
            Sign In
          </Button>
          <Button
            variant="solid"
            boxShadow="md"
            colorScheme="yellow"
            color="whiteAlpha.900"
          >
            Register
          </Button>
        </HStack>
        <HStack
          spacing={12}
          paddingY={3}
          fontWeight="semibold"
          paddingX={6}
          order={2}
        >
          <HStack>
            <Switch onChange={toggleColorMode} />
            <IconButton
              icon={isDark ? <FaSun /> : <FaMoon />}
              isRound
              bgColor="transparent"
            ></IconButton>
          </HStack>
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
    </>
  );
}
