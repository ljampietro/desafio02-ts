import { Flex } from "@chakra-ui/react";

export const Card = ({ children }: any) => {
  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      backgroundColor="#9413dc"
    >
      {children}
    </Flex>
  );
};
