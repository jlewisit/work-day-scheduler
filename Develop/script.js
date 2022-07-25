// Ensure the document is rendered when manipulating DOM elements
// Assemble: Create/select DOM elements
// var currentDayEl = $('#currentDay');

var today = moment().format('dddd, MMM Do');
$("#currentDay").text(today);

//Starting from the root element, '<div id="currentDay">', make desired changes
// currentDayEl.children('').children().css();








