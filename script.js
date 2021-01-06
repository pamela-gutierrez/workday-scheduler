$(document).ready(function () {

    var saveBtn = $(".saveBtn");
    var currentTime = moment().hour();
    $("#currentDay").text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm a'));
    var allTimes = $(".col-md-2")

    $(document).ready(function () {

        var saveBtn = $(".saveBtn");
        var currentTime = moment().hour();
        $("#currentDay").text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm a'));
        var allTimes = $(".col-md-2")

        for (var i = 0; i < allTimes.length; i++) {

            var currentTimeEl = $(allTimes[i])
            var currentTextArea = currentTimeEl.siblings(".col-md-9")

            if (parseInt(currentTimeEl.attr('id')) < currentTime) {
                currentTextArea.addClass("past")

            } else if (parseInt(currentTimeEl.attr('id')) > currentTime) {
                currentTextArea.addClass("future")
                currentTextArea.removeClass("present")

            } else if (parseInt(currentTimeEl.attr('id')) === currentTime) {
                currentTextArea.addClass("present")
                currentTextArea.removeClass("past")
                currentTextArea.removeClass("future")

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

    });


    if (localStorage.getItem("9") !== null) {
        $("#9").siblings("textarea").text(localStorage.getItem("9"));
    }

    if (localStorage.getItem("10") !== null) {
        $("#10").siblings("textarea").text(localStorage.getItem("10"));
    }


    if (localStorage.getItem("11") !== null) {
        $("#11").siblings("textarea").text(localStorage.getItem("11"));


    }
    if (localStorage.getItem("9") !== null) {
        $("#12").siblings("textarea").text(localStorage.getItem("12"));


    }
    if (localStorage.getItem("13") !== null) {
        $("#13").siblings("textarea").text(localStorage.getItem("13"));
    }


    if (localStorage.getItem("14") !== null) {
        $("#14").siblings("textarea").text(localStorage.getItem(14));


    }
    if (localStorage.getItem("15") !== null) {
        $("#15").siblings("textarea").text(localStorage.getItem("15"));
    }


    if (localStorage.getItem("16") !== null) {
        $("#16").siblings("textarea").text(localStorage.getItem("16"));


    }
    if (localStorage.getItem("17") !== null) {
        $("#17").siblings("textarea").text(localStorage.getItem("17"));

    }

});