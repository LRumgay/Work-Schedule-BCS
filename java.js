let now = moment();

//Clock//
const currentTimeInterval = setInterval(function () {
    now = moment();
    $("#now").text(`${now.format('MMM DD, YYYY')} at ${now.format('HH:mm:ss')}`);
  }, 1000);

 
  $("#SubButton").on("click",function(){
    var input = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id")
    localStorage.setItem(input,time)
   })

   function hourcheck () {
    var currentTime = moment().hours()
    $(".time-block").each(function(){
      var compareTime = parseInt($(this).attr("id").split("-")[1])
      if(compareTime<currentTime){
        $(this).addClass("past")
      }else if(compareTime === currentTime){
        $(this).removeClass("past")
        $(this).addClass("present")
      }else{
        $(this).removeClass("past")
        $(this).removeClass("present")
        $(this).addClass("future")
      }
    })
   }
   hourcheck()
  
  $("#hour-9 .description").val(localStorage.getItem("hour-9"))
  $("#hour-10 .description").val(localStorage.getItem("hour-10"))
  $("#hour-11 .description").val(localStorage.getItem("hour-11"))
  $("#hour-12 .description").val(localStorage.getItem("hour-12"))
  $("#hour-1 .description").val(localStorage.getItem("hour-1"))
  $("#hour-2 .description").val(localStorage.getItem("hour-2"))
  $("#hour-3 .description").val(localStorage.getItem("hour-3"))
  $("#hour-4 .description").val(localStorage.getItem("hour-4"))
  $("#hour-5 .description").val(localStorage.getItem("hour-5"))









