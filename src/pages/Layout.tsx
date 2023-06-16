import { Box, Flex, Grid, Spacer, VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <Flex alignItems={"top"} py={0} justifyContent={"center"}>
      <VStack spacing={0}>
        <NavBar />
        <Spacer />
        <Box>
          <Outlet />
        </Box>
        <Footer />
      </VStack>
    </Flex>
  );
};

export default Layout;
