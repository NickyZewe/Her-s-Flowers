import { Flex, Heading, Image, SimpleGrid, VStack } from "@chakra-ui/react";
import { itemData } from "../utilities/itemData";

const GalleryPage = () => {
  return (
    <Flex>
      <VStack>
        <Heading size="3xl" color={"#ff8acb"}>
          Gallery
        </Heading>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
          {itemData.map((item) => (
            <Image
              key={item.img}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              p={5}
              borderRadius={60}
            ></Image>
          ))}
        </SimpleGrid>
      </VStack>
    </Flex>
  );
};

export default GalleryPage;

// <ImageList sx={{ width: 500, height: 800 }} cols={3} rowHeight={164}>
//   {itemData.map((item) => (
//     <ImageListItem key={item.img}>
//       <img
//         src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
//         srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
//         alt={item.title}
//         loading="lazy"
//       />
//     </ImageListItem>
//   ))}
// </ImageList>
