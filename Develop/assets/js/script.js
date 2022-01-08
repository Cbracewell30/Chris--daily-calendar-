var currentDte = moment().format('LL');
var date = document.getElementById("currentDay");


// Adding Current day to the page
  $("#currentDay").text(currentDte);

$(".saveBtn").on("click",function(){
var id = $(this).attr("id"); 
var timeBlock = id.split("-")[2];
var userInput = $(`#txt-input-${timeBlock}`).val();
localStorage.setItem(timeBlock,userInput);
});


var currentHour = moment().hours()
for(let i = 0; i <= 17; i++){
  var plan = localStorage.getItem(i)
  $(`txt-input-${i}`).val(plan)

// a
  if(i< currentHour){
  $(`#txt-input-${i}`).addClass("past");
  }
 
}
else if (i===currentHour){

}