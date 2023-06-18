import { SimpleGrid, SimpleGridProps } from "@chakra-ui/react";

export const ProductGrid = (props: SimpleGridProps) => {
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 4 }}
      spacing={10}
      columnGap={{ base: "4", md: "6" }}
      rowGap={{ base: "8", md: "10" }}
      {...props}
    />
  );
};
