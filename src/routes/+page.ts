import type { PageLoad } from './$types';
import { decklistData } from '$lib/types/decklists';
import { cards } from '$lib/types/cards';

export const load: PageLoad = async () => {
	const resolved = decklistData.map(({ attributes, card_ids }) => ({
		attributes,
		cards: card_ids.map((id) => cards[id])
	}));

	return { decklistData: resolved };
};
