require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('Teste se fetchProducts é uma função;', () => {
    expect(typeof fetchProducts === 'function').toBe(true);
  });
  it('Executa fetchProducts com "computador" e testa se fetch foi chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it('Ao chamar fetchProducts com "computador", ver se fetch utiliza endpoint abaixo', async () => {
    await fetchProducts('computador');
    const endPoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    expect(fetch).toHaveBeenCalledWith(endPoint);
  });
  it('Testa fetchProducts com "computador", se é igual ao objeto computadorSearch', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
 });
  it('Ao chamar fetchProducts sem argumento, retorna um erro', async () => {
    expect(await fetchProducts()).toEqual(new Error('You must provide an url'));
  });
});