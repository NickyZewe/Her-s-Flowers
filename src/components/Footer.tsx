import { ButtonGroup, Flex, IconButton, Stack, Text } from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Logo } from "./Logo";

const Footer = () => {
  return (
    <Flex
      p={5}
      h="1fr"
      overflow={"hidden"}
      w="100%"
      backgroundColor={"#ff8acb"}
    >
      <Stack spacing={{ base: "4", md: "5" }}>
        <Stack justify="space-between" direction="row" align="center">
          <Logo />
          <ButtonGroup variant="tertiary">
            <IconButton
              as="a"
              href="#"
              aria-label="Instagram"
              icon={<FaInstagram fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Stack>
        <Text fontSize="sm" color="fg.subtle">
          &copy; {new Date().getFullYear()} Her's Floral Design. All rights
          reserved.
        </Text>
      </Stack>
    </Flex>
  );
};

export default Footer;
