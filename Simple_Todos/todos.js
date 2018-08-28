"use strict";
let done = document.querySelector(".btn-success");
let taskName = document.querySelector("#taskName");
let actionState = document.querySelector("#actionState");
let date = document.querySelector("#date");
let listItems = document.querySelector(".list-group");
let addNew = document.querySelector("#inputTodo");
let doneIcon = [
  `<i class="fa fa-check-square-o" aria-hidden="true"></i>`,
  `<i class="fa fa-undo" aria-hidden="true"></i>`
];
let curIndex;
let updateState = false;
const todos = [];

(function() {
  main();
})();
function init() {
  taskName.textContent = "ADD TODO";
  addNew.value = "";
}

function list_template_gen(text, state, date, index, icon, _isDone) {
  // let className = _isDone ? "strike" : "";

  return `<li class="list-group-item list-group-item-info" id = "${index}">
  <div class="row">
      <div class="col-md-9">
          <div class="row">
              <div class="col-sm-8">
                  ${text}
              </div>
              <div class="col-sm-4">
                  <span class="badge badge-pill badge-primary">${state}</span>
                  <span class="badge badge-pill badge-secondary">${date}</span>
              </div>
          </div>


      </div>
      <div class="col-md-3">
          <div class="btn-group" role="group">
              <button type="button" class="btn btn-success" onClick = "taskDone(this.parentNode.parentNode.parentNode.parentElement.id)">${icon}</button>
              <button type="button" class="btn btn-warning"onClick = "taskEdit(this.parentNode.parentNode.parentNode.parentElement.id)"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
              <button type="button" class="btn btn-danger" onClick = "taskDel(this.parentNode.parentNode.parentNode.parentElement.id)"><i class="fa fa-trash" aria-hidden="true"></i></button>
          </div>
      </div>
  </div>

</li>`;
}

function addItems() {
  todos.unshift({
    id: todos.length + 1,
    task: addNew.value,
    state: "CREATED",
    date: new Date().toUTCString(),
    icon: doneIcon[0],
    isDone: false
  });

  showItems();
}
function showItems() {
  init();
  let html = "";
  for (let i = 0; i < todos.length; i++) {
    html += list_template_gen(
      todos[i].task,
      todos[i].state,
      todos[i].date,
      todos[i].id,
      todos[i].icon,
      todos[i].isDone
    );
  }
  listItems.innerHTML = html;
}

function main() {
  init();
  showItems();
}
addNew.addEventListener("keypress", e => {
  let key = e.which || e.keyCode;
  if (key === 13) {
    if (!updateState) {
      addItems();
    } else {
      updateState = false;
      todos[curIndex].task = addNew.value;
      todos[curIndex].state = "UPDATED";
      todos[curIndex].date = new Date().toUTCString();
      showItems();
    }
  }
});
function getIndex(parElem) {
  // console.log(parElem.parentElement.id);
  console.log(parElem);
}

function taskDone(id) {
  let element = document.getElementById(`${id}`);
  element.classList.toggle("strike");
}
function taskDel(_id) {
  let removeIndex = todos.map(item => item.id).indexOf(parseInt(_id, 10));
  todos.splice(removeIndex, 1);
  showItems();
}
function taskEdit(_id) {
  updateState = true;
  taskName.textContent = "EDIT TODO";
  curIndex = todos.map(item => item.id).indexOf(parseInt(_id, 10));
  addNew.value = todos[curIndex].task;
}
