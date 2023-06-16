import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Menu,
  Link,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Flex
      p={5}
      h="1fr"
      overflow={"hidden"}
      w="100%"
      backgroundColor={"#ff8acb"}
      m={0}
    >
      <Menu>
        <MenuButton as={IconButton} icon={<HamburgerIcon />} color="gray.50" />

        <MenuList color="gray.50">
          <NavLink to={"/"}>
            <MenuItem>Home</MenuItem>
          </NavLink>
          <NavLink to={"/shop"}>
            <MenuItem>Shop</MenuItem>
          </NavLink>
          <NavLink to={"/gallery"}>
            <MenuItem>Gallery</MenuItem>
          </NavLink>
          <NavLink to={"/events"}>
            <MenuItem>Inquire About an Event</MenuItem>
          </NavLink>
          <NavLink to={"/about"}>
            <MenuItem>Get To Know Her's</MenuItem>
          </NavLink>
        </MenuList>
      </Menu>

      <Spacer />
      <Heading as="h3" size="lg" color="gray.50" paddingInline={2}>
        Her's Floral Design
      </Heading>
      <Spacer />

      <Link href="https://www.instagram.com/hersfloraldesign/" isExternal>
        <IconButton
          ml={2}
          aria-label="Instagram Link"
          color="gray.50"
          isRound
          icon={<FaInstagram />}
        ></IconButton>
      </Link>
    </Flex>
  );
};

export default NavBar;
