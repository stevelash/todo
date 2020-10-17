const dateElement = document.getElementById('date');
const timeElement = document.getElementById('time')
const addButton = document.querySelector('.addButton');
var input = document.querySelector('.input');
const container = document.querySelector('.container');

// showDate
const options = { weekday: "long", month: "long", day: "numeric", year: "numeric"};
const today = new Date(Date.now());
dateElement.innerHTML = today.toLocaleDateString("en", options);
// showTime
const timeShow = { timeZone: "UTC", timeZoneName: "short"};
const time = new Date();
timeElement.innerHTML = "@" + " " + time.toLocaleTimeString("en");

class item{
  constructor(itemName){
    // create the item div
  this.createDiv(itemName);
  }
  createDiv(itemName){
    let input = document.createElement('input');
    input.value = itemName;
    input.disabled  = true;
    input.classList.add('item_input');
    input.type = "text";

    let itemBox = document.createElement('div');
    itemBox.classList.add('item');

    let addTime = document.createElement('p');
    addTime.innerHTML = new Date(Date.now()).toLocaleTimeString("en");

    let done = document.createElement('input');
    done.type = "checkbox";
    done.onclick = handleCheck;
    done.classList.add('done');

    let editButton = document.createElement('button');
    editButton.innerHTML = "Edit";
    editButton.classList.add('editButton');

    let removeButton = document.createElement('button');
    removeButton.innerHTML = "Remove";
    removeButton.classList.add('removeButton');

    container.appendChild(itemBox)
    itemBox.appendChild(addTime)
    itemBox.appendChild(done)
    itemBox.appendChild(input)
    itemBox.appendChild(editButton)
    itemBox.appendChild(removeButton)

    editButton.addEventListener('click', () => this.edit(input));
    removeButton.addEventListener('click', () => this.remove(itemBox));
  }
  edit(input){
    input.disabled = !input.disabled;
    input.focus()
  }
   remove(item){
    container.removeChild(item);
   }
}

function check(){
  if(input.value != ""){
    new item(input.value);
    input.value = "";
  }
}
addButton.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
  if(e.key == 'Enter') {
    check();
  }
});

function handleCheck(event) {
  const checkBox = event.target;
  const item = checkBox.parentNode;
  item.classList[checkBox.checked ? 'add' : 'remove']('is-done');
}
