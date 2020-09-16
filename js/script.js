//need gameboard module to set up grid and methods to check for win conditions
const gameBoard = (() => {
    const board = [
        {id: 1, value: null},
        {id: 2, value: null},
        {id: 3, value: null},
        {id: 4, value: null},
        {id: 5, value: null},
        {id: 6, value: null},
        {id: 7, value: null},
        {id: 8, value: null},
        {id: 9, value: null}
    ];

    const winConditions = (boardArr) => {
        switch(boardArr) {
            case (boardArr[0].value === boardArr[1].value && boardArr[0].value === boardArr[2].value):
                return true;
            case (boardArr[3].value === boardArr[4].value && boardArr[3].value === boardArr[5].value):
                return true;
            case (boardArr[6].value === boardArr[7].value && boardArr[6].value === boardArr[8].value):
                return true;
            case (boardArr[0].value === boardArr[3].value && boardArr[0].value === boardArr[6].value):
                return true;
            case (boardArr[1].value === boardArr[4].value && boardArr[1].value === boardArr[7].value):
                return true;
            case (boardArr[2].value === boardArr[5].value && boardArr[2].value === boardArr[8].value):
                return true;
            case (boardArr[0].value === boardArr[4].value && boardArr[0].value === boardArr[8].value):
                return true;
            case (boardArr[2].value === boardArr[4].value && boardArr[2].value === boardArr[6].value):
                return true;
            default:
                return false;
        }
    };
})();

//module for handling HTML changes