import {
  AspectRatio,
  Box,
  Button,
  Image,
  Skeleton,
  Stack,
  StackProps,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { Product } from "../utilities/productData";
import { PriceTag } from "./PriceTag";

interface Props {
  product: Product;
  rootProps?: StackProps;
}

export const ProductCard = (props: Props) => {
  const { product, rootProps } = props;
  const { name, imageUrl, price, link } = product;
  return (
    <Stack spacing={{ base: "4", md: "5" }} {...rootProps}>
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={imageUrl}
            alt={name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={{ base: "md", md: "xl" }}
          />
        </AspectRatio>
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text
            fontWeight="medium"
            color={useColorModeValue("gray.700", "gray.400")}
          >
            {name}
          </Text>
          <PriceTag price={price} currency="USD" />
        </Stack>
      </Stack>
      <Stack align="left">
        <Link href={product.link} isExternal>
          <Button colorScheme="pink" width="full">
            Buy Now
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
};
