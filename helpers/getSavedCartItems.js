const getSavedCartItems = () => {
  const getLocalStorage = localStorage.getItem('paraTeste7');
  return getLocalStorage;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
