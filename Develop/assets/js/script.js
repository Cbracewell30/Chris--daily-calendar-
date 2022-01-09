// Variabeles to get current day from moment
var currentDte = moment().format('LL');
var date = document.getElementById("currentDay");
var calTasks = [];

// Adding items form local storage to page.
$('#txt-input-8.description').val(localStorage.getItem('8'));
$('#txt-input-9.description').val(localStorage.getItem('9'));
$('#txt-input-10.description').val(localStorage.getItem('10'));
$('#txt-input-11.description').val(localStorage.getItem('11'));
$('#txt-input-12.description').val(localStorage.getItem('12'));
$('#txt-input-13.description').val(localStorage.getItem('13'));
$('#txt-input-14.description').val(localStorage.getItem('14'));
$('#txt-input-15.description').val(localStorage.getItem('15'));
$('#txt-input-16.description').val(localStorage.getItem('16'));
$('#txt-input-17.description').val(localStorage.getItem('17'));



// Adding Current day to the page
  $("#currentDay").text(currentDte);


  // creating an on click event from the savebtn
$(".saveBtn").on("click",function(event){
  event.preventDefault();
var id = $(this).attr("id"); 
var timeBlock = id.split("-")[2];
var userInput = $(`#txt-input-${timeBlock}`).val();
localStorage.setItem(timeBlock, userInput);
console.log(calTask);
});

// gettting current hour for iteration 
var currentHour = moment().hours()

for(let i = 8; i <= 17; i++) {
// adding custom classes based on curent hour
  if(i< currentHour){
  $(`#txt-input-${i}`).addClass("past");
  }

  else if (i===currentHour ) {
    $(`#txt-input-${i}`).addClass("present");
  }

  else {
    $(`#txt-input-${i}`).addClass("future");
  }
};

