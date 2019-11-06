import React, { useEffect }  from 'react';
import './Game.css';
import Board from './Board';
import UserInfo from '../UserInfo/userinfo'


const nSquareToWin = 5;
function checkWinner(squares){
    let win;
    let isEmpty = true;

    if (!squares) return null;
    for (let i = 0; i < squares.length; i+=1) {
        for (let j = 0; j < squares[i].length; j+=1) {
        if (!squares[i][j]) {
            isEmpty = true;
        }
        else {
            isEmpty = false;
        }
        if(isEmpty === false){
            if (j <= squares[i].length - nSquareToWin) {
                win = true;
                for (let k = 0; k < nSquareToWin - 1; k+=1) {
                    if (squares[i][j + k] !== squares[i][j + k + 1]) {
                        win = false
                    }
                }
                if (win)
                {
                    
                    return {val: squares[i][j], x: j, y: i, direction: 'ToRight'};
                }
            }
            if (i <= squares.length - nSquareToWin) {
                win = true;
                for (let k = 0; k < nSquareToWin - 1; k+=1) {
                    if (squares[i + k][j] !== squares[i + k + 1][j]) {
                        win = false
                    }
                }
                if (win) 
                {
                    
                    return {val: squares[i][j], x: j, y: i, direction: 'ToDown'};
                }
            }
            if (j <= squares[i].length - nSquareToWin && i <= squares.length - nSquareToWin) {
                win = true;
                for (let k = 0; k < nSquareToWin - 1; k+=1) {
                    if (squares[i + k][j + k] !== squares[i + k + 1][j + k + 1]) {
                        win = false
                    }
                }
                if (win) 
                {
                    
                    return {val: squares[i][j], x: j, y: i, direction: 'ToRightDown'};
                }
            }
            if (i <= squares.length - nSquareToWin && j >= nSquareToWin - 1) {
                win = true;
                for (let k = 0; k < nSquareToWin - 1; k+=1) {
                    if (squares[i + k][j - k] !== squares[i + k + 1][j - k - 1]) {
                        win = false
                    }
                }
                if (win)
                {
                    
                    return {val: squares[i][j], x: j, y: i, direction: 'ToLeftDown'};
                }
            }
        }
        }
    }
    return null;
}

const Main = ({ p_width, p_height, p_history, p_step, p_xIsNext, p_isDes,
    p_changeStep, p_autoClickSquare, p_clickSquare,currentuser })=>{

    const jumpTo = (step) => {
        p_changeStep(step);
    }
    
    const valueComputer = (i,j) => {
        const histories = p_history.slice(0,p_step+1);
        const current = histories[p_step];
        
        const squares = current.squares.slice();

        squares.map((row,idx)=>{
            squares[idx] = squares[idx].slice();
            return true;
        })
        
        // if exist value 
        if(squares[i][j] || checkWinner(squares)){
            return;
        }
        squares[i][j] = p_xIsNext.isNextPlayer ? 'X' : 'O';
        console.log('p_xIsNext.isNextPlayer 2',p_xIsNext.isNextPlayer);
        
        if(squares[i][j] === 'O'){
            p_clickSquare(histories.concat([{
                squares,
                location: {x: i, y: j}
            }]),false);
            
        }
    }

    const handleClick = (i,j) => {
        const histories = p_history.slice(0,p_step+1);
        const current = histories[p_step];
        
        const squares = current.squares.slice();

        squares.map((row,idx)=>{
            squares[idx] = squares[idx].slice();
            return true;
        })
        
        // if exist value 
        if(squares[i][j] || checkWinner(squares)){
            return;
        }
        squares[i][j] = p_xIsNext.isNextPlayer ? 'X' : 'O';
        
        console.log('p_xIsNext.isNextPlayer',p_xIsNext.isNextPlayer);

        if(squares[i][j] === 'X'){
            p_clickSquare(histories.concat([{
                squares,
                location: {x: i, y: j}
            }]),true);
            
        }
        
    }
    
    useEffect(() => {
        
        // const res = valueComputer(Math.floor(Math.random()*20),Math.floor(Math.random()*20))
        
            valueComputer(Math.floor(Math.random()*20),Math.floor(Math.random()*20))
        
    })
    // const sortBy = () => {
    //     p_sortMoves(!p_isDes)
    // }

    const history = p_history;
    const current = history[p_step];
    const winCheck = checkWinner(current.squares);
    const moves = history.map((step, move) => {
        const desc = move ?
            `Step #  ${move}   Location (  ${step.location.x}  ,  ${step.location.y}  ) `:
            ` Reset Game`;

        return (p_step === move) ? (
            <li key = {move.toString()}>
                <button type="button" className="btn btn-info" onClick={() =>{jumpTo(move);}}>{desc}</button>
            </li>
        ) : (
            <li key={move.toString()}>
            <button type ="button" className="btn btn-dark"onClick={() => jumpTo(move)}>{desc}</button>
        </li>
        );
    });
    
    let status = null;
    if(winCheck){
        status = `Winner:  ${winCheck.val}`;

    } else {
        status = `Next player: ${(p_xIsNext.isNextPlayer ? 'X' : 'O')}`;
    }
    return (
        <div>
            <div className="intro_computer">
                Play with Computer - <strong style={{color:"red"}}>Player O</strong>
            </div>
            <div className="turn_next">
                {status}
            </div>
            <div className="user_info">
                <UserInfo currentuser = {currentuser}/>
            </div>
            <div className="main-content">
                <div className="game">
                    <div className="game-board">
                        <Board
                        squares = {current.squares}
                        onClick={
                            (i,j)=> handleClick(i,j)
                        }
                        
                        winner = {winCheck}
                    />
                    
                    </div>
                    <div className="game-info">
                    
                        <ol>{moves.reverse()}</ol>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Main;
// ================================

