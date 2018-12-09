import React from 'react';
import Cell from './Cell';
import GameParams from './GameParams';

class GameBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cells: Array(9).fill(null),
            //lastCells: Array(9).fill(null),
            isNext: true
        };
    }
    
    renderCell(i) {
        return <Cell value={this.state.cells[i]} onClick={() => this.handleClick(i)} />
    }

    renderParams(i) {
        //return <GameParams onChange={this.getNameValues()} />
    }
    
    getNameValues() {
        console.log("coucou")
    }

    handleClick(i) {
        const cells = this.state.cells.slice();
        if (calculateWinner(cells) || cells[i]) {
            return;
        }
        
        cells[i] = this.state.isNext ? 'X' : 'O';
        this.setState({
            cells: cells,
            isNext: !this.state.isNext
        });
    }

    /*
    undo() {
        this.setState({
            lastCell: this.state.cells
        });
    } */

    render() {
        console.log(this.props);
        let gameStatus;
        const winner = calculateWinner(this.state.cells);
        if (winner === "X") {
            gameStatus = 'Le joueur 1 a gagné !';
        } else if (winner === "O") {
            gameStatus = 'Le joueur 2 a gagné !';
        } else if (winner === "END") {
            gameStatus = 'Match-nul';
        } else {
            gameStatus = 'Au joueur ' + (this.state.isNext ? "1" : "2") + " de jouer";
        }

        return (
            <div>
                {this.renderParams()}
                <div className="gameStatus">{gameStatus}</div>
                <div className="board-row">
                    {this.renderCell(0)}
                    {this.renderCell(1)}
                    {this.renderCell(2)}
                </div>
                <div className="board-row">
                    {this.renderCell(3)}
                    {this.renderCell(4)}
                    {this.renderCell(5)}
                </div>
                <div className="board-row">
                    {this.renderCell(6)}
                    {this.renderCell(7)}
                    {this.renderCell(8)}
                </div><br/>
                <div className="btnRestart"><button onClick={() => window.location.reload()}>Relancer</button></div>
            </div>
        );
    }
}

function calculateWinner(cells) {
    let filled = [];
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            return cells[a];
        }
        if (cells[i] != null) {
            console.log("Cells with val: ", i);
            filled.push(i);
            if (filled.length === 8) {
                return "END";
            }
        }
    }

    return null;
}

export default GameBoard