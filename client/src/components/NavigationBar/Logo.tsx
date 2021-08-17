import { useNavigate } from "react-router-dom";
import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/favicon.png";
import React from "react";

export const Logo = () => {
  const navigate = useNavigate();
  const jumpToHome = () => {
    navigate("/");
  };

  return (
    <HStack cursor="pointer" onClick={jumpToHome}>
      <Image src={logo} boxSize={6} />
      <Text as="h1" color="contrastLabel" fontWeight="black" userSelect="none">
        Universe
      </Text>
    </HStack>
  );
};
