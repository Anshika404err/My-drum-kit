var num = document.querySelectorAll(".drum").length;

for(var i=0;i<num;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){//this event listener added only to the first button 
    this.style.color="white";
   var buttonInnerHTML = this.innerHTML; //retrieves content inside button 

   makesound(buttonInnerHTML);
   buttonAnimation(buttonInnerHTML);
 
});
}
//detecting keyboard press
document.addEventListener("keypress",function(event){
     makesound(event.key); //key property of event
     buttonAnimation(event.key);
});

function makesound(key){
  switch(key){
    case "w":
      var tom1=new Audio("sounds/crash.mp3");
      tom1.play();
      break;
      case "a":
        var kick= new Audio("sounds/kick.mp3");
        kick.play();
          break;
      case "s":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "d":
        var tom_1= new Audio("sounds/tom-1.mp3");
        tom_1.play();
        break;
      case "j":
        var tom_2 = new Audio("sounds/tom2.mp3");
        tom_2.play();
        break;
      case "k":
        var tom_3 = new Audio("sounds/tom3.mp3");
        tom_3.play();
        break;
      case "l":
        var tom_4 = new Audio("sounds/tom4.mp3");
        tom_4.play();
        break;
        default:console.log(buttonInnerHTML);
  }
}
//Adding animation to website
function buttonAnimation(currKey){
      var active_button = document.querySelector("."+currKey);
      active_button.classList.add("pressed");
      //removing so the shadow which got applied because of clicking the drum
      setTimeout(function(){
          active_button.classList.remove("pressed");
      },100);
}