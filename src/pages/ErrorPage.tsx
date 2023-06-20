import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { NavLink, isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Flex
        p={5}
        backgroundColor={"#ffffff"}
        align={"center"}
        justify={"center"}
      >
        <VStack>
          <Heading color={"#ff8acb"}>Oops</Heading>
          <Text color={"#ff8acb"}>
            {isRouteErrorResponse(error)
              ? "This page could not be found."
              : "An unexpected error occured."}
          </Text>
          <NavLink to={"/"}>
            <Button
              colorScheme="pink"
              fontWeight="light"
              fontSize="2xl"
              fontFamily={"open-sans"}
            >
              Back to Home Page
            </Button>
          </NavLink>
        </VStack>
      </Flex>
      <Footer />
    </>
  );
};

export default ErrorPage;
