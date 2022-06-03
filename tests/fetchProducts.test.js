require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  // 1. (TDD) Desenvolva testes de no mínimo 25% de cobertura total e 100% da função fetchProducts
  it('Teste se fetchProducts é uma função;', () => {
    expect(typeof fetchProducts === 'function').toBe(true);
  });
});
