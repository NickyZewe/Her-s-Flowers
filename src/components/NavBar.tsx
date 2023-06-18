import {
  Flex,
  Heading,
  Icon,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from "@chakra-ui/react";
import "@fontsource/dancing-script/600.css";
import { FaInstagram } from "react-icons/fa";
import { IoFlowerOutline } from "react-icons/io5";
import { RiHandbagLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Flex
      p={5}
      h="1fr"
      overflow={"hidden"}
      w="100%"
      backgroundColor={"#e2629d"}
      m={0}
    >
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<IoFlowerOutline />}
          fontSize={"3xl"}
          color="gray.50"
          backgroundColor={"#e2629d"}
          outlineColor={"gray.50"}
        />

        <MenuList backgroundColor={"#e2629d"} fontFamily={"open-sans"}>
          <NavLink to={"/"}>
            <MenuItem backgroundColor={"#e2629d"} color="gray.50">
              Home
            </MenuItem>
          </NavLink>
          <NavLink to={"/shop"}>
            <MenuItem backgroundColor={"#e2629d"} color="gray.50">
              Shop
            </MenuItem>
          </NavLink>
          <NavLink to={"/gallery"}>
            <MenuItem backgroundColor={"#e2629d"} color="gray.50">
              Gallery
            </MenuItem>
          </NavLink>
          <NavLink to={"/events"}>
            <MenuItem backgroundColor={"#e2629d"} color="gray.50">
              Inquire About an Event
            </MenuItem>
          </NavLink>
        </MenuList>
      </Menu>

      <Spacer />
      <Heading
        as="h1"
        size={"2xl"}
        color="gray.50"
        paddingInline={2}
        fontFamily={"Dancing Script"}
      >
        Her's Floral Design
      </Heading>
      <Icon as={IoFlowerOutline} color={"#ffffff"} fontSize={"2xl"} />
      <Spacer />

      <Link href="https://www.instagram.com/hersfloraldesign/" isExternal>
        <IconButton
          ml={2}
          aria-label="Instagram Link"
          isRound
          icon={<FaInstagram />}
          fontSize={"2xl"}
          color="gray.50"
          backgroundColor={"#e2629d"}
          outlineColor={"gray.50"}
        ></IconButton>
      </Link>
    </Flex>
  );
};

export default NavBar;
