document.querySelector("ul").addEventListener("click",handleclick )
function handleclick(event){
    let button=this.innerHTML;
    makesound(button);
    Animation(button);
}
// SECOND METHOD
/*var drums = document.querySelectorAll(".drum");
var num = drums.length;

for (var i = 0; i < num; i++) {
    // Add click event listener to each drum element
    drums[i].addEventListener("click", function() {
        var audio = new Audio("C:/Users/tanis/OneDrive/Desktop/diceimage/tom-1.mp3"); // Correct path and case sensitivity
        audio.play();  // Play the sound when the drum is clicked
    });
}*/
document.addEventListener("keypress",function(event){
    makesound(event.key);
    Animation(event.key);
})
function makesound(key)
{
    switch(key)
    {
        case "w":
            var audio = new Audio("music album/crash.mp3"); // Correct path and case sensitivity
            audio.play();
            break;
        case "a":
            var audio = new Audio("music album/kick-bass.mp3"); // Correct path and case sensitivity
            audio.play();
            break;
        case "s":
            var audio = new Audio("music album/snare.mp3"); // Correct path and case sensitivity
            audio.play();
            break;
        case "d":
            var audio = new Audio("music album/tom-1.mp3"); // Correct path and case sensitivity
            audio.play();
            break;
        case "j":
            var audio = new Audio("music album/tom-2.mp3"); // Correct path and case sensitivity
            audio.play();
            break;
        case "k":
            var audio = new Audio("music album/tom-3.mp3"); // Correct path and case sensitivity
            audio.play();
            break;
        case "l":
            var audio = new Audio("music album/tom-4.mp3"); // Correct path and case sensitivity
            audio.play();
            break;
    }
}
function Animation(currentkey)
{
  
   var activebutton = document.querySelector("."+currentkey);
   activebutton.classList.add("pressed");
    setTimeout(function(){activebutton.classList.remove("pressed");},100);
}