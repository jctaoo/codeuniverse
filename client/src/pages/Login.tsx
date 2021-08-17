import {
  HStack,
  Img,
  VStack,
  Text,
  InputGroup,
  Input,
  useBoolean,
  InputRightElement,
  Button,
  Container,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import posterImage from "../assets/poster.png";

function LoginPage() {
  const [showPass, { toggle: toggleShowPass }] = useBoolean(false);

  return (
    <Container
      as="div"
      id="login-page"
      maxW="container.lg"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <HStack>
        <Img
          src={posterImage}
          height="100vh"
          objectFit="contain"
          flex="3"
          display={["none", "none", "block"]}
        />
        <Flex flex="5" alignItems="center" justifyContent="center">
          <VStack alignItems="start" spacing="30px" display="inline-flex">
            <Text
              fontWeight="black"
              fontSize="40"
              color="brandPrimary"
              lineHeight="3rem"
            >
              Welcome <br />
              Codeuniverse
            </Text>
            <VStack spacing="3">
              <Input
                placeholder="Email or Username"
                borderColor="brandPrimary"
                size="lg"
              ></Input>
              <VStack alignItems="start">
                <InputGroup size="lg">
                  <Input
                    pr="4.5rem"
                    type={showPass ? "text" : "password"}
                    placeholder="Enter password"
                    borderColor="brandPrimary"
                    size="lg"
                  />
                  <InputRightElement>
                    <IconButton
                      aria-label="Toggle password visibility"
                      variant="ghost"
                      size="sm"
                      onClick={toggleShowPass}
                      colorScheme="brandScheme"
                      icon={
                        showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
                      }
                    />
                  </InputRightElement>
                </InputGroup>
                <Button variant="link" colorScheme="brandScheme">
                  Forget Passworld ?
                </Button>
              </VStack>
            </VStack>
            <HStack spacing="5">
              <Button colorScheme="brandScheme" size="lg">
                Log in
              </Button>
              <Button
                colorScheme="brandScheme"
                variant="outline"
                borderWidth="2px"
                size="lg"
              >
                Sign up
              </Button>
            </HStack>
          </VStack>
        </Flex>
      </HStack>
    </Container>
  );
}

export { LoginPage };
