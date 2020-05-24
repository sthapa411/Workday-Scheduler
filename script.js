$(document).ready(function () {
    //varibles for current date and time
    var m = moment();
    var currentTime = m.format('MMMM Do YYYY, h:mm:ss a');
    var currentDate = m.format("MMM Do YYYY");
    var currentHour = moment().hours();
    console.log('current hour: ', currentHour)

    // put current date/time in sub title
    $("#currentDay").text("Today's Date: " + currentDate);

    // event listener for save buttons to add to local storage
    $(".saveBtn").on("click", function () {
        console.log("button");
        var click = $(this).attr("data-value");
        var eventInput = $(click).val();
        localStorage.setItem(click, eventInput);
    });

    // load from local storage on page load

    // loop through time block and grab values from local storage 'getItem' when refreshed. 
    let timeBlock = ["#9am", "#10am", "#11am", "#12pm", "#1pm", "#2pm", "#3pm", "#4pm", "#5pm"];
    
    for (let i = 0; i < timeBlock.length; i++) {
        let savedEvent = $('.saved-event')
        console.log('looping through time block to retrieve LS');        
        $(timeBlock[i]).val(localStorage.getItem(timeBlock[i]));
    };
    
    // Change style of the time block based on time (past, present, and future)
    function hourStyle() {
        for (let i = 6; i < 18; i++) {

            let hour = '#' + i;
            let scheduleHour = parseInt($(hour).attr("id"));
            $(hour).removeClass();
            if (
                scheduleHour > currentHour) {
                $(hour).attr("class", "row future");
            }
            else if (
                scheduleHour === currentHour) {
                $(hour).attr("class", "row present");
            }
            else if (
                scheduleHour < currentHour) {
                $(hour).attr("class", "row past");
            }

        };
    }
    hourStyle();

});