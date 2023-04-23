const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
  
];
 
const ulList = document.getElementById('ingredients');

const ing = ingredients.map((ingredient)=>`<li>${ingredient}</li>`).join('')

ulList.insertAdjacentHTML('afterbegin', ing)