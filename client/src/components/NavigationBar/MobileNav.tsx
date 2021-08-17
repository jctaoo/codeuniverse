import { Button, VStack } from "@chakra-ui/react";
import React from "react";
import { useMatch, useNavigate } from "react-router-dom";

const MobileNavButton = ({
  to,
  active,
  toggle,
  children
}: React.PropsWithChildren<{
  to: string;
  toggle: () => void;
  active?: boolean;
}>) => {
  const navigate = useNavigate();
  const match = useMatch(to);
  const isActive = active || match;

  const jump = () => {
    navigate(to);
    toggle();
  };

  return (
    <Button
      className="nav-link"
      as="a"
      onClick={jump}
      size="sm"
      variant="ghost"
      color="primary"
    >
      {children}
    </Button>
  );
};

export const MobileNavigationItems = ({ toggle }: { toggle: () => void }) => {
  const displayStyleMobile = { md: "none", base: "flex" };

  return (
    <VStack
      position="absolute"
      bg="white"
      w="100%"
      display={displayStyleMobile}
    >
      <MobileNavButton toggle={toggle} to="/">
        Home
      </MobileNavButton>
      <MobileNavButton toggle={toggle} to="/preferences">
        Preferences
      </MobileNavButton>
    </VStack>
  );
};
