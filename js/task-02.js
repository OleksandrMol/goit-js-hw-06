const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',  
];
 
const ulList = document.getElementById('ingredients');

const ing = ingredients.map((ingredient) => {
 const li = document.createElement('li');
  li.classList.add("item");
  li.textContent = ingredient;
  return li
})

ulList.append(...ing);