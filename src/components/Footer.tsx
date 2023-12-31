import {
  ButtonGroup,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { IoFlowerOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <Flex
      p={5}
      h="1fr"
      overflow={"hidden"}
      w="100%"
      backgroundColor={"#e2629d"}
    >
      <Stack spacing={{ base: "4", md: "5" }}>
        <Stack justify="space-between" direction="row" align="center">
          <HStack>
            <Heading
              as="h1"
              size={"2xl"}
              color="gray.50"
              paddingInline={2}
              fontFamily={"Dancing Script"}
            >
              Her's Floral Design
              <Icon as={IoFlowerOutline} color={"#ffffff"} fontSize={"2xl"} />
            </Heading>
          </HStack>
        </Stack>
        <Text fontSize="sm" color="#ffffff">
          &copy; {new Date().getFullYear()} Nixi Software Solutions, LLC. All
          rights reserved.
        </Text>
      </Stack>
    </Flex>
  );
};

export default Footer;
