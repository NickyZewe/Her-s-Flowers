import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box p={5} backgroundColor={"#ffffff"}>
        <Heading color={"dodgerblue"}>Oops</Heading>
        <Text color={"dodgerblue"}>
          {isRouteErrorResponse(error)
            ? "This page could not be found."
            : "An unexpected error occured."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
