import { HamburgerIcon } from "@chakra-ui/icons";
import {
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
import { NavLink } from "react-router-dom";
import { IoFlowerOutline } from "react-icons/io5";
import { RiHandbagLine } from "react-icons/ri";

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
        <MenuButton
          as={IconButton}
          icon={<IoFlowerOutline />}
          color="gray.50"
          backgroundColor={"#ff8acb"}
          outlineColor={"gray.50"}
        />

        <MenuList backgroundColor={"#ff8acb"}>
          <NavLink to={"/"}>
            <MenuItem backgroundColor={"#ff8acb"} color="gray.50">
              Home
            </MenuItem>
          </NavLink>
          <NavLink to={"/shop"}>
            <MenuItem backgroundColor={"#ff8acb"} color="gray.50">
              Shop
            </MenuItem>
          </NavLink>
          <NavLink to={"/gallery"}>
            <MenuItem backgroundColor={"#ff8acb"} color="gray.50">
              Gallery
            </MenuItem>
          </NavLink>
          <NavLink to={"/events"}>
            <MenuItem backgroundColor={"#ff8acb"} color="gray.50">
              Inquire About an Event
            </MenuItem>
          </NavLink>
          <NavLink to={"/about"}>
            <MenuItem backgroundColor={"#ff8acb"} color="gray.50">
              Get To Know Her's
            </MenuItem>
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
          isRound
          icon={<FaInstagram />}
          color="gray.50"
          backgroundColor={"#ff8acb"}
          outlineColor={"gray.50"}
        ></IconButton>
      </Link>

      <IconButton
        ml={4}
        aria-label="Cart"
        isRound
        icon={<RiHandbagLine />}
        color="gray.50"
        backgroundColor={"#ff8acb"}
        outlineColor={"gray.50"}
      ></IconButton>
    </Flex>
  );
};

export default NavBar;
