import React from "react";
import Card from './Card';
import ChampionCard from './ChampionCard';

type DeckProps = {
  cards: string[];
}

export default class Deck extends React.Component<DeckProps> {

  render() {
    return (
      <div style={{
        backgroundColor: '#ddd',
        padding: 10,
        borderRadius: 10,
        width: 137.375*4,
        height: 137.375*180/150*2
      }}>
        {
          this.props.cards.map((card) => {
            return card === 'mighty-miner' ? <ChampionCard name={card}></ChampionCard> : <Card name={card}></Card> 
          })
        }
      </div>
    )
  }
}