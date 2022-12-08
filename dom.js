var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//Form submit event
form.addEventListener('submit', addItem);

//Delete event
itemList.addEventListener('click', removeItem);

//Add Item
function addItem(e){
    e.preventDefault();
    
    //get input value
    var newItem = document.getElementById('item').value;
    //create new li element
    var li = document.createElement('li');
    //Add class
    li.className = 'list-group-item';
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    
    //Create delete element
    var deleteBtn = document.createElement('button');
    //Add class to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //Append text node to dlete button
    deleteBtn.appendChild(document.createTextNode('X'));
    //append delete to li
    li.appendChild(deleteBtn);
    //append li to list
    itemList.appendChild(li);

}

//Remove Item
function removeItem(e){
   if(e.target.classList.contains('delete')){
    if(confirm('Are you sure')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }
   } 
}