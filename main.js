const jsxDevRuntime = require("react/jsx-dev-runtime");

document.addEventListener("DOMContentLoaded", loadTask);

function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();
  if (!taskText) {
    return;
  }
  
  let li = document.createElement("li");
  li.innerHTML = `<span>${taskText}</span><button onclick="removeTask(this)>X</button>`;
  document.getElementById("taskList").appendChild(li);
  saveTask(taskText);
  input.value = "";
}

function removeTask(button) {
  button.parentElement.remove();
}

function toggleComplete(task) {
  task.classList.toggle("completed");
}

function saveTask(taskText) {
  let tasks = loadTask();
  tasks.push(taskText);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  console.log("Tasks", tasks);
}

function getTaskFromStorage() {
  try {
    let tasks = JSON.parse(localStorage.getItem("tasks") || []);
    console.log("loadTask", tasks);
  } catch (error) {
    tasks = [];
    console.log(error);
  }
  // console.log('loadTask', tasks);
  return tasks;
}

function loadTask() {
    let tasks = getTaskFromStorage();
    tasks.forEach((task) => {
        let li = document.createElement("li");
        li.innerHTML = `<span>${task}</span><button onclick="removeTask(this)>X</button>`;
        document.getElementById("taskList").appendChild(li);  
    });
}
