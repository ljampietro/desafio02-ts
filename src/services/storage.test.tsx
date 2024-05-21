import {
  changeLocalStorage,
  createLocalStorage,
  getAllLocalStorage,
} from "./storage";

const dioBank = {
  login: false,
};

describe("storage", () => {
  it("Deve retornar o onjeto no localStorage com a chave diobank", () => {
    const mockGetItem = jest.spyOn(Storage.prototype, "getItem");
    getAllLocalStorage();
    expect(mockGetItem).toHaveBeenCalledWith("diobank");
  });

  it("Deve Criar o objeto no localStorage", () => {
    const mockSetItem = jest.spyOn(Storage.prototype, "setItem");
    createLocalStorage();
    expect(mockSetItem).toHaveBeenCalledWith(
      "diobank",
      JSON.stringify(dioBank)
    );
  });

  it("Deve alterar o valor do objeto no localStorage", () => {
    const mockSetItem = jest.spyOn(Storage.prototype, "setItem");
    changeLocalStorage(dioBank);
    expect(mockSetItem).toHaveBeenCalledWith(
      "diobank",
      JSON.stringify(dioBank)
    );
  });
});
