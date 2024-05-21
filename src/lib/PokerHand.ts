
import Card from "./componets/Card";

class PokerHand {
    cards: Card[];

    constructor(cards: Card[]) {
        this.cards = cards;
    }

    getOutcome(): string {
        const ranks: { [key: string]: number } = {};
        const suits: { [key: string]: number } = {};

        for (const card of this.cards) {
            ranks[card.rank] = (ranks[card.rank] || 0) + 1;
            suits[card.suit] = (suits[card.suit] || 0) + 1;
        }

        const numRanks = Object.keys(ranks).length;
        const numSuits = Object.keys(suits).length;

        const isFlush = numSuits === 1;
        const isStraight = numRanks === 5 && Math.max(...Object.values(ranks)) === 1;

        if (isFlush && isStraight) return 'Straight Flush';
        if (isFlush) return 'Flush';
        if (isStraight) return 'Straight';
        if (numRanks === 2) return 'Full House';
        if (numRanks === 3 && Object.values(ranks).includes(3)) return 'Three of a Kind';
        if (numRanks === 3) return 'Two Pairs';
        if (numRanks === 4) return 'One Pair';

        return 'High Card';
    }
}

export default PokerHand;