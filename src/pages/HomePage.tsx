import { Grid, GridItem } from "@chakra-ui/react";
import AboutSection from "../components/home-body/AboutSection";
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
    >
      <GridItem pl="2" area={"main"}>
        <ShopSection />
        <GallerySection />
        <EventSection />
        <AboutSection />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
