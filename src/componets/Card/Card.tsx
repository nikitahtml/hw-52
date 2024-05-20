import React from 'react';

type CardProps = {
    rank: '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A';
    suit: 'diams' | 'hearts' | 'clubs' | 'spades';
};

const Card: React.FC<CardProps> = ({ rank, suit }) => {
    const suitSymbol: { [key: string]: string } = {
        diams: '♦',
        hearts: '♥',
        clubs: '♣',
        spades: '♠'
    };

    return (
        <span className={`card rank-${rank} ${suit}`}>
      <span className="rank">{rank}</span>
      <span className="suit">{suitSymbol[suit]}</span>
    </span>
    );
};

export default Card;
