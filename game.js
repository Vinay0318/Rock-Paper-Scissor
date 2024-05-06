let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msgpara=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice = () => {
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx]
};

const drawGame=()=>{
    console.log("game was drawn");
    msgpara.innerText=" Try again! its drawn";
    msgpara.style.backgroundColor="purple";
}
const showWinner=(userWin,userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you Win");
        msgpara.innerText=`Hurray! ${userChoice} beats ${compChoice}`;
        msgpara.style.backgroundColor="Green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose");
        msgpara.innerText=` Oops! ${compChoice} beats  ${userChoice}`;
        msgpara.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
  console.log("user Choice",userChoice)
  const compChoice=genCompChoice();
  console.log("Comp Choice",compChoice);

  if(userChoice === compChoice)
  {
    drawGame();
  }
  else{
    let userWin=true;
    if(userChoice==="rock"){
        userWin=compChoice ==="paper"? false:true;
    }
    else if(userChoice==="paper"){
        userWin=compChoice==="scissors"?false:true;
    }
    else{
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice)
  }
};
choices.forEach((choice)=>
{
    choice.addEventListener("click",() =>
   { const userChoice =choice.getAttribute("id")
     playGame(userChoice)
})
})