import React, { PropsWithChildren } from "react";
import { Container, HStack, VStack, Text } from "@chakra-ui/react";
import { useMatch, useNavigate } from "react-router-dom";
import { AiOutlineDashboard, AiOutlineProject } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { VscPackage, VscGear } from "react-icons/vsc";
import { BasePage } from ".";

function AdminSideNavButton({
  children,
  to,
  active,
  icon,
}: {
  children: string;
  to: string;
  active?: boolean;
  icon?: React.ReactElement;
}) {
  const navigate = useNavigate();

  const match = useMatch(to);
  const isActive = active || match;
  console.log(to, match);

  const jump = () => {
    navigate(to);
  };

  return (
    <HStack
      as="span"
      className="side-nav-item"
      paddingTop={2}
      paddingBottom={2}
      bg={isActive ? "lightenSelected" : "transparent"}
      _hover={{
        bg: isActive ? "lightenSelected" : "lightenHover",
      }}
      _active={{
        bg: "lightenSelected",
      }}
      w="100%"
      cursor="pointer"
      paddingLeft={5}
      paddingRight={5}
      onClick={jump}
    >
      {!!icon ? icon : <></>}
      <Text fontWeight="semibold" userSelect="none">
        {children}
      </Text>
    </HStack>
  );
}

function AdminLayout({ children }: PropsWithChildren<{}>) {
  return (
    <HStack
      as="div"
      className="admin-layout"
      w="100%"
      h="100%"
      marginTop="0"
      flex={1}
      alignItems="start"
    >
      <VStack
        className="side-nav"
        w="40"
        h="100%"
        bg="lightenBackground"
        margin="0"
        spacing="0"
      >
        {/* TODO: unexpected behavior when prop to is relative path.
        check: https://github.com/remix-run/react-router/issues/7954 */}
        <AdminSideNavButton icon={<AiOutlineDashboard />} to="/admin/dashboard">
          Dashboard
        </AdminSideNavButton>
        <AdminSideNavButton icon={<FiUsers />} to="/admin/users">
          Users
        </AdminSideNavButton>
        <AdminSideNavButton icon={<AiOutlineProject />} to="/admin/projects">
          Project
        </AdminSideNavButton>
        <AdminSideNavButton icon={<VscPackage />} to="/admin/containers">
          Containers
        </AdminSideNavButton>
        <AdminSideNavButton icon={<VscGear />} to="/admin/preferences">
          Preferences
        </AdminSideNavButton>
      </VStack>
      <BasePage>{children}</BasePage>
    </HStack>
  );
}

export { AdminLayout };
