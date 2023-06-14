import { Box, Grid, Spacer } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <Grid w="100%" justifyContent={"center"} alignItems={"top"}>
      <NavBar />
      <Spacer />
      <Box p={5}>
        <Outlet />
      </Box>
    </Grid>
  );
};

export default Layout;
