var container  = document.querySelector(".container")
var blocks = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

for (var i = 0; i < blocks.length; i++) { 
    var block = document.createElement("div"); 
    var wrapper = document.createElement("div"); 
    wrapper.setAttribute("style", "display: flex; align-items: center; width: 100%;"); 
    var textbox = document.createElement("textarea"); 
    textbox.setAttribute("style", "flex-grow: 1; height: 100%;"); 
    block.textContent = moment(blocks[i], 'HH').format('hh:mm a');
    wrapper.appendChild(textbox);
    container.appendChild(block); 
    container.appendChild(wrapper); 
}

