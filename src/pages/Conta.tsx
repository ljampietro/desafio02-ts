import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import CardInfo from "../components/CardInfo";
import { api } from "../services/api";

interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

const Conta = () => {
  const [userData, setUserData] = useState<null | UserData>();
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoggedIn } = useContext(AppContext);

  !isLoggedIn && navigate("/");

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    };
    getData();
  }, []);

  const actualData = new Date();

  if (userData && id !== userData.id) {
    navigate("/");
  }

  return (
    <Center background="#9413dc" height="100vh">
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        {userData === undefined || userData === null ? (
          <Center>
            <Spinner size="xl" color="white" />
          </Center>
        ) : (
          <>
            <CardInfo
              mainContent={`hello ${userData?.name}`}
              content={`${actualData}`}
            />
            <CardInfo
              mainContent="Saldo: "
              content={`R$ ${userData.balance}`}
            />
          </>
        )}
      </SimpleGrid>
    </Center>
  );
};

export default Conta;
