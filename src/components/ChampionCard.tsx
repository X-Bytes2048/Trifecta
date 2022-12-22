import React from 'react';

type CardProp = {
    name: 'mighty-miner' | 'archer-queen'
    width?: number;
}
export default class Card extends React.Component<CardProp> {

    render() {
        return (
            <img 
                src={`https://cdn.royaleapi.com/static/img/cards-150/${this.props.name}.png`}
                alt={this.props.name}
                style={{
                    maxWidth: 137.375,
                    maxHeight: 137.375*180/150,
                    transform: 'scale(1.05)',
                    float: 'left',
                    marginTop: -5
                }}
            ></img>
        )
    }
}
