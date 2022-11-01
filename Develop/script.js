var container  = document.querySelector(".container")
var blocks = [];
var date = new Date(); 


function isCurrentPastOrFuture(hour) { 
    if (date.getHours() === hour) { 
        return "present"; 
    } 
    else if (date.getHours() > hour) { 
        return "past"; 
    } else { 
        return "future"; 
    }
}

for (var i = 0; i < blocks.length; i++) { 
    var block = document.createElement("div"); 
    var wrapper = document.createElement("div"); 
    wrapper.setAttribute("class", "row timeblock");
    var textbox = document.createElement("textarea"); 
    if (isCurrentPastOrFuture(blocks[i]) == 1) { 
        wrapper.classList.add("present");
    } else if (isCurrentPastOrFuture(blocks[i]) == 2) { 
        wrapper.classList.add("past");
    } else if (isCurrentPastOrFuture(blocks[i]) == 3) { 
        wrapper.classList.add("future"); 
    }
    textbox.setAttribute("class", "description"); 
    block.setAttribute("class", "hour");
    block.textContent = moment(blocks[i], 'HH').format('hh:mm a');
    wrapper.appendChild(textbox);
    container.appendChild(block); 
    container.appendChild(wrapper); 
}

// create the save button 
$(document).ready(function() { 
    $('.saveBtn').on('click', function () { 
        var value = $(this).siblings('description').val(); 
        var time = $(this).parent().attr('id');

        // creating local storage 
        localStorage.setItem(time, value);
    })
}); 

function hourUpdater() { 
    var currentHour = moment().hours(); 

    $('.time-block').each(function () { 
        var blockHour = parseInt($(this).attr('id').split('-')[1]);

        if(blockHour < currentHour) { 
            $(this).addClass('past'); 
        } else if (blockHour === currentHour) {
            $(this).removeClass('past'); 
            $(this).addClass('present'); 
        } else { 
            $(this).removeClass('past'); 
            $(this).removeClass('present');
            $(this).addClass('Future'); 
        }
    }); 
} 

hourUpdater(); 

var interval = setInterval(hourUpdater, 1500); 

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


// create local.Storage 
// load any saved data from the local storage 
// Then display the current day on the page 
// 

