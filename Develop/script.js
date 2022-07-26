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
renderLastRegistered();

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}

var eventInput = document.querySelector("#event");

function renderLastRegistered() {
  // TODO: Retrieve the last event and render it to the page
userEventSpan.textContent = localStorage.getItem("userEvent");
}
saveBtn.addEventListener("click", function(event) {
    event.preventDefault(); 
    var event = document.querySelector("#event").value;
      // TODO: Save event to localStorage and render
  localStorage.setItem("userEvent", event)
});


// check time block for past present or future hour and add class to change bg color
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






