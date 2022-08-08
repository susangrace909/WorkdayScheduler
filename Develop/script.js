//current day
var currentDay = moment().format("MMM Do YY");
var momentDay;
document.getElementById("momentDay").textContent = currentDay;
var timeBlock = document.querySelector(".time-block");
var emptyTextbox = ["", "", "", "", "", "", "", ""];
var createTask;
var savedTask = JSON.parse(localStorage.getItem("taskInfo"));
var timeBlock = document.querySelector(".time-block");

//past,present,future color change
var currentHour = moment().hour();
function relativeTime() {
  const taskStorage = savedTask || emptyTextbox;
  console.log(taskStorage);
  for (var i = 1; i < 10; i++) {
    var ii = i + 8;
    $("#hour" + ii).val(taskStorage[i - 1]?.text);
    if (currentHour > ii) {
      $("#hour" + ii).addClass("past");
    } else if (currentHour === ii) {
      $("#hour" + ii).addClass("present");
    } else {
      $("#hour" + ii).addClass("future");
    }
  }
}

console.log(currentHour);

//save functionality
function saveTasks() {
  let taskInfoEntry = [
    {
      id: "hour9",
      text: $("#hour9").val(),
    },
    {
      id: "hour10",
      text: $("#hour10").val(),
    },
    {
      id: "hour11",
      text: $("#hour11").val(),
    },
    {
      id: "hour12",
      text: $("#hour12").val(),
    },
    {
      id: "hour13",
      text: $("#hour13").val(),
    },
    {
      id: "hour14",
      text: $("#hour14").val(),
    },
    {
      id: "hour15",
      text: $("#hour15").val(),
    },
    {
      id: "hour16",
      text: $("#hour16").val(),
    },
  ];
  //   for (var i = 0; i < createTask.length; i++) {
  //     var ii = i + 1;
  //     taskInfoEntry = $("#hour" + ii).val();
  //     console.log(taskInfoEntry);
  //     if (taskInfoEntry) {
  //       createTask[i] = taskInfoEntry;
  //     } else {
  //       createTask[i] = "";
  //     }
  //     console.log(taskInfoEntry);
  //   }
  localStorage.setItem("taskInfo", JSON.stringify(taskInfoEntry));
  window.location.reload();
}

timeBlock.addEventListener("click", function (event) {
  if (!event.target.classList.contains("saveBtn")) {
    return;
  }
  saveTasks();
  console.log("Save button?");
});

//text box input
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

relativeTime();

// timeBlock.addEventListener("input", function (event) {
//   inputs = { [event.target.id]: event.target.value };
// });
