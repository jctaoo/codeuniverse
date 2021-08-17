import {
  Avatar,
  Collapse,
  Flex,
  HStack,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  useDisclosure
} from "@chakra-ui/react";
import React from "react";
import { MobileNavigationItems } from "./MobileNav";
import { DesktopNavigationItems } from "./DesktopNav";
import { Logo } from "./Logo";
import { MobileMenuButton } from "./MobileMenuButton";

const NavigationBar = () => {
  const displayStyleDesktop = { md: "flex", base: "none" };

  const {
    isOpen: mobileNavOpen,
    onOpen: openMobileNav,
    onClose: closeMobileNav
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
        as="nav"
        className="nav-bar"
        h="10"
        bg="primary"
        alignItems="center"
        position="sticky"
      >
        <Flex
          w="100%"
          h="100%"
          position="relative"
          alignItems="center"
          justifyContent={{ md: "space-between", base: "center" }}
        >
          <HStack paddingLeft={{ md: 7, base: 0 }}>
            <HStack>
              <Logo />
              <DesktopNavigationItems />
            </HStack>
          </HStack>
          <HStack paddingRight="7" display={displayStyleDesktop}>
            <Popover>
              <PopoverTrigger>
                <Avatar
                  bg="primarySelected"
                  src="https://bit.ly/ryan-florence"
                  size="sm"
                />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Confirmation!</PopoverHeader>
                <PopoverBody>
                  Are you sure you want to have that milkshake?
                </PopoverBody>
              </PopoverContent>
            </Popover>
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
