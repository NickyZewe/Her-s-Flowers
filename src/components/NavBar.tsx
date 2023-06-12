import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
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
          <MenuButton as={IconButton} icon={<HamburgerIcon />}>
            Actions
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Spacer />
      <Box>
        <Link href="https://www.instagram.com/hersfloraldesign/" isExternal>
          <IconButton
            ml={2}
            aria-label="Instagram Link"
            isRound
            icon={<FaInstagram />}
          ></IconButton>
        </Link>
      </Box>
    </Flex>
  );
};

export default NavBar;
