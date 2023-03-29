const ulList = document.querySelectorAll('#categories li.item');
const itemLi = document.querySelectorAll('.item');

const count = ulList.length;
console.log(`Number of categories: ${count}`);

ulList.forEach(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}`)
    console.log(`Elements:${item.querySelectorAll('li').length}`) 
})
