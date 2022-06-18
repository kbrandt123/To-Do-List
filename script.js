"use strict";
const addButton = document.querySelector(".btn");
const inputBox = document.getElementById("input-task");
const containerTasks = document.querySelector(".tasks");

addButton.addEventListener("click", function (e) {
  e.preventDefault();

  let tasks = [];
  tasks.push(inputBox.value);

  inputBox.value = "";

  tasks.forEach(function (task) {
    if (!task) return;

    const taskHtml = document.createElement("li");
    const delBtn = document.createElement("button");
    const checkBox = document.createElement("input");
    taskHtml.textContent = task;
    taskHtml.appendChild(checkBox);
    checkBox.setAttribute("type", "checkbox");
    checkBox.classList.add("check");
    checkBox.addEventListener("click", function () {
      checkBox.checked
        ? taskHtml.classList.add("line")
        : taskHtml.classList.remove("line");
    });
    delBtn.textContent = "X";
    delBtn.classList.add("delete");
    taskHtml.appendChild(delBtn);
    delBtn.addEventListener("click", () => {
      taskHtml.remove();
    });

    containerTasks.appendChild(taskHtml);
  });
});
