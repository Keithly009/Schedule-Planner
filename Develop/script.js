$(document).ready(function() { 
    var today = moment(); 
   
    $('.saveBtn').on('click', function () { 
        // This part classifies what is saved, aka: with scheduledEvent grabbing the value for siblings that is used for the description class. 
        var value = $(this).siblings(".description").val(); 
        var time = $(this).parent().attr('id');

        // creating local storage 
        localStorage.setItem(time, value);

    $('.notification').addClass('show'); 

    setTimeout(function () { 
        $('.notification').removeClass('show');
    }, 5000);
}); 

// function focuses on maining the time from the timeblocks
function hourUpdater() { 
    var currentHour = moment().hours(); 

    $('.time-block').each(function () { 
        var blockHour = parseInt($(this).attr('id').split('-')[1]);

        if(blockHour < currentHour) { 
            $(this).addClass('past'); 
        } else if (blockHour > currentHour) {
            $(this).removeClass('past'); 
            $(this).addClass('future'); 
        } else { 
            $(this).removeClass('past'); 
            $(this).removeClass('future');
            $(this).addClass('present'); 
        }
    }); 
} 

hourUpdater(); 

var interval = setInterval(hourUpdater, 25000); 

$('#hour-6 .description').val(localStorage.getItem('hour-6'));
$('#hour-7 .description').val(localStorage.getItem('hour-7'));
$('#hour-8 .description').val(localStorage.getItem('hour-8'));
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-6'));
$('#hour-15 .description').val(localStorage.getItem('hour-6'));
$('#hour-16 .description').val(localStorage.getItem('hour-6'));
$('#hour-17 .description').val(localStorage.getItem('hour-6'));
$('#hour-18 .description').val(localStorage.getItem('hour-6'));
$('#hour-19 .description').val(localStorage.getItem('hour-6'));

$('#currentDay').text(moment().format('dddd, MMMM Do')); 
 
});
// create the save button 
// create local.Storage 
// load any saved data from the local storage 
// Then display the current day on the page 