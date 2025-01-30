const buttons=document.querySelectorAll(".button");
const resetbtn=document.querySelector(".reset");
const winningPattern=[[1,2,3],[4,5,6],[7,8,9],[1,5,9],[1,4,7],[2,5,8],[3,6,9],[3,5,7]];
let turn=true;
//true for O false for X
buttons.forEach((button)=>{
  button.addEventListener("click",()=>{
    if(turn){
      turn=false;
      console.log("Button is pressed");
      button.innerHTML="O";
    }
    else{
      turn=true;
      console.log("Button is pressed");
      button.innerHTML="X";
    }button.disabled=true;
  })
})

resetbtn.addEventListener("click",()=>{
  buttons.forEach((button)=>{
    button.innerHTML="";
  })
})

