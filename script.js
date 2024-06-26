document.getElementById('addItemButton').addEventListener('click',addItem);

function addItem(){
    //to get value from input
    const itemText = document.getElementById('itemInput').value;
    const selectedDay = document.getElementById('daySelect').value;
    const selectedMeal = document.getElementById('mealType').value;
    if (itemText.trim() !== ''){
        const listItem = document.createElement('li');
        listItem.textContent = `${itemText} - ${selectedDay} - ${selectedMeal}`;
        
       // listItem.classList.add(item)
       document.getElementById('itemList').appendChild(listItem);
       document.getElementById('itemInput').value = '';
    }else{
        alert('Please enter the item to add');
    }

}
