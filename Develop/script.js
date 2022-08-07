//current day
var currentDay = moment().format("MMM Do YY");
var momentDay;
document.getElementById("momentDay").textContent = currentDay;

//past,present,future color change
var currentHour = moment().hour();
function relativeTime() {
  for (var i = 1; i < 10; i++) {
    var ii = i + 8;
    if (currentHour > ii) {
      $("#hour" + i).addClass("past");
    } else if (currentHour === ii) {
      $("#hour" + i).addClass("present");
    } else {
      $("hour" + i).addClass("future");
    }
  }
  relativeTime();
}

console.log(currentHour);

//save functionality
function saveTasks() {
  for (var i = 0; i < createTask.length; i++) {
    var ii = i + 1;
    var taskInfoEntry = document.querySelector("#hour" + ii).value;
    console.log(taskInfoEntry);
    if (taskInfoEntry) {
      createTask[i] = taskInfoEntry;
    } else {
      createTask[i] = "";
    }
    console.log(taskInfo);
  }
  localStorage.setItem("taskInfo", JSON.stringify(taskInfo));
}
var saveBtn = document.querySelector(".saveBtn");
saveBtn.addEventListener("click", saveTasks);

//text box input
var emptyTextbox = ["", "", "", "", "", "", "", ""];
var createTask;
var savedTask = JSON.parse(localStorage.getItem("createTask"));
if (savedTask) {
  createTask = savedTask;
} else {
  createTask = emptyTextbox;
}
console.log(createTask);

function getTasks() {
  for (var i = 0; i < createTask.length; i++) {
    var ii = i + 1;
    if (createTask[i]) {
      $("#hour" + ii).val("");
    }
  }
}
getTasks();

var timeBlock = document.querySelector(".time-block");
var inputs;

// timeBlock.addEventListener("input", function (event) {
//   inputs = { [event.target.id]: event.target.value };
// });
