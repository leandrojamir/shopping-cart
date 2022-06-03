const saveCartItems = (teste6) => {
  localStorage.setItem('cartItems', teste6);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
