import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./NavBar";

const Body = () => {
  return (
    <Grid
      templateAreas={`"header header"
                    "main main"
                    "footer footer"`}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
      h="200px"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="pink.300" area={"header"}>
        <NavBar />
      </GridItem>

      <GridItem pl="2" bg="green.300" area={"main"}>
        Main
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
};

export default Body;
