import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { changeLocalStorage } from "../services/storage";
import { AppContext } from "./AppContext";

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();
  const logout = () => {
    changeLocalStorage({ login: false });
    setIsLoggedIn(false);
    navigate("/");
  };
  return (
    <Flex background="black" p="5">
      <Box>
        <Center
          color="#9413dc"
          fontSize="32"
          fontFamily="cursive"
          fontWeight="extrabold"
          letterSpacing="wider"
        >
          Dio Bank
        </Center>
      </Box>
      {isLoggedIn && (
        <>
          <Spacer />
          <Button onClick={() => logout()}>Sair</Button>
        </>
      )}
    </Flex>
  );
};
