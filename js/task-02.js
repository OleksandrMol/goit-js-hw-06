const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 
const ulList = document.getElementById('ingredients');
const fragment = document.createDocumentFragment();

for (const ingredient of ingredients) {
  const liItem = document.createElement('li');
  liItem.textContent = ingredient;
  liItem.className = "item";
  fragment.appendChild(liItem)
  console.dir(liItem)
}

ulList.appendChild(fragment)