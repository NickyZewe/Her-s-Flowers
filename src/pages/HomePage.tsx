import { Grid, GridItem } from "@chakra-ui/react";
import EventSection from "../components/home-body/EventSection";
import GallerySection from "../components/home-body/GallerySection";
import ShopSection from "../components/home-body/ShopSection";

const HomePage = () => {
  return (
    <Grid
      templateAreas={`"header header"
                    "main main"
                    "footer footer"`}
      templateRows={"50px 1fr 30px"}
      templateColumns={"150px 1fr"}
      gap={1}
      fontWeight="bold"
      maxW={"100%"}
      backgroundColor={"#ffffff"}
    >
      <GridItem area={"main"} px={"5"}>
        <ShopSection />
        <GallerySection />
        <EventSection />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
