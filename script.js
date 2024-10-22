let board = document.getElementById("board");
let prev = document.getElementById("prev");
let show = document.getElementById("show");
let next = document.getElementById("next");

let gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

let state = [];

let moves = 0;

let playerTurn1 = true;

function createBoard(){
    for(let i = 0; i < 9; i++){
        let tictactoeGrid = document.createElement("div");
        tictactoeGrid.classList.add("tictactoeBox");
        let gridId = `box${i}`;
        tictactoeGrid.setAttribute("id", gridId);
        board.appendChild(tictactoeGrid);
        tictactoeGrid.addEventListener("click", () => {
            addMove(gridId, i);
        });
    }
}

function addMove(element, boxNumber){
    moves++;
    let specificGrid = document.getElementById(element);
    // if grid is empty
    if(!specificGrid.textContent){
        if(playerTurn1){
            specificGrid.textContent = "X";
            playerTurn1 = false;
        } else {
            specificGrid.textContent = "O";
            playerTurn1 = true;
        }
    }
    updateBoard(specificGrid, boxNumber);
}

function updateBoard(element, boxNumber){
    // 8
    // row 2 
    // column 2
    // Math.floor(8/3) = 2
    // 8%3 = 2

    // 4
    // row 1 
    // column 1
    // Math.floor(4/3) = 1
    // 4%3 = 1 

    let row = Math.floor(boxNumber/3);
    let column = boxNumber%3;
    gameBoard[row][column] = element.innerText;
    // console.log(gameBoard);
    updateState(gameBoard);
}

function updateState(boardCopy){
    // copying the board to a new array
    const newBoard = [];
    for(let i = 0; i< boardCopy.length; i++){
        const row = [];
        for(let j = 0; j < boardCopy[i].length; j++){
            row.push(boardCopy[i][j]);
        }
        newBoard.push(row);
    }
    // keeping track of the copy
    state.push(newBoard);
    console.log(state);
    checkWinner();
}



function checkWinner(){
    // check winner
    //horizontal 
    if(
        gameBoard[0][0] == "X" && 
        gameBoard[0][1] == "X" && 
        gameBoard[0][2] == "X" )
        {window.alert("x won"); document.getElementById("show").style.display = "block";
   }

   if(
    gameBoard[1][0] == "X" && 
    gameBoard[1][1] == "X" && 
    gameBoard[1][2] == "X" )
    {window.alert ("x won");document.getElementById("show").style.display = "block";
}

if(
    gameBoard[2][0] == "X" && 
    gameBoard[2][1] == "X" && 
    gameBoard[2][2] == "X" )
    {window.alert ("x won");document.getElementById("show").style.display = "block";
}

// cross 
if(
    gameBoard[0][0] == "X" && 
    gameBoard[1][1] == "X" && 
    gameBoard[2][2] == "X" )
    {window.alert("x won");document.getElementById("show").style.display = "block";
}


if(
    gameBoard[0][2] == "X" && 
    gameBoard[1][1] == "X" && 
    gameBoard[2][0] == "X" )
    {window.alert ("x won");document.getElementById("show").style.display = "block";
}

//straight vertical 
if(
    gameBoard[0][0] == "X" && 
    gameBoard[1][0] == "X" && 
    gameBoard[2][0] == "X" )
    {window.alert ("x won");document.getElementById("show").style.display = "block";
}
if(
    gameBoard[0][1] == "X" && 
    gameBoard[1][1] == "X" && 
    gameBoard[2][1] == "X" )
    {window.alert ("x won");document.getElementById("show").style.display = "block";
}

if(
    gameBoard[0][2] == "X" && 
    gameBoard[1][2] == "X" && 
    gameBoard[2][2] == "X" )
    {window.alert ("x won");document.getElementById("show").style.display = "block";
}

//"o"

if(
    gameBoard[0][0] == "O" && 
    gameBoard[0][1] == "O" && 
    gameBoard[0][2] == "O" )
    { window.alert ("o won");document.getElementById("show").style.display = "block";
}

if(
    gameBoard[1][0] == "O" && 
    gameBoard[1][1] == "O" && 
    gameBoard[1][2] == "O" )
{ window.alert ("o won");document.getElementById("show").style.display = "block";
}

if(
    gameBoard[2][0] == "O" && 
    gameBoard[2][1] == "O" && 
    gameBoard[2][2] == "O" )
{ window.alert("o won");document.getElementById("show").style.display = "block";
}

// cross 
if(
    gameBoard[0][0] == "O" && 
    gameBoard[1][1] == "O" && 
    gameBoard[2][2] == "O" )
{window.alert ("o won");document.getElementById("show").style.display = "block";
}


if(
    gameBoard[0][2] == "O" && 
    gameBoard[1][1] == "O" && 
    gameBoard[2][0] == "O" )
{ window.alert ("o won");document.getElementById("show").style.display = "block";
}

//straight vertical 
if(
    gameBoard[0][0] =="O" && 
    gameBoard[1][0] == "O" && 
    gameBoard[2][0] == "O" )
{window.alert ("o won");document.getElementById("show").style.display = "block";
}
if(
    gameBoard[0][1] == "O" && 
    gameBoard[1][1] == "O" && 
    gameBoard[2][1] == "O" )
{ window.alert ("o won");document.getElementById("show").style.display = "block";
}

if(
    gameBoard[0][2] == "O" && 
    gameBoard[1][2] == "O" && 
    gameBoard[2][2] == "O" )
{ window.alert ("o won");document.getElementById("show").style.display = "block";
}

else if (moves == 9) { window.alert("It's a tie!");document.getElementById("show").style.display = "block";

}

}; 
 



function reflectBoard(index){
    let tempBoard = state[index];
    let moveString = [];
    for(let i = 0; i < tempBoard.length; i++){
        for(let j = 0; j < tempBoard[i].length; j++){
            moveString.push(tempBoard[i][j]);
        }
    }

    for(let grid = 0; grid < moveString.length; grid++){
        document.getElementById(`box${grid}`).textContent = moveString[grid];
    }
}

//==============================

function resetBoard(){
 
    
    for(let grid = 0; grid < 9; grid++){
        document.getElementById(`box${grid}`).textContent = "" }
    }; 

 // ==============================
function erase(){

    //1st row 
    if(
        gameBoard[0][0] == "X" ||  
        gameBoard[0][0] == "O"
        )
        {gameBoard[0][0]=" "
   }

   if(
    gameBoard[0][1] == "X" ||  
    gameBoard[0][1] == "O"
    )
    {gameBoard[0][1]=" "
}

if(
    gameBoard[0][2] == "X" ||  
    gameBoard[0][2] == "O"
    )
    {gameBoard[0][2]=" "
}

 //2nd row 

 if(
    gameBoard[1][0] == "X" ||  
    gameBoard[1][0] == "O"
    )
    {gameBoard[1][0]=" "
}

if(
    gameBoard[1][1] == "X" ||  
    gameBoard[1][1] == "O"
    )
    {gameBoard[1][1]=" "
}

if(
    gameBoard[1][2] == "X" ||  
    gameBoard[1][2] == "O"
    )
    {gameBoard[1][2]=" "
}

//3rd row 

if(
    gameBoard[2][0] == "X" ||  
    gameBoard[2][0] == "O"
    )
    {gameBoard[2][0]=" "
}

if(
    gameBoard[2][1] == "X" ||  
    gameBoard[2][1] == "O"
    )
    {gameBoard[2][1]=" "
}

if(
    gameBoard[2][2] == "X" ||  
    gameBoard[2][2] == "O"
    )
    {gameBoard[2][2]=" "
}

}





//=============================================
prev.addEventListener("click", () => reflectBoard(7) );
reset.addEventListener("click",() => resetBoard());
next.addEventListener("click",() => reflectBoard(8));

function hide() {
    if (show.style.display === "block") {
      show.style.display = "none";
    } 
    }; 
    

createBoard();










