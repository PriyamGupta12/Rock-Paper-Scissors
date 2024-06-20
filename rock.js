let userScore=0;
letcompScore=0;

let user = document.querySelector("#user-score");
let comp = document.querySelector("#comp-score");

let msg = document.querySelector("#msg");

generateComputerChoice=()=>{
    let options = ["rock", "paper", "scissors"];
    let randomInd= Math.floor(Math.random()*3);
    return options[randomInd];
}

drawGame=()=>{
    console.log("The game was a draw");
    msg.innerText="DRAW!!";
}

showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        console.log("You Win!!")
        msg.innerText= `You Won!!   Your ${userChoice} beats ${compChoice}`;
        user.innerText++;
    }else{
        msg.innerText = `You Lost   ${compChoice} beats Your ${userChoice}`;
        console.log("Computer Won");
        comp.innerText++;
    }
}

const playGame = (userChoice)=>{
    console.log("User's Choice = ", userChoice);
    //Generate Computer choice
    let compChoice= generateComputerChoice();
    console.log("Computer's Choice = ", compChoice);
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            if(compChoice==="paper"){
                userWin=false;
            }else{}
        }else if(userChoice==="paper"){
            if(compChoice==="scissors"){
                userWin=false;
            }else{}
        }else{
            if(compChoice==="rock"){
                userWin=false;
            }else{}
        }
        showWinner(userWin, userChoice, compChoice);
    }

}

const choices= document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const UserChoice = choice.getAttribute("id");
        console.log("choice was clicked", UserChoice);
        playGame(UserChoice);
    })
});



