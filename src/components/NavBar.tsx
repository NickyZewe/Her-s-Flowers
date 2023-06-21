import {
  Box,
  Flex,
  HStack,
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
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Flex
      p={5}
      h="1fr"
      overflow={"visible"}
      w="100%"
      backgroundColor={"#e2629d"}
      m={0}
      justify={"center"}
    >
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<IoFlowerOutline />}
          fontSize={"3xl"}
          color="gray.50"
          backgroundColor={"#e2629d"}
          outlineColor={"gray.50"}
          m={1}
          mr={3}
        />

        <MenuList
          backgroundColor={"#e2629d"}
          fontFamily={"open-sans"}
          fontSize={"lg"}
        >
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

      <NavLink to={"/"}>
        <Box>
          <HStack>
            <Heading
              as="h1"
              size={"2xl"}
              color="gray.50"
              paddingInline={2}
              fontFamily={"Dancing Script"}
              overflowWrap={"inherit"}
            >
              Her's Floral Design
              <Icon as={IoFlowerOutline} color={"#ffffff"} fontSize={"2xl"} />
            </Heading>
          </HStack>
        </Box>
      </NavLink>

      <Spacer />
      <Link href="https://www.instagram.com/hersfloraldesign/" isExternal>
        <IconButton
          m={1}
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
