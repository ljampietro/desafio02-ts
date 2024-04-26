import { Button } from "@chakra-ui/react";

interface ILoginButton {
  label: string;
  event: () => void;
}

export const LoginButton = ({ label, event }: ILoginButton) => {
  return (
    <Button onClick={event} size="md" width="100%" colorScheme="purple">
      {label}
    </Button>
  );
};
