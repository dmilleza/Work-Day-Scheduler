var container = $(".container");
var currentday = $("#currentDay");

let m = moment();

// uses moment.js to get the current date
let currentDate = m.format("dddd, MMMM Do");

// displays current date on webpage in header
currentday.text(currentDate);

// gets the current hour for comparison
let currentHour = m.format("H");
let currentNew = parseInt(currentHour);

// changes the color of each textarea based on the current hour
$("textarea").each(function () {
  if ($(this).attr("id") == currentNew) {
    $(this).addClass("present");
  } else if ($(this).attr("id") < currentNew) {
    $(this).addClass("past");
  } else if ($(this).attr("id") > currentNew) {
    $(this).addClass("future");
  } else {
    console.log("oh well");
  }
});

// creates an array based on the number of textareas
let x = $("textarea").length;
let savedData = Array(x);

// when button is clicked, the text in textarea is saved for local storage
$("button").click((event) => {
  // gets value typed in textarea
  let dataTyped = $(event.target).siblings("[id]").val();

  // gets textarea next to button clicked
  let txtAreaTyped = $(event.target).siblings("[id]");

  // gets index of textarea in textarea array
  let txtAreaIndex = $("textarea").index(txtAreaTyped);

  // updates array of inputs with the input next to the clicked button
  savedData.splice(txtAreaIndex, 1, dataTyped);
  let savedArray = JSON.stringify(savedData);
  localStorage.setItem("savedNotes", savedArray);
});

// gets saved array of inputs and displays them in appropriate textarea boxes
function getStuff() {
  let savedNotes2 = JSON.parse(localStorage.getItem("savedNotes"));
  if (savedNotes2 == null) {
    return;
  } else {
    savedData = savedNotes2;
  }

  if (savedData[0] !== null) {
    $("#9").val(savedData[0]);
  }
  if (savedData[1] != null) {
    $("#10").val(savedData[1]);
  }
  if (savedData[2] != null) {
    $("#11").val(savedData[2]);
  }
  if (savedData[3] != null) {
    $("#12").val(savedData[3]);
  }
  if (savedData[4] != null) {
    $("#13").val(savedData[4]);
  }
  if (savedData[5] != null) {
    $("#14").val(savedData[5]);
  }
  if (savedData[6] != null) {
    $("#15").val(savedData[6]);
  }
  if (savedData[7] != null) {
    $("#16").val(savedData[7]);
  }
  if (savedData[8] != null) {
    $("#17").val(savedData[8]);
  }
}

// when page loads, gets saved array of inputs to display them
getStuff();
