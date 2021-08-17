import {
  Avatar,
  Collapse,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { MobileNavigationItems } from "./MobileNav";
import { DesktopNavigationItems } from "./DesktopNav";
import { Logo } from "./Logo";
import { MobileMenuButton } from "./MobileMenuButton";
import { useNavigate } from "react-router-dom";

const NavMenuItem = ({ children, to }: { children: string; to: string }) => {
  const navigate = useNavigate();
  const jump = () => {
    navigate(to);
  }
  
  return <MenuItem onClick={jump}>{children}</MenuItem>;
};

const NavigationBar = () => {
  const displayStyleDesktop = { md: "flex", base: "none" };

  const {
    isOpen: mobileNavOpen,
    onOpen: openMobileNav,
    onClose: closeMobileNav,
  } = useDisclosure();

  const toggleMobileNav = () => {
    if (mobileNavOpen) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  };

  return (
    <>
      <Flex
        w="100%"
        as="nav"
        className="nav-bar"
        h="10"
        bg="primary"
        alignItems="center"
      >
        <Flex
          w="100%"
          h="100%"
          position="relative"
          alignItems="center"
          justifyContent={{ md: "space-between", base: "center" }}
        >
          <HStack paddingLeft={{ md: 7, base: 0 }}>
            <HStack spacing={5}>
              <Logo />
              <DesktopNavigationItems />
            </HStack>
          </HStack>
          <HStack paddingRight="7" display={displayStyleDesktop}>
            <Menu closeOnBlur>
              <MenuButton>
                <Avatar
                  bg="primarySelected"
                  src="https://bit.ly/ryan-florence"
                  size="sm"
                />
              </MenuButton>
              <MenuList>
                <MenuGroup>
                  <NavMenuItem to="/preferences">Preferences</NavMenuItem>
                  <NavMenuItem to="/admin/dashboard">Admin</NavMenuItem>
                  <MenuItem>Sign Out</MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup>
                  <MenuItem>Help</MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </HStack>
          <MobileMenuButton isOpen={mobileNavOpen} toggle={toggleMobileNav} />
        </Flex>
      </Flex>
      <Collapse in={mobileNavOpen} animateOpacity>
        <MobileNavigationItems toggle={toggleMobileNav} />
      </Collapse>
    </>
  );
};

export { NavigationBar };
