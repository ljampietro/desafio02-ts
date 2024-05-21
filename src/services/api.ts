const conta = {
  name: "jampietro",
  email: "lucas@whatever.com",
  password: "123456",
  balance: 2000.0,
  id: "1",
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 3000);
});
