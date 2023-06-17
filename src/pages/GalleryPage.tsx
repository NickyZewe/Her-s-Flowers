import { Flex } from "@chakra-ui/react";
import { ImageList, ImageListItem } from "@mui/material";

const GalleryPage = () => {
  const itemData = [
    {
      img: "../../public/images/Picture1.png",
      title: "Breakfast",
    },
    {
      img: "../../public/images/Picture6.png",
      title: "Burger",
    },
    {
      img: "../../public/images/Picture7.png",
      title: "Camera",
    },
    {
      img: "../../public/images/Picture4.png",
      title: "Coffee",
    },
    {
      img: "../../public/images/Picture5.png",
      title: "Hats",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
    },
  ];
  return (
    <Flex backgroundColor={"#ffffff"}>
      <ImageList sx={{ width: 500, height: 800 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Flex>
  );
};

export default GalleryPage;
