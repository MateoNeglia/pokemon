import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {

    render(){
        let pokeResult;
        if (this.props.isWinner) {
            pokeResult = <h1 className='Pokedex-winner'>Winning Hand</h1>;
        } else {
            pokeResult = <h1 className='Pokedex-loser'>Losing Hand</h1>;
        }

        return (
            <div className = 'Pokedex'>
                {pokeResult}
                <h3>Total EXP: {this.props.exp}</h3>                
                <div className='Pokedex-cards'>
                {this.props.pokemon.map((p) => (
                    <Pokecard id= {p.id}
                              name= {p.name}
                              type= {p.type}
                              base_experience= {p.base_experience}
                    />
                ))}
                </div>
                
            </div>
        )
    }
}

export default Pokedex;