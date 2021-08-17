import React from "react";
import { Outlet } from "react-router-dom";
import { NavigationBar } from "../components";

function MainLayout({ admin = false }: { admin?: boolean }) {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
}

export { MainLayout };
