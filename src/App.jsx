import { Container, Text, VStack } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import "./app.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Favorites from "./pages/Favorites/index";
import Help from "./pages/Help/index";
import HomePage from "./pages/Home/index";
import AboutUs from "./pages/AboutUs/index";
import SignUp from "./pages/SignUp/index";

function App() {

  const pages = [
    {
      name: "Home",
      path: "/",
      component: <HomePage/>,
    },
    {
      name: "Favorites",
      path: "/favorites",
      component: <Favorites/>,
    },{
      name: "About Us",
      path: "/about-us",
      component: <AboutUs/>,
    },
    {
      name: "Help",
      path: "/help",
      component: <Help/>,
    },
    {
      name: 'Sign Up',
      path: "/sign-up",
      component: <SignUp/>,
    }
  ];

  return (
    <>
      <VStack spacing={16}>
        <Header />
        <Container maxW="container.xl" width="full">
          <Routes>
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
            {
              pages.map( page => ( 
                <Route path={page.path} element={page.component} key={page.name} />
              ))
            }
          </Routes>
          <Footer />
        </Container>
      </VStack>
    </>
  );
}

export default App;
