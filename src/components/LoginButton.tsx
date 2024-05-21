import { Button } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

interface ILoginButton {
  label: string;
  onClick: MouseEventHandler;
}

export const LoginButton = ({ label, onClick }: ILoginButton) => {
  return (
    <Button onClick={onClick} size="md" width="100%" colorScheme="purple">
      {label}
    </Button>
  );
};

export default LoginButton;
