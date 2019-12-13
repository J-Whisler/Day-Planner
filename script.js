// sets the h4 element with id current time's text to the current date and time of day
$('#currentTime').text(moment().format('dddd, MMMM Do h:mm:ss a'))



// function tied to save button click that will pull the time and the text that the user typed into the textarea
$(document).ready(function () {
    $('saveBtn').on('click', function () {
        var time = $(this).parent('div').attr('time');
        var text = $(this).siblings('#col-md-10').val();


     //  setting the variables to be saved in local storage
        localStorage.setItem(time, text)

            
    })

   function hours () {
        var currentHour = moment().hours();
        $('.time-row').each(function () {
        var hour = $('#time').val()

        if (hour < currentHour) {
            $(this).addClass('past')
        } else if (hour === currentHour) {
            $(this).addClass('present')
            $(this).removeClass('past')
        } else {
            $(this).removeClass('past')
            $(this).removeClass('present')
            $(this).addClass('future')
        }

   })

   hours();
         



   








