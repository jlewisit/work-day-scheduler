// display current date at top
var today = moment().format('dddd, MMM Do');
$("#currentDay").text(today);

var currentTime = moment();

displayTime.textContent = currentTime.format("dddd, MMMM Do")

$(".saveBtn").on("click", function() {
    // get row text field class and row id values
    var value = $(this).siblings("description").val();
    var time = $(this).parent().attr("id");

    // save to localStorage
    localStorage.setItem(time /* aka KEY = row id */, value /* text in the text area */);
});

// load any saved data from localStorage

// Static 9AM in moment.js
var nine = moment().format('09:00');
$("#hour1").text(nine);

// Static 10AM in moment.js
var ten = moment().format('10:00');
$("#hour2").text(ten);

// Static 11AM in moment.js
var eleven = moment().format('11:00');
$("#hour3").text(eleven);

// Static 12PM in moment.js
var twelve = moment().format('12:00');
$("#hour4").text(twelve);

// Static 1PM in moment.js
var one = moment().format('13:00');
$("#hour5").text(one);

// Static 2PM in moment.js
var two = moment().format('14:00');
$("#hour6").text(two);

// Static 3PM in moment.js
var three = moment().format('15:00');
$("#hour7").text(three);

// Static 4PM in moment.js
var four = moment().format('16:00');
$("#hour8").text(four);

// Static 5PM in moment.js
var five = moment().format('17:00');
$("#hour9").text(five);

var currentHour = moment().format('H');

// check time block for past/present/future hour and add class changing background color
$(".time-block").each(function () {
    var id = $(this).attr("id");
    var currentHour = moment().format("HH:00");
    var block = document.getElementsByClassName("time-block");

    if (currentHour === id) {
        $(this).parent().addClass("present");
    } 
    else if (currentHour < id) {
        $(this).parent().addClass("past");
    } 
    else {
        $(this).parent().addClass("future");
    }
    for (var i = 0; i < block.length; i++) {
    }
    })

    // ***LOCAL STORAGE***
// read about event delegation
// use event.target
// target the parent element (container)
// var note1Input = document.querySelector("#userNote");
// function populateStorage () {
//     // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
//     localStorage.setItem("userNote", JSON.stringify(userNote));
// }

var inpKey = document.getElementById("inpKey");
// const inpValue = docuemnt.getElementById("inpValue");
var btnInsert = document.getElementById("btnInsert");
var lsOutput = document.getElementById("lsOutput");
inpKey = "note1Key";
btnInsert = "save1";
lsOutput = "note1Output";
save1.onclick = function() {
    const note = note1Key.value;
    // const value = inValue.value;
console.log(note);
// console.log(value);
// if (note) {
//     localStorage.setItem(note);
//     location.reload();
// }
for (let i = 0; i < localStorage.length; i++) {
    const note = localStorage.key(i);
    // const value = localStorage.getItem(note);
    note1Output.innerHTML += `${note}<br />`;
    }
 }
