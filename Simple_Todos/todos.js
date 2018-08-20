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
const todos = [];

(function() {
  main();
})();
function init() {
  taskName.textContent = "ADD TODO";
}

function list_template_gen(text, state, date, icon) {
  return `<li class="list-group-item list-group-item-info">
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
              <button type="button" class="btn btn-success">${icon}</button>
              <button type="button" class="btn btn-warning"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
              <button type="button" class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i></button>
          </div>
      </div>
  </div>

</li>`;
}

function addItems() {
  todos.unshift({
    task: addNew.value,
    state: "CREATED",
    date: new Date().toUTCString(),
    icon: doneIcon[0]
  });
  addNew.value = "";
  showItems();
}
function showItems() {
  let html = "";
  for (let i = 0; i < todos.length; i++) {
    html += list_template_gen(
      todos[i].task,
      todos[i].state,
      todos[i].date,
      todos[i].icon
    );
  }
  listItems.innerHTML = html;
}
function main() {
  init();
}
addNew.addEventListener("keypress", e => {
  let key = e.which || e.keyCode;
  if (key === 13) {
    addItems();
  }
});
