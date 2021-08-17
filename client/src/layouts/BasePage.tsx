import { Container } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

function BasePage({ children }: PropsWithChildren<{}>) {
  return <Container className="base-page"  maxW="container.lg">{children}</Container>;
}

export { BasePage };
