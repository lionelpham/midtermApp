import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square';

const nSquareToWin = 5;
const RowOfSquare = ({isComputer, row,winner,rowIdx,onClick }) =>{

    const squareRow = row.map((square,idx)=>{
        
        const k = `"s" + ${idx}`;
        let win = false;
        if (winner) {
            if (winner.direction === "ToRight" &&
                idx >= winner.x && idx <= winner.x + nSquareToWin - 1 && rowIdx === winner.y) {
                win = true;
            }
            if (winner.direction === "ToDown" &&
                rowIdx >= winner.y && rowIdx <= winner.y + nSquareToWin - 1 && idx === winner.x) {
                win = true;
            }
            if (winner.direction === "ToRightDown" &&
                idx >= winner.x && idx <= winner.x + nSquareToWin - 1 && idx - winner.x === rowIdx - winner.y) {
                win = true;
            }
            if (winner.direction === "ToLeftDown" &&
                idx <= winner.x && idx >= winner.x - nSquareToWin + 1 && winner.x - idx === rowIdx - winner.y) {
                win = true;
            }
        }
        return (
            <Square
                win={win}
                value = {square}
                onClick = {()=>{
                    onClick(rowIdx,idx)}}
                key={k}
                isComputer = {isComputer}
            />
        )
    })
    return (
        <div className="board-row">
            {squareRow}
        </div>
    );
}

RowOfSquare.propTypes = {
    row: PropTypes.array.isRequired,
    rowIdx: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}

export default RowOfSquare;