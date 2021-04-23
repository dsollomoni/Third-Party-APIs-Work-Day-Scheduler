var Today = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(Today);

    $(".saveBtn").on("click", function(){

        var text = $(this).siblings(".events").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

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