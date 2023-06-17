import { Box, Flex, Grid, Spacer, VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <Flex direction="column" flex="1">
      <VStack spacing={0}>
        <NavBar />
        <Spacer />
        <Box h={"100%"}>
          <Outlet />
        </Box>
        <Footer />
      </VStack>
    </Flex>
  );
};

export default Layout;
