$(document).ready(function () {

    var saveBtn = $(".saveBtn");
    var currentTime = moment().hour();
    $("#currentDay").text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm a'));
    var allTimes = $(".col-md-2")
    // console.log("hi")
    // console.log(allTimes)
    $(document).ready(function () {

        var saveBtn = $(".saveBtn");
        var currentTime = moment().hour();
        $("#currentDay").text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm a'));
        var allTimes = $(".col-md-2")
        // console.log("hi")
        // console.log(allTimes)
        for (var i = 0; i < allTimes.length; i++) {
            // console.log($(allTimes[i]).attr("id"))
            var currentTimeEl = $(allTimes[i])
            var currentTextArea = currentTimeEl.siblings(".col-md-9")

            if (parseInt(currentTimeEl.attr('id')) < currentTime) {
                // console.log("I am less than")
                currentTextArea.addClass("past")
            } else if (parseInt(currentTimeEl.attr('id')) > currentTime) {
                currentTextArea.addClass("future")
                currentTextArea.removeClass("present")
                // console.log("I am more than")
                // console.log(currentTextArea)
            } else if (parseInt(currentTimeEl.attr('id')) === currentTime) {
                currentTextArea.addClass("present")
                currentTextArea.removeClass("past")
                currentTextArea.removeClass("future")
                // console.log("I am equal to")
            }
        }
        console.log($(".saveBtn"))
        $("button").on("click", function () {
            console.log("somestring")
            var inputValue = $(this).siblings("textarea").val()
            var id = $(this).siblings("div").attr("id")
            localStorage.setItem(id, inputValue)
            console.log(id)
            console.log(inputValue)
        });

        $("#9, .text-box").val(localStorage.getItem("9"))
        $("#10, .text-box").val(localStorage.getItem("10"))
        $("#11, .text-box").val(localStorage.getItem("11"))
        $("#12, .text-box").val(localStorage.getItem("12"))
        $("#13, .text-box").val(localStorage.getItem("13"))
        $("#14, .text-box").val(localStorage.getItem("14"))
        $("#15, .text-box").val(localStorage.getItem("15"))
        $("#16, .text-box").val(localStorage.getItem("16"))
        $("#17, .text-box").val(localStorage.getItem("17"))

        if (localStorage.getItem("9") === null) {
            $("#9, .text-box").val(localStorage.getItem("9"))
        } else {
            $("#9, .text-box").val(localStorage.getItem("9"))
        }



        // $(".col-md-2").each(index => {
        //     console.log(this)
        // });
        // add variables for every hour of the day
        // var 9am = "9aminput"

        // var counter = 1;

        // const is the biggest, var is the medium, and let is the smallest. 
        // if else statements to determine past and present
        // 

        // var 9am ="textarea entry"
        // textarea.text(valueofuserinput)
        // val().trim()

        // if (time counter1 < timecounter2) you gonna make it past by adding class past

        // make sure to include present hour

        // text 
        //  put all the times in an array 


        // for (var i=0; i < 



        // Distinguish past, present, and future.
        // In order to do this, compare past, present, and future time to current time (to each other
        // compare past timet to present/current time to determine to make it time 
        // name current time by making current time a variable
        // var currentTime will equal moment().hour()

        // console.log(currentTime)
        // the console log will show 18 (the current time when I'm working on this)
        // if time block is smaller than current time, it's in the past.
        // if time block is larger than current time, it's in the future
        // if time block is past, add .past class to "text-box" which has been defined in HTML
        // if time block is in the future, add .future class to "text-box" which has been defined in HTML
        // if time block is equal to current time, add .present to "text-box" which has been defined in HTML

        // var str =


        // var time = $("#9");
        // var hour = $(".hour1")
        // console.log(time)
        // console.log(hour)
        // let str = "9";
        // var num = str * 1
        // function toNumber(str) {
        //     return str * 1
        //     console.log(num)
        // }

        // function change() {
        //     switch () {
        //         case "09 A.M.": return 9;
        //     };
        // 
    });




    // $(".col-md-2").each(index => {
    //     console.log(this)
    // });
    // add variables for every hour of the day
    // var 9am = "9aminput"

    // var counter = 1;

    // const is the biggest, var is the medium, and let is the smallest. 
    // if else statements to determine past and present
    // 

    // var 9am ="textarea entry"
    // textarea.text(valueofuserinput)
    // val().trim()

    // if (time counter1 < timecounter2) you gonna make it past by adding class past

    // make sure to include present hour

    // text 
    //  put all the times in an array 


    // for (var i=0; i < 



    // Distinguish past, present, and future.
    // In order to do this, compare past, present, and future time to current time (to each other
    // compare past timet to present/current time to determine to make it time 
    // name current time by making current time a variable
    // var currentTime will equal moment().hour()

    // console.log(currentTime)
    // the console log will show 18 (the current time when I'm working on this)
    // if time block is smaller than current time, it's in the past.
    // if time block is larger than current time, it's in the future
    // if time block is past, add .past class to "text-box" which has been defined in HTML
    // if time block is in the future, add .future class to "text-box" which has been defined in HTML
    // if time block is equal to current time, add .present to "text-box" which has been defined in HTML

    // var str =


    // var time = $("#9");
    // var hour = $(".hour1")
    // console.log(time)
    // console.log(hour)
    // let str = "9";
    // var num = str * 1
    // function toNumber(str) {
    //     return str * 1
    //     console.log(num)
    // }

    // function change() {
    //     switch () {
    //         case "09 A.M.": return 9;
    //     };
    // 
});