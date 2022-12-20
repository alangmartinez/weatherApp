import { Container, Text, VStack } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import "./app.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Favorites from "./pages/Favorites/index";
import Help from "./pages/Help/index";
import HomePage from "./pages/Home/index";

function App() {
  return (
    <>
      <VStack spacing={16}>
        <Header />
        <Container maxW="container.xl" width="full">
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
        </Container>
      </VStack>
    </>
  );
}

export default App;
