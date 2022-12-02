var container = $(".container");
var currentday = $("#currentDay");

let m = moment();
let currentDate = m.format("dddd, MMMM Do");
currentday.text(currentDate);

let currentHour = m.format("H");
console.log(currentHour);
let currentNew = parseInt(currentHour);

$("textarea").each(function () {
  if ($(this).attr("id") == currentNew) {
    $(this).addClass("present");
  } else if ($(this).attr("id") < currentNew) {
    $(this).addClass("past");
  } else if ($(this).attr("id") > currentNew) {
    console.log($(this).attr("id"));
    $(this).addClass("future");
  } else {
    console.log("oh well");
  }
});

let x = $("textarea").length;
let savedData = Array(x);
console.log(savedData);

$("button").click((event) => {
  let dataTyped = $(event.target).siblings("[id]").val();
  let txtAreaNum = parseInt($(event.target).siblings("[id]").attr("id"));
  let dataInfo = "box" + txtAreaNum;
  localStorage.setItem("data", dataInfo);
  console.log(localStorage.getItem("data"));
});
