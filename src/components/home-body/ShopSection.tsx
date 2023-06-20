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
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ShopSection = () => {
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "0", lg: "12" }}
      py={{ base: "0", lg: "12" }}
    >
      <Stack
        direction={{ base: "column", lg: "row-reverse" }}
        spacing={{ base: "0", lg: "20" }}
      >
        <Flex flex="1" overflow="hidden">
          <Image
            src="/images/Picture11.png?w=164&h=164&fit=crop&auto=format"
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
              <Heading size="xl" color={"#ff8acb"}>
                Shop
              </Heading>
              <Heading size="xl" fontWeight="normal" fontFamily={"open-sans"}>
                We offer florals for private events, delivery, and branded
                events.
              </Heading>
            </Stack>
            <HStack spacing="3">
              <NavLink to={"/shop"}>
                <Text
                  color={"#ff8acb"}
                  fontWeight="bold"
                  fontSize="2xl"
                  fontFamily={"open-sans"}
                >
                  Shop now
                </Text>
              </NavLink>
            </HStack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default ShopSection;
