import type { Card } from '$lib/types/netrunnerdb';
import { cards } from '$lib/types/cards';

// Shared state for the one card modal. Any component can open it.

let activeCard = $state<Card | null>(null);

export const cardModal = {
	get card() {
		return activeCard;
	},
	get open() {
		return activeCard !== null;
	}
};

export function openCardModal(card: Card) {
	activeCard = card;
}

export function closeCardModal() {
	activeCard = null;
}

// Notes links point to a card by its printing id, like <a href="/en/card/30034">.
// Build an index from printing id to Card so those links can open the modal.
const byPrintingId: Record<string, Card> = {};
for (const card of Object.values(cards)) {
	byPrintingId[card.attributes.latest_printing_id] = card;
}

/** Find the Card for a printing id. Returns undefined if there is no match. */
export function cardByPrintingId(printingId: string): Card | undefined {
	return byPrintingId[printingId];
}
