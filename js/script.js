//need gameboard module to set up grid and methods to check for win conditions
const gameBoard = (() => {
    let moveCount = 0;
    let currentPlayer = "X";
    const board = document.querySelectorAll(".board > .row > div");

    const initializeBoard = (boardNodes) => {
        boardNodes.forEach(node => {
            node.addEventListener("click", () => {
                moveCount++;
                node.innerHTML = currentPlayer;
                updateBoardState(node.id, currentPlayer);
                if (currentPlayer === "X") {
                    currentPlayer = "O";
                } else {
                    currentPlayer = "X";
                }
                
                const result = checkWin(boardState);
                if (result) {
                    if (result === "Tie"){
                        alert("It's a Tie!");
                    } else {
                        alert(result + "Wins!");
                    }
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

        if (topL === topM && topL === topR) {
            if (topL != null){
                return topL;
            }
        }
        if (midL === midM && midL === midR) {
            if (midL != null){
                return midL;
            }
        }
        if (botL === botM && botL === botR) {
            if (botL != null){
                return botL;
            }
        }
        if (topL === midL && topL === botL) {
            if (topL != null){
                return topL;
            }
        }
        if (topM === midM && topM === botM) {
            if (topM != null){
                return topM;
            }
        }
        if (topR === midR && topR === botR) {
            if (topR != null){
                return topR;
            }
        }
        if (topL === midM && topL === botR) {
            if (topL != null){
                return topL;
            }
        }
        if (topR === midM && topR === botL) {
            if (topR != null){
                return topR;
            }
        }
        if (moveCount === 9){
            return "Tie";
        } else {
            return false;
        }
    };

    return {
        board,
        initializeBoard,
        boardState,
        updateBoardState,
        checkWin
    }
})();

window.onload = gameBoard.initializeBoard(gameBoard.board);