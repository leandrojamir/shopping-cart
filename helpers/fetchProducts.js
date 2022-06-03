// 2. Crie uma listagem de produtos
// Implemente a função fetchProducts para retornar a listagem de produtos;
// Utilize o endpoint https://api.mercadolibre.com/sites/MLB/search?q=$QUERY, onde:
// O valor de $QUERY deve ser obrigatoriamente o termo computador;
// O retorno de produtos se encontra no array results;
const fetchProducts = async (computador) => {
  try {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${computador}`;
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();   
  console.log(data); 
  return data.results;
} catch (error) {
  return error;
}
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
