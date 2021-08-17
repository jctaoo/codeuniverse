import { IconButton } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import React from "react";

export const MobileMenuButton = ({
  isOpen,
  toggle
}: {
  isOpen: boolean;
  toggle: () => void;
}) => {
  const displayStyleMobile = { md: "none", base: "flex" };

  return (
    <IconButton
      onClick={toggle}
      icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
      variant={"ghost"}
      aria-label={"Toggle Navigation"}
      display={displayStyleMobile}
      position="absolute"
      right="2"
      size="sm"
      color="contrastLabel"
      bg={isOpen ? "primarySelected" : "transparent"}
      _hover={{
        bg: isOpen ? "primarySelected" : "primaryHover"
      }}
      _active={{
        bg: "primarySelected"
      }}
    />
  );
};
