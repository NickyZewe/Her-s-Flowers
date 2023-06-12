import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";

const NavBar = () => {
  return (
    <Flex p={2}>
      <Box>
        <Menu>
          <MenuButton as={IconButton} icon={<HamburgerIcon />} color="gray.50">
            Actions
          </MenuButton>
          <MenuList color="gray.50">
            <MenuItem>Gallery</MenuItem>
            <MenuItem>Shop</MenuItem>
            <MenuItem>Contact Us</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Spacer />
      <Heading as="h3" size="lg" color="gray.50" paddingInline={2}>
        {" "}
        Her's Floral Design{" "}
      </Heading>
      <Spacer />
      <Box>
        <Link href="https://www.instagram.com/hersfloraldesign/" isExternal>
          <IconButton
            ml={2}
            aria-label="Instagram Link"
            color="gray.50"
            isRound
            icon={<FaInstagram />}
          ></IconButton>
        </Link>
      </Box>
    </Flex>
  );
};

export default NavBar;
