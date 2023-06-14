import { Box, Grid, GridItem } from "@chakra-ui/react";
import ShopSection from "../components/home-body/ShopSection";
import NavBar from "../components/NavBar";
import GallerySection from "../components/home-body/GallerySection";
import AboutSection from "../components/home-body/AboutSection";
import EventSection from "../components/home-body/EventSection";
import { products } from "../utilities/fakeData";
import { ProductCard } from "../components/ProductCard";
import { ProductGrid } from "../components/ProductGrid";

const HomePage = () => {
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
      <GridItem pl="2" bg="green.300" area={"main"}>
        Main
        <ShopSection />
        <GallerySection />
        <EventSection />
        <AboutSection />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
