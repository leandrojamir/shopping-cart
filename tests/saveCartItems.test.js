const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

// 6. (TDD) Desenvolva testes de no mínimo 75% de cobertura total e 100% da função saveCartItems
describe('3 - Teste a função saveCartItems', () => {
  beforeEach(() => {
    saveCartItems('<ol><li>Item</li></ol>');
  });
  it('Usa saveCartItems c/ <ol><li>Item</li></ol>, ver se localStorage.setItem é chamado', () => {
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it('Ver se é chamado c/ 2 parâmetros, primeiro "cartItems" e o segundo o valor passado', () => {
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>');
  });
});