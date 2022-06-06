const getSavedCartItems = () => {
  const getLocalStorage = localStorage.getItem('cartItems');
  return getLocalStorage;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
