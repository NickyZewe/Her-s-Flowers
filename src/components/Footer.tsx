import { ButtonGroup, Flex, IconButton, Stack, Text } from "@chakra-ui/react";
import { FaInstagram, FaTwitter } from "react-icons/fa";

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
          <ButtonGroup variant="tertiary">
            <IconButton
              as="a"
              color="#ffffff"
              href="#"
              aria-label="Instagram"
              icon={<FaInstagram fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              color="#ffffff"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Stack>
        <Text fontSize="sm" color="#ffffff">
          &copy; {new Date().getFullYear()} Her's Floral Design. All rights
          reserved.
        </Text>
      </Stack>
    </Flex>
  );
};

export default Footer;
