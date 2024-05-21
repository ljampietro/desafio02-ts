import { login } from "./login";

describe("login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;
  const mockEmail = "lucas@whatever.com";
  const mockPass = "123456";

  it("Deve exibir um alert com boas vindas", async () => {
    const response = await login(mockEmail, mockPass);
    expect(response).toBeTruthy();
  });

  it("Deve exibit um erro caso email ou senha sejam inválido", async () => {
    const response = await login("email@invalido", "654321");
    expect(response).toBeFalsy();
  });
});
