var currentDte = moment().format('LL');
var date = document.getElementById("currentDay");

$(".saveBtn").hover( function() {
  $(`#save-btn-${i}`).addClass("i:hover");
});

// Adding Current day to the page
  $("#currentDay").text(currentDte);

$(".saveBtn").on("click",function(){
var id = $(this).attr("id"); 
var timeBlock = id.split("-")[2];
var userInput = $(`#txt-input-${timeBlock}`).val();
localStorage.setItem(timeBlock,userInput);
});


var currentHour = moment().hours()

for(let i = 0; i <= 17; i++) {
  var plan = localStorage.getItem(i)
  $(`txt-input-${i}`).val(plan)

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

// var inputLocal = localStorage.getItem(timeBlock,userInput);
// document.getElementById(timeBlock);