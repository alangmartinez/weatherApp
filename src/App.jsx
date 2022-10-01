import { Container, Text } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Favorites from "./pages/favorite/Favorites";
import Help from "./pages/Help";
import HomePage from "./pages/HomePage";
import Footer from './components/Footer'
import './app.css'

function App() {
  return (
    <>
      <Header />
      <Container maxW="container.md" width="100%" marginY={12}>
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
      </Container>
      <Footer />
    </>
  );
}

export default App;
