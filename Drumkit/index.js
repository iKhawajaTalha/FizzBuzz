// Drum Buttons
var numOfDrumButtons = document.querySelectorAll(".drum").length; 
for (var i = 0; i<numOfDrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        alert("I'm Clicked!");
    });
}



