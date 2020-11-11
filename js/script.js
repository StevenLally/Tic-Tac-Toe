//need gameboard module to set up grid and methods to check for win conditions
const gameBoard = (() => {
    let moveCount = 0;
    let currentPlayer = "X";
    let gameOver = false;
    const board = document.querySelectorAll(".board > .row > div");

    const initializeBoard = (boardNodes) => {
        boardNodes.forEach(node => {
            node.addEventListener("click", () => {
                if (!gameOver){
                    moveCount++;
                    node.innerHTML = currentPlayer;
                    updateBoardState(node.id, currentPlayer);
                    if (currentPlayer === "X") {
                        currentPlayer = "O";
                    } else {
                        currentPlayer = "X";
                    }
                    
                    setTimeout(() => checkWin(boardState), 500);
                }
            });
        });
    };

    const boardState = [
        {id: "1", value: null},
        {id: "2", value: null},
        {id: "3", value: null},
        {id: "4", value: null},
        {id: "5", value: null},
        {id: "6", value: null},
        {id: "7", value: null},
        {id: "8", value: null},
        {id: "9", value: null}
    ];

    const updateBoardState = (id, value) => {
        const square = boardState.findIndex(obj => obj.id === id);
        boardState[square].value = value;
    }

    const checkWin = (boardArr) => {
        const topL = boardArr[0].value;
        const topM = boardArr[1].value;
        const topR = boardArr[2].value;
        const midL = boardArr[3].value;
        const midM = boardArr[4].value;
        const midR = boardArr[5].value;
        const botL = boardArr[6].value;
        const botM = boardArr[7].value;
        const botR = boardArr[8].value;
        let winner = null;

        if (topL === topM && topL === topR) {
            if (topL != null){
                winner = topL;
            }
        }
        if (midL === midM && midL === midR) {
            if (midL != null){
                winner = midL;
            }
        }
        if (botL === botM && botL === botR) {
            if (botL != null){
                winner = botL;
            }
        }
        if (topL === midL && topL === botL) {
            if (topL != null){
                winner = topL;
            }
        }
        if (topM === midM && topM === botM) {
            if (topM != null){
                winner = topM;
            }
        }
        if (topR === midR && topR === botR) {
            if (topR != null){
                winner = topR;
            }
        }
        if (topL === midM && topL === botR) {
            if (topL != null){
                winner = topL;
            }
        }
        if (topR === midM && topR === botL) {
            if (topR != null){
                winner = topR;
            }
        }

        if (winner != null){
            alert(winner + " Wins!");
            gameOver = true;
        } else if (moveCount === 9){
            alert("It's a Tie!");
            gameOver = true;
        } 
    };

    const resetBoard = () => {
        moveCount = 0;
        currentPlayer = "X";
        gameOver = false;
        boardState.forEach(obj => {
            obj.value = null;
        });
        board.forEach(node => {
            node.innerHTML = "";
        })
    };

    return {
        board,
        initializeBoard,
        boardState,
        updateBoardState,
        checkWin,
        resetBoard
    }
})();

const resetButton = document.querySelector(".reset-btn");
resetButton.addEventListener("click", gameBoard.resetBoard);

window.onload = gameBoard.initializeBoard(gameBoard.board);