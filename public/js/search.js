const searchKey = decodeURI(location.pathname.split('/').pop());
console.log(searchKey);
const searchSpanElement = document.querySelector('#search-key');
searchSpanElement.innerHTML = searchKey;

getProducts(searchKey).then(data => createProductCards(data,'.card-container' ))