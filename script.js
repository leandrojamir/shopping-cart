const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

// 8. Carregue o carrinho de compras ao iniciar a página
// é mais fácil criar função para salvar localStorage e chamar ao final de getElement e cartItemClickListener
// uma vez que getSavedCartItems não pode adicionar no localStorage

// cartItems estava declarada dentro de getElement gerando erro na linha 19 com cartItems in promisse
const cartItems = document.querySelector('.cart__items'); 

const saveToLocalStorage = () => {
  const teste6 = cartItems.innerHTML; 
  console.log(teste6);
  saveCartItems(teste6); 
  getSavedCartItems(); 
};

// 5. Remova o item do carrinho de compras ao clicar nele

const cartItemClickListener = (event) => {
  // Utilize a função cartItemClickListener(event) para implementar a lógica necessária para remover o item do carrinho.
  event.target.remove();
  saveToLocalStorage();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// 4. Adicione o produto ao carrinho de compras
// sku: é o campo id retornado pela API;
// name: é o campo title retornado pela API;
// image: é o campo thumbnail retornado pela API.
// Obs: salePrice é o campo price retornado pela API.
const getElement = async (sku) => {
  const getFetchItem = await fetchItem(sku);
  const object = { sku: getFetchItem.id, name: getFetchItem.title, salePrice: getFetchItem.price };
  const appendItem = createCartItemElement(object);
  cartItems.appendChild(appendItem);
  saveToLocalStorage();
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  // Cada produto na página HTML possui um botão com o nome Adicionar ao carrinho e, ao clicar nesse botão, 
  // você deve realizar uma requisição que vai retornar todos os detalhes de um produto.
  const button = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  button.addEventListener('click', () => getElement(sku));
  section.appendChild(button);

  return section;
};

// Adicione cada elemento retornado da função createProductItemElement(product) como filho do elemento 
// <section class="items">.
// Obs: Utilize as variáveis fornecidas no código, elas devem se referir aos seguintes campos:
// sku: é o campo id retornado pela API;
// name: é o campo title retornado pela API;
// image: é o campo thumbnail retornado pela API.
const getItens = async () => {
  const getFetchProducts = await fetchProducts('computador');
  console.log(getFetchProducts);
  getFetchProducts.forEach((item) => {
    // eslint-disable-next-line max-len
    const appendProducts = createProductItemElement({ 
      sku: item.id, 
      name: item.title, 
      image: item.thumbnail });
    const setFetchPoducts = document.querySelector('.items');
    setFetchPoducts.appendChild(appendProducts);
  });  
};

// const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

// adicionando para parte dois item 8
const cleanClickCartItem = () => {
  const cleanClick = document.querySelectorAll('.cart__item');
  cleanClick.forEach((click) => click.addEventListener('click', cartItemClickListener));
};

window.onload = () => {
  getItens();
  cartItems.innerHTML = getSavedCartItems();
  cleanClickCartItem();
};
