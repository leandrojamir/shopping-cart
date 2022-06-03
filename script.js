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

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

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
    const appendProducts = createProductItemElement({ sku: item.id, name: item.title, image: item.thumbnail });
    const setFetchPoducts = document.querySelector('.items');
    setFetchPoducts.appendChild(appendProducts);
  });  
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  // coloque seu código aqui
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

window.onload = () => {
  getItens();
 };
