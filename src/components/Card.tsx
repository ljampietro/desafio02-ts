import { Center, Flex, Heading, Input } from "@chakra-ui/react";
import { login } from "../services/login";
import { LoginButton } from "./LoginButton";

export const Card = () => {
  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      backgroundColor="#9413dc"
    >
      <Flex direction="column" p="5" rounded="10" backgroundColor="gray.300">
        <Heading alignSelf="center" mb="6">
          Faça o login
        </Heading>
        <Input
          borderColor="#9413dc"
          placeholder="Type your Email"
          _placeholder={{ color: "#9413dc" }}
          variant="outline"
          mb="3"
          type="email"
        />
        <Input
          borderColor="#9413dc"
          placeholder="Type your Password"
          _placeholder={{ color: "#9413dc" }}
          variant="outline"
          mb="6"
          type="password"
        />
        <Center>
          <LoginButton label={"Login"} event={login} />
        </Center>
      </Flex>
    </Flex>
  );
};
