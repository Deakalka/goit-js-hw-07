const categoriesList = document.getElementById('categories');

const categoryItems = categoriesList.getElementsByClassName('item');

console.log('Number of categories:', categoryItems.length);

Array.from(categoryItems).forEach(function(categoryItem) {
    let categoryName = categoryItem.querySelector('h2').textContent;
    let categoryElements = categoryItem.querySelectorAll('ul > li');
    console.log('Category:', categoryName);
    console.log('Elements:', categoryElements.length);
  });