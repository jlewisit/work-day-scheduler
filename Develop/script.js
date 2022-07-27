// display current date at top
var today = moment().format('dddd, MMM Do');
$("#currentDay").text(today);

// Static 9AM in moment.js
var nine = moment().format('09:00');
$("#9AM").text(nine);
// Supposed to add AM/PM, but not working
moment.updateLocale('en', {
    meridiem : Function
});

// Static 10AM in moment.js
var ten = moment().format('10:00');
$("#10AM").text(ten);

// Static 11AM in moment.js
var eleven = moment().format('11:00');
$("#11AM").text(eleven);

// Static 12PM in moment.js
var twelve = moment().format('12:00');
$("#12PM").text(twelve);

// Static 1PM in moment.js
var one = moment().format('13:00');
$("#1PM").text(one);

// Static 2PM in moment.js
var two = moment().format('14:00');
$("#2PM").text(two);

// Static 3PM in moment.js
var three = moment().format('15:00');
$("#3PM").text(three);

// Static 4PM in moment.js
var four = moment().format('16:00');
$("#4PM").text(four);

// Static 5PM in moment.js
var five = moment().format('17:00');
$("#5PM").text(five);




// ***LOCAL STORAGE***
 var saveBtn = document.querySelector("#saveBtn");
 var note1Input = document.querySelector("#note1")

// renderLastRegistered();

// function displayMessage(type, message) {
//     msgDiv.textContent = message;
//     msgDiv.setAttribute("class", type);
// }

function saveLastNote() {
  // Save related form data as an object
var userNote = {
    note1: note1.value.trim()
};



//   userNote1.textContent = localStorage.getItem("note1");
// }

  // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    localStorage.setItem("note1", JSON.stringinfy(note1));
}
//   renderMessage();



function renderLastNote() {
    // User JSON.parse() to convert text to JavaScript object
    var note1 = JSON.parse(localStorage.getItem("userNote"));
  // Check if data is returned, if not exit out of the function
  if(note1 !== null) {
    document.getElementById("note1").innerHTML = note1.user;
  } else {
    return;
  }
}
//   if (lastNote !== null) {
//         document.querySelector(".message").textContent = lastNote.user +
//         " received a/an " + lastNote.note}
//     }

    saveBtn.addEventListener("click", function(event) {
        event.preventDefault(); 
        saveLastNote();
        renderLastNote();
        // var note1 = document.querySelector("#note1").value;
    });

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

    if (currentHour === id) {
        $(this).parent().addClass("present");
    } 
    else if (currentHour < id) {
        $(this).parent().addClass("past");
    } 
    else {
        $(this).parent().addClass("future");
    }
    })





// var eventTime = moment().format();
// $("#rightNow").text(eventTime);

// var now = moment().format('MMMM Do YYYY, h:mm:ss a');
// $("#currentTime"').text(now);
