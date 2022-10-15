// display current date at top
var today = moment().format('dddd, MMM Do');
$("#currentDay").text(today);

var currentTime = moment();

// displayTime.textContent = currentTime.format("dddd, MMMM Do")

$(".saveBtn").on("click", function() {
    // get row text field class and row id values
    var value = $(this).siblings("description").val();
    var time = $(this).parent().attr("id");

    // save to localStorage
    localStorage.setItem(time /* aka KEY = row id */, value /* text in the text area */);
});

// load any saved data from localStorage
// localStorage KEY is also the row id

// // Static 9AM in moment.js
// var nine = moment().format('09:00');
// $("#hour1").text(nine);

// 9 
$("#hour9-row .description").val(localStorage.getItem("hour9-row"));

// 10 
$("#hour10-row .description").val(localStorage.getItem("hour10-row"));

// 11 
$("#hour11-row .description").val(localStorage.getItem("hour11-row"));

// 12 
$("#hour12-row .description").val(localStorage.getItem("hour12-row"));

// 1 
$("#hour13-row .description").val(localStorage.getItem("hour13-row"));

// 2 
$("#hour14-row .description").val(localStorage.getItem("hour14-row"));

// 3 
$("#hour15-row .description").val(localStorage.getItem("hour15-row"));

// 4 
$("#hour16-row .description").val(localStorage.getItem("hour16-row"));

// 5 
$("#hour17-row .description").val(localStorage.getItem("hour17-row"));

// converting time and display

var hour9 = 9;
var hour10 = 10;
var hour11 = 11;
var hour12 = 12;
var hour13 = 13;
var hour14 = 14;
var hour15 = 15;
var hour16 = 16;
var hour17 = 17;

var currentHour = moment().format('H');

// 10
if (currentHour < hour10) {
    $("#10-text").addClass("future");
} else if (currentHour > hour10) {
    $("10-text").addClass("past");
} else if (currentHour === hour10) {
    $("#10-text").addClass("present");
}

// 11
if (currentHour < hour11) {
    $("#11-text").addClass("future");
} else if (currentHour > hour11) {
    $("11-text").addClass("past");
} else if (currentHour === hour11) {
    $("#11-text").addClass("present");
}

// 12
if (currentHour < hour12) {
    $("#12-text").addClass("future");
} else if (currentHour > hour12) {
    $("12-text").addClass("past");
} else if (currentHour === hour12) {
    $("#12-text").addClass("present");
}

// 1
if (currentHour < hour13) {
    $("#1-text").addClass("future");
} else if (currentHour > hour13) {
    $("1-text").addClass("past");
} else if (currentHour === hour13) {
    $("#1-text").addClass("present");
}

// 2
if (currentHour < hour14) {
    $("#2-text").addClass("future");
} else if (currentHour > hour14) {
    $("#2-text").addClass("past");
} else if (currentHour === hour14) {
    $("#2-text").addClass("present");
}

// 3
if (currentHour < hour15) {
    $("#3-text").addClass("future");
} else if (currentHour > hour15) {
    $("3-text").addClass("past");
} else if (currentHour === hour15) {
    $("#3-text").addClass("present");
}

// 4
if (currentHour < hour16) {
    $("#4-text").addClass("future");
} else if (currentHour > hour16) {
    $("4-text").addClass("past");
} else if (currentHour === hour16) {
    $("#4-text").addClass("present");
}

// 5
if (currentHour < hour17) {
    $("#5-text").addClass("future");
} else if (currentHour > hour17) {
    $("5-text").addClass("past");
} else if (currentHour === hour17) {
    $("#5-text").addClass("present");
}

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

// var inpKey = document.getElementById("inpKey");
// // const inpValue = docuemnt.getElementById("inpValue");
// var btnInsert = document.getElementById("btnInsert");
// var lsOutput = document.getElementById("lsOutput");
// inpKey = "note1Key";
// btnInsert = "save1";
// lsOutput = "note1Output";
// save1.onclick = function() {
//     const note = note1Key.value;
//     // const value = inValue.value;
// console.log(note);
// // console.log(value);
// // if (note) {
// //     localStorage.setItem(note);
// //     location.reload();
// // }
// for (let i = 0; i < localStorage.length; i++) {
//     const note = localStorage.key(i);
//     // const value = localStorage.getItem(note);
//     note1Output.innerHTML += `${note}<br />`;
//     }
//  }
