// Variabeles to get current day from moment
var currentDte = moment().format('LL');
var date = document.getElementById("currentDay");
var calTasks = [];

function getCal (timeBlock,) {
for(let i = 8; i < 17; i++) {
var getStorage = JSON.parse(localStorage.getItem(timeBlock,calTasks));

  if( i = timeBlock){
    document.querySelector("#")
  }
 console.log(); 
  }
};

// Adding Current day to the page
  $("#currentDay").text(currentDte);


  // creating an on click event from the savebtn
$(".saveBtn").on("click",function(event){
  event.preventDefault();
var id = $(this).attr("id"); 
var timeBlock = id.split("-")[2];
var userInput = $(`#txt-input-${timeBlock}`).val();

let calTask = {
  id: $(this).attr("id"),
  hour: timeBlock,
   info: userInput
}

calTasks.push(calTask);
localStorage.setItem(timeBlock,JSON.stringify(calTasks));
console.log(calTask);
//getCal(timeBlock,userInput)
});


var currentHour = moment().hours()

for(let i = 8; i <= 17; i++) {

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

// getCal();

// var inputLocal = localStorage.getItem(timeBlock,userInput);
// document.getElementById(timeBlock);