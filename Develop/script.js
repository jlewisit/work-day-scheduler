// display current date at top
var today = moment().format('dddd, MMM Do');
$("#currentDay").text(today);

// Static 9AM in moment.js
var nine = moment().format('09:00');
$("#hour1").text(nine);
// This is supposed to add AM/PM, but it's not working
moment.updateLocale('en', {
    meridiem : Function
});

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


// ***LOCAL STORAGE***
var note1Input = document.querySelector("#note1")

function saveLastNote() {
  // Save related form data as an object
var userNote = {
    note1Input: note1Input.value.trim()
};
// Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    localStorage.setItem("userNote", JSON.stringify(userNote));
}

function renderLastNote() {
    // User JSON.parse() to convert text to JavaScript object
    var lastNote = JSON.parse(localStorage.getItem("userNote"));
  // Check if data is returned, if not exit out of the function
  if(lastNote !== null) {
    document.getElementById("note1").innerHTML = lastNote.note1Input;
  } else {
    return;
  }
}

// Just one event listener for all save buttons
var saveBtn = document.getElementsByClassName("saveBtn");
var myFunction = function() {
    var attribute = this.getAttribute("hour1");
    alert(attribute);
};
for (var i = 0; i < saveBtn.length; i++) {
    saveBtn[i].addEventListener('click', myFunction, false);
}

// The init() function fires when the page is loaded 
function init() {
    // When the init function is executed, the code inside renderLastNote function will also execute
    renderLastNote();
  }
  init();




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




