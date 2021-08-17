import React, { PropsWithChildren } from "react";
import { VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { NavigationBar } from "../components";
import { BasePage } from "./BasePage";

// TODO: react component type
function MainLayout({ subLayout }: { subLayout?: React.FC }) {
  const Sub = !!subLayout
    ? React.createElement(subLayout, null, <Outlet />)
    : undefined;

  return (
    <VStack as="div" className="main-layout" h="100%" w="100%" spacing="0">
      <NavigationBar />
      {!!Sub ? Sub : <BasePage><Outlet /></BasePage>}
    </VStack>
  );
}

export { MainLayout };
