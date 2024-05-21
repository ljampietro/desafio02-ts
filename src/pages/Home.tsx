import { Box, Center, Flex, Heading, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import { LoginButton } from "../components/LoginButton";
import { login } from "../services/login";
import { changeLocalStorage } from "../services/storage";
const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const validateUser = async (email: string, password: string) => {
    const loggedIn = await login(email, password);

    if (!loggedIn) {
      return alert("Email ou senha inválidos");
    }
    setIsLoggedIn(true);
    changeLocalStorage({ login: true });
    navigate("/conta/1");
  };

  return (
    <Box>
      <Card>
        <Flex direction="column" p="5" rounded="10" backgroundColor="white">
          <Heading size="md" alignSelf="center" mb="2">
            Faça o login
          </Heading>
          <Input
            borderColor="#9413dc"
            placeholder="Type your Email"
            _placeholder={{ color: "#9413dc" }}
            variant="outline"
            mb="3"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            borderColor="#9413dc"
            placeholder="Type your Password"
            _placeholder={{ color: "#9413dc" }}
            variant="outline"
            mb="6"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Center>
            <LoginButton
              label={"Login"}
              onClick={() => validateUser(email, password)}
            />
          </Center>
        </Flex>
      </Card>
    </Box>
  );
};

export default Home;
