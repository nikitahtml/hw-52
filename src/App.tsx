import React, { useState } from 'react';
import Card from "./componets/Card/Card.tsx";
import { CardDeck } from './lib/CardDeck';

import PokerHand from './lib/PokerHand';

interface ICard {
    rank: string;
    suit: 'diams' | 'hearts' | 'clubs' | 'spades';
}

const App: React.FC = () => {
    const [cards, setCards] = useState<ICard[]>([]);

    const dealCards = () => {
        const deck = new CardDeck();
        const dealtCards = deck.getCards(5);
        setCards(dealtCards);
        const hand = new PokerHand(dealtCards);
        console.log("Current hand: ", hand.getOutcome());
    };

    return (
        <div>
            <h1>Card Deck Example</h1>
            <button onClick={dealCards}>Deal Cards</button>
            {cards.length > 0 && (
                <div className="playingCards faceImages">
                    {cards.map((card, index) => (
                        <Card key={index} rank={card.rank} suit={card.suit} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default App;