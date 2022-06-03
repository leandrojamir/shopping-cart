const fetchItem = async (ItemID) => {
  try {
    const url = `https://api.mercadolibre.com/items/${ItemID}`;
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};
fetchItem('MLB1341706310');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
