/*
1=rock
2=paper
3=scissors
*/
var player;
let computer;
var wincount = 0;
var losecount = 0;
var drawcount = 0;
const wintext = document.getElementById("win");
const losetext = document.getElementById("lose");
const drawtext = document.getElementById("draw");
const img = document.getElementById("img");
const resulttext = document.getElementById("resulttext");

function playerChoice(choosen){
    player = choosen;
    computerChoice();
}

function computerChoice(){
    const RandNum = Math.floor(Math.random() * 3) + 1;
    switch(RandNum){
        case 1: computer = 1;
        img.setAttribute("src","rock.png");
        img.setAttribute("class","imgstyle")
        break

        case 2: computer = 2;
        img.setAttribute("src","paper.png");
        img.setAttribute("class","imgstyle")
        break

        case 3: computer = 3;
        img.setAttribute("src","scissors.png")
        img.setAttribute("class","imgstyle")
        break  

    }
    checkWinner();
}

function checkWinner(){
    if(computer==player){
        drawcount += 1;
        drawtext.textContent = `Döntetlen: ${drawcount}`;
        resulttext.textContent = "Döntetlen!";
    }
    else if(computer == 1 && player == 3 || 
            computer == 2 && player == 1 ||
            computer == 3 && player == 2){
                wincount += 1;
                wintext.textContent = `Vesztettél: ${wincount}`;
                resulttext.textContent = "Vesztettél!";
            }
    else{
        losecount += 1;
        losetext.textContent = `Nyertél: ${losecount}`;
        resulttext.textContent = "Nyertél!";
    }
}