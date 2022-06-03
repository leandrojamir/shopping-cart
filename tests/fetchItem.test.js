require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Testar se fetchItem é uma função', () => {
    expect(typeof fetchItem === 'function').toBe(true);
  });
  it('Executar a função fetchItem com "MLB1615760527" e testar se fetch foi chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  it('Ao chamar fetchItem com "MLB1615760527", ver se fetch utiliza endpoint abaixo', async () => {
    await fetchItem('MLB1615760527');
    const endPoint = 'https://api.mercadolibre.com/items/MLB1615760527';
    expect(fetch).toHaveBeenCalledWith(endPoint);
  });
  it('Ver se retorno da função fetchItem com "MLB1615760527" é igual ao objeto item', async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  });
  it('Ao chamar fetchItem sem argumento, retorna um erro', async () => {
    expect(await fetchItem()).toEqual(new Error('You must provide an url'));
    }); 
}); 