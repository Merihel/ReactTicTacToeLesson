import React from 'react';

class GameParams extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            player1: "J1",
            player2: "J2"
        }
    }

    setPlayerName(playerName, isPlayer1) {
        if (isPlayer1) {
            this.setState({
                player1: playerName
            }, () => {
                console.log(this.state.player1);  
            });
        } else {
            this.setState({
                player2: playerName
            }, () => {
                console.log(this.state.player2);
            });
        }
    }

    render() {
        return (
            <div>
                <label className="playerLab">Joueur 1</label>
                <input type="text" id="player1inp" defaultValue={this.state.player1} onChange={e => this.setPlayerName(e.currentTarget.value, true) } /><br/>
                <label className="playerLab">Joueur 2</label>
                <input type="text" id="player2inp" defaultValue={this.state.player2} onChange={e => this.setPlayerName(e.currentTarget.value, false) } />
            </div>
        )
    }
}

export default GameParams