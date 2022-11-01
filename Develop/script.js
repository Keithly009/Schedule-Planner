var container  = document.querySelector(".container")
var blocks = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
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
    wrapper.classList.add(pastPresentOrFuture(blocks[i]));
    var textbox = document.createElement("textarea"); 
    if (isCurrentPastOrFuture(blocks[i]) === 1) { 
        wrapper.classList.add("present");
    } else if (isCurrentPastOrFuture(blocks[i]) === 2) { 
        wrapper.classList.add("past");
    } else if (isCurrentPastOrFuture(blocks[i]) === 3) { 
        wrapper.classList.add("future"); 
    }
    textbox.setAttribute("class", "description"); 
    block.setAttribute("class", "hour");
    block.textContent = moment(blocks[i], 'HH').format('hh:mm a');
    wrapper.appendChild(textbox);
    container.appendChild(block); 
    container.appendChild(wrapper); 
}



