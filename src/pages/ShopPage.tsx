import {
  Box,
  Flex,
  Heading,
  VStack,
  Text,
  HStack,
  Button,
  Link,
} from "@chakra-ui/react";
import { ProductCard } from "../components/ProductCard";
import { ProductGrid } from "../components/ProductGrid";
import { products } from "../utilities/productData";

const ShopPage = () => {
  return (
    <Flex>
      <VStack>
        <Heading size="3xl" color={"#ff8acb"} pt={5}>
          Shop
        </Heading>
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
          <Text
            fontWeight="medium"
            color={"gray.700"}
            fontFamily={"open-sans"}
            fontSize={"28px"}
            p={5}
            textAlign={"justify"}
          >
            To purchase a combination of the listed products{" "}
            <Link
              href="https://buy.stripe.com/test_aEUfZk8MV22b38k5ko"
              isExternal
            >
              <Button
                colorScheme="pink"
                width="max-content"
                textColor={"#ffffff"}
                fontWeight={"bold"}
                fontFamily={"open-sans"}
                m={2}
              >
                Click Here
              </Button>
            </Link>
            and adjust the quantity of each cart item.
          </Text>
        </Box>
      </VStack>
    </Flex>
  );
};

export default ShopPage;
