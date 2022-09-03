import { Box, Container, Text } from "@chakra-ui/react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Help from "./pages/Help";
import background from "./assets/image/weatherApp-background.jpeg";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Box bgImage={background} bgPosition="center" bgSize="cover" h="100vh">
        <Header />
        <Container maxW="container.md" width='100%' marginY={12}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="favorites" element={<Favorites />}></Route>
            <Route path="help" element={<Help />}></Route>
            <Route
              path="*"
              element={
                <Container centerContent>
                  <Text as="h1" textAlign="center" fontSize="xl" fontWeight='semibold'>
                    404 Nothing Found
                  </Text>
                </Container>
              }
            ></Route>
          </Routes>
        </Container>
    </Box>
  );
}

export default App;
