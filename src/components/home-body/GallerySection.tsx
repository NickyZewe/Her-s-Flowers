import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Skeleton,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";

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
            src="https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
            alt="Lovely Image"
            fallback={<Skeleton />}
            maxH="450px"
            minW="300px"
            objectFit="cover"
            flex="1"
          />
        </Flex>
        <Box
          width={{ lg: "sm" }}
          transform={{ base: "translateY(-50%)", lg: "none" }}
          bg={{
            base: useColorModeValue("red.50", "gray.700"),
            lg: "transparent",
          }}
          mx={{ base: "6", md: "8", lg: "0" }}
          px={{ base: "6", md: "8", lg: "0" }}
          py={{ base: "6", md: "8", lg: "12" }}
        >
          <Stack spacing={{ base: "8", lg: "10" }}>
            <Stack spacing={{ base: "2", lg: "4" }}>
              <Heading
                size="xl"
                color={useColorModeValue("red.500", "red.300")}
              >
                Misguided
              </Heading>
              <Heading size="xl" fontWeight="normal">
                Refresh your wardrobe
              </Heading>
            </Stack>
            <HStack spacing="3">
              <Icon
                color={useColorModeValue("red.500", "red.300")}
                as={FaArrowLeft}
              />
              <Link
                color={useColorModeValue("red.500", "red.300")}
                fontWeight="bold"
                fontSize="lg"
              >
                Discover now
              </Link>
            </HStack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default GallerySection;
