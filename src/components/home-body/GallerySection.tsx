import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  Skeleton,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const GallerySection = () => {
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "0", lg: "12" }}
      py={{ base: "0", lg: "12" }}
    >
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing={{ base: "0", lg: "20" }}
      >
        <Flex flex="1" overflow="hidden">
          <Image
            src="/images/Picture66.png"
            alt="Lovely Image"
            fallback={<Skeleton />}
            maxH="450px"
            minW="300px"
            objectFit="cover"
            flex="1"
            borderRadius={100}
            border={"8px"}
            borderColor={"#ff8acb"}
          />
        </Flex>
        <Box
          width={{ lg: "sm" }}
          bg={{
            base: "#ffffff",
            lg: "transparent",
          }}
          mx={{ base: "6", md: "8", lg: "0" }}
          px={{ base: "6", md: "8", lg: "0" }}
          py={{ base: "6", md: "8", lg: "12" }}
        >
          <Stack spacing={{ base: "8", lg: "10" }}>
            <Stack spacing={{ base: "2", lg: "4" }}>
              <Heading size="xl" color={"#ff8acb"}>
                Gallery
              </Heading>
              <Heading
                as={"h2"}
                size="xl"
                fontWeight="normal"
                fontFamily={"open-sans"}
                color={"black"}
              >
                See our latest work
              </Heading>
            </Stack>
            <HStack spacing="3">
              <NavLink to={"/gallery"}>
                <Text
                  color={"#ff8acb"}
                  fontWeight="bold"
                  fontSize="2xl"
                  fontFamily={"open-sans"}
                >
                  Discover now
                </Text>
              </NavLink>
            </HStack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default GallerySection;
