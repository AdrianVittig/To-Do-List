// CLOCK
const clock = document.querySelector(".clock");

let intervalId;

function getTime() {
  const date = new Date();
  clock.textContent = date.toLocaleTimeString("en-US", { hour12: false });
}

setInterval(getTime, 1000);

// TASKS
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.querySelector(".add-task-btn");
const recentTasksContainer = document.querySelector(".recent-tasks");
const clearAllTasks = document.querySelector(".delete-all-tasks-btn");
const tasksArr = [];

function addTaskToArray() {
  addTaskBtn.addEventListener("click", function () {
    displayTasksInAList();
    for (let i = 0; i < tasksArr.length; i++) {
      console.log(tasksArr[i]);
    }
  });
}

function displayTasksInAList() {
  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");

  const taskTime = document.createElement("p");
  taskTime.classList.add("task-time");
  const date = new Date();
  taskTime.textContent = `${date.toLocaleTimeString("en-US", {
    hour12: false
  })} `;

  const taskItself = document.createElement("p");
  taskItself.classList.add("task-itself");
  taskItself.textContent = `${taskInput.value}`;

  const isDone = document.createElement("input");
  isDone.setAttribute("type", "checkbox");
  isDone.classList.add("is-done");

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-all-tasks-btn");
  deleteBtn.textContent = "Clear";
  deleteBtn.addEventListener("click", function () {
    const index = tasksArr.indexOf(taskItem);
    tasksArr.splice(index, 1);
    recentTasksContainer.removeChild(taskItem);
  });

  taskItem.appendChild(taskTime);
  taskItem.appendChild(taskItself);
  taskItem.appendChild(isDone);
  taskItem.appendChild(deleteBtn);

  recentTasksContainer.appendChild(taskItem);

  tasksArr.push(taskItem);
  taskInput.value = "";
}

addTaskToArray();
