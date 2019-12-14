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


    // function to set the color of the text area depending on if that hour is in the past, present, or futur
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

// call hours function
   hours();

   // setting textarea so it will draw from local storage and the user input will stay in textarea even upon refresh
         
   $('#h9 .textarea').val(localStorage.getItem('h9'))
   $('#h10 .textarea').val(localStorage.getItem('h10'))
   $('#h11 .textarea').val(localStorage.getItem('h11'))
   $('#h12 .textarea').val(localStorage.getItem('h12'))
   $('#h13 .textarea').val(localStorage.getItem('h13'))
   $('#h14 .textarea').val(localStorage.getItem('h14'))
   $('#h15 .textarea').val(localStorage.getItem('h15'))
   $('#h16 .textarea').val(localStorage.getItem('h16'))
   $('#h17 .textarea').val(localStorage.getItem('h17'))


   






   }
})
