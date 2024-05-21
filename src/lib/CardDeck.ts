class Card {
    rank: string;
    suit: string;

    constructor(rank: string, suit: string) {
        this.rank = rank;
        this.suit = suit;
    }
}

class CardDeck {
    cards: Card[];

    constructor() {
        this.cards = [];
        const suits = ['diams', 'hearts', 'clubs', 'spades'];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];

        for (const suit of suits) {
            for (const rank of ranks) {
                const card = new Card(rank, suit);
                this.cards.push(card);
            }
        }
    }

    getCard(): Card {
        const randomIndex = Math.floor(Math.random() * this.cards.length);
        return this.cards.splice(randomIndex, 1)[0];
    }

    getCards(howMany: number): Card[] {
        const cards: Card[] = [];
        for (let i = 0; i < howMany; i++) {
            cards.push(this.getCard());
        }
        return cards;
    }
}

export { Card, CardDeck };