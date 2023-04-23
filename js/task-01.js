const ulList = document.querySelectorAll('#categories li.item');
const itemLi = document.querySelectorAll('.item');

const count = ulList.length;
console.log(`Number of categories: ${count}`);

ulList.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`)
    console.log(`Elements:${item.lastElementChild.children.length}`) 
})
