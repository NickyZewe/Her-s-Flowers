import {
  useColorModeValue,
  Stack,
  Heading,
  HStack,
  Box,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const SuccessPage = () => {
  return (
    <Flex p={10}>
      <Stack spacing={{ base: "8", lg: "10" }}>
        <Stack spacing={{ base: "2", lg: "4" }}>
          <Heading size="xl" color={"#ff8acb"}>
            Thank You!
          </Heading>
          <Heading size="xl" fontWeight="normal" fontFamily={"open-sans"}>
            We will be in touch with you within 48 hours.
          </Heading>
        </Stack>
        <HStack spacing="3">
          <NavLink to={"/"}>
            <Button
              colorScheme="pink"
              fontWeight="light"
              fontSize="2xl"
              fontFamily={"open-sans"}
            >
              Back to Home Page
            </Button>
          </NavLink>
        </HStack>
      </Stack>
    </Flex>
  );
};

export default SuccessPage;
