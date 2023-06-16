import { Box, Flex, Grid, Spacer, VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <Flex w="100" justifyContent={"center"} alignItems={"top"} py={0}>
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
