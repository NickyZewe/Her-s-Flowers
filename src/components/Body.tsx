import { Box, Grid, GridItem } from "@chakra-ui/react";
import ShopSection from "./home-body/ShopSection";
import NavBar from "./NavBar";
import GallerySection from "./home-body/GallerySection";
import AboutSection from "./home-body/AboutSection";
import EventSection from "./home-body/EventSection";
import { products } from "../utilities/fakeData";
import { ProductCard } from "./ProductCard";
import { ProductGrid } from "./ProductGrid";

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
        <ShopSection />
        <GallerySection />
        <EventSection />
        <AboutSection />
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Footer
        <Box
          maxW="7xl"
          mx="auto"
          px={{ base: "4", md: "8", lg: "12" }}
          py={{ base: "6", md: "8", lg: "12" }}
        >
          <ProductGrid>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductGrid>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Body;
