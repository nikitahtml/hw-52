import './App.css'
import Card from "./componets/Card/Card.tsx";
import { CardDeck } from './lib/CardDeck';


const App: React.FC = () => {
    const deck = new CardDeck();

    const randomCard = deck.getCard();

    const randomCards = deck.getCards(5);

    return (
        <div className="playingCards faceImages">
            <h1>Card Deck Example</h1>
            <h2>Single Random Card</h2>
            <Card rank={randomCard.rank} suit={randomCard.suit}/>
            <h2>Five Random Cards</h2>
            <div>
                {randomCards.map((card, index) => (
                    <Card key={index} rank={card.rank} suit={card.suit}/>
                ))}
            </div>

        </div>
    );
};

export default App;