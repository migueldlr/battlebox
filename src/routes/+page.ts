import type { PageLoad } from './$types';
import { decklistData } from '$lib/types/decklists';

export const load: PageLoad = async () => {
	return { decklistData };
};
