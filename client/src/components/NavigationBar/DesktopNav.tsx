import React from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { Button, HStack } from "@chakra-ui/react";

const DesktopNavButton = ({
  to,
  active,
  children
}: React.PropsWithChildren<{
  to: string;
  active?: boolean;
}>) => {
  const navigate = useNavigate();
  const match = useMatch(to);
  const isActive = active || match;

  const jump = () => {
    navigate(to);
  };

  return (
    <Button
      className="nav-link"
      as="a"
      onClick={jump}
      size="sm"
      variant="ghost"
      color="contrastLabel"
      bg={isActive ? "primarySelected" : "transparent"}
      _hover={{
        bg: isActive ? "primarySelected" : "primaryHover"
      }}
      _active={{
        bg: "primarySelected"
      }}
    >
      {children}
    </Button>
  );
};

export const DesktopNavigationItems = () => {
  const displayStyleDesktop = { md: "flex", base: "none" };

  return (
    <HStack display={displayStyleDesktop}>
      <DesktopNavButton to="/">Home</DesktopNavButton>
      <DesktopNavButton to="/preferences">Preferences</DesktopNavButton>
    </HStack>
  );
};
