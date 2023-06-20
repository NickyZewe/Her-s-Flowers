import {
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const EventSection = () => {
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
            src="/images/Picture55.png"
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
                Events
              </Heading>
              <Heading
                size="xl"
                fontWeight="normal"
                fontFamily={"open-sans"}
                color={"black"}
              >
                We offer florals for private events such as weddings, elopements
                and birthdays.
              </Heading>
            </Stack>
            <HStack spacing="3">
              <NavLink to={"/events"}>
                <Text
                  color={"#ff8acb"}
                  fontWeight="bold"
                  fontSize="2xl"
                  fontFamily={"open-sans"}
                >
                  Inquire about an event
                </Text>
              </NavLink>
            </HStack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default EventSection;
