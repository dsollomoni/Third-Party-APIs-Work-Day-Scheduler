//Displays the current date
var Today = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(Today);
    // Saves events
    $(".saveBtn").on("click", function(){

        var event = $(this).siblings(".events").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, event);
    })
    // fills in timeblock with scheduled event 
    function Clock() {
        var timeNow = moment().hour();

        $(".time-block").each(function () {
            var timeThen = parseInt($(this).attr("id"));

            if (timeThen === timeNow) {
                $(this).addClass("present");
            }
            else if (timeThen < timeNow) {
                $(this).addClass("past");
            }
            else {
                $(this).addClass("future");

            }
        })
        //displays saved events
         $("#8 .events").val(localStorage.getItem("8"));
         $("#9 .events").val(localStorage.getItem("9"));
         $("#10 .events").val(localStorage.getItem("10"));
         $("#11 .events").val(localStorage.getItem("11"));
         $("#12 .events").val(localStorage.getItem("12"));
         $("#13 .events").val(localStorage.getItem("13"));
         $("#14 .events").val(localStorage.getItem("14"));
         $("#15 .events").val(localStorage.getItem("15"));
         $("#16 .events").val(localStorage.getItem("16"));
         $("#17 .events").val(localStorage.getItem("17"));

         
    }  
    Clock();