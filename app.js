let userScore = 0;
let computerScore = 0;

const choices= document.querySelectorAll('.choice');
let msg=document.querySelector("#msg");
let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#computer-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx]; 
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice =choice.getAttribute("id");
        playGame(userChoice);
    })
});
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You WIN!!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        computerScore++;
        compScorePara.innerText=computerScore;
        msg.innerText=`You LOSE!!! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const drawGame=()=>{
    msg.innerText="Game Was Draw ! Try Again.";
    msg.style.backgroundColor="#454541";
}
const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    if(userChoice==compChoice){
        //draw game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin=compChoice=="paper"?false:true;
        }else if(userChoice=="paper"){
            userWin=compChoice=="scissors"?false:true;
        }else if(userChoice=="scissors"){
            userWin=compChoice=="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}