import { Container, Text, VStack } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import "./app.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Favorites from "./pages/favorite/Favorites";
import Help from "./pages/Help";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Header />
      <Container maxW="container.xl" width="full">
        <VStack spacing={16}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="help" element={<Help />} />
            <Route
              path="*"
              element={
                <Container centerContent>
                  <Text
                    as="h1"
                    textAlign="center"
                    fontSize="xl"
                    fontWeight="semibold"
                  >
                    404 Nothing Found
                  </Text>
                </Container>
              }
            />
          </Routes>
          <Footer />
        </VStack>
      </Container>
    </>
  );
}

export default App;
