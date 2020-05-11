const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

//declare counters
var itemCount = 0;
var uncheckedCount = 0;

function newTodo() {
    
  //create a list and set attribute to todo_item
  var li = document.createElement('LI');
  li.setAttribute("class", "todo-container");

  //create checkbox and text input field, set attributes
  var checkBox = document.createElement('INPUT');
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("class", "todo-checkbox");
  
  var item = document.createElement("INPUT");
  item.setAttribute("type", "text");
  item.setAttribute("class", "todo-text");

  //create delete button, and set attributes
  var deleteButton = document.createElement('input');
  deleteButton.type = "button";
  deleteButton.value = "Delete";
  deleteButton.setAttribute("class", "todo-delete");
  
  //apend checkbox, text field, and delete button to li
  li.appendChild(checkBox);
  li.appendChild(item);
  li.appendChild(deleteButton);

  //append li to list
  list.appendChild(li);
  
  //add 1 to item count and display
  itemCount++;
  uncheckedCount++;
  itemCountSpan.innerHTML = itemCount;
  uncheckedCountSpan.innerHTML = uncheckedCount;

  //checkbox and delete button events
  checkBox.onclick = (event) => {this.boxClick(event)}
  deleteButton.onclick = (event) => { this.deleteItem(event) }
}
function boxClick(e){
  
  if (e.target.checked){
    uncheckedCount--;
  }
  else{
    uncheckedCount++;
  }

  uncheckedCountSpan.innerHTML = uncheckedCount;
}
function deleteItem(e){
  if (!e.target.checked){
    uncheckedCount--;
  }
  
  itemCount--;
  
  itemCountSpan.innerHTML = itemCount;
  uncheckedCountSpan.innerHTML = uncheckedCount;

  e.target.parentNode.remove();
}

