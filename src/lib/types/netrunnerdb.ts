// Shapes for the bundled card and decklist data. These mirror the NetrunnerDB API v3
// records (JSON:API format) that the data in cards.ts and decklists.ts was sourced from.
// The app no longer fetches from the API; it ships this data statically.
// See https://api.netrunnerdb.com/api/v3/public/

// The image tiers the NRDB CDN serves for a printing. We store the tier names only.
// cardImageUrl in utils.ts builds each URL from the printing id.
export type CardImageTier = 'tiny' | 'small' | 'medium' | 'large' | 'xlarge' | 'narrative';

/** The `attributes` object of a card resource. Lists only the fields that this app uses. */
export interface CardAttributes {
	title: string;
	faction_id: string;
	card_type_id: string;
	/**
	 * The card's printed influence cost (out-of-faction "pips"). `null` for cards that
	 * have no influence value at all, such as agendas and identities.
	 */
	influence_cost: number | null;
	latest_printing_id: string;
	card_cycle_ids: string[];
	/** True when this printing has a wide "narrative" art variant. Most cards omit it. */
	has_narrative?: boolean;
	/** A custom note for this card. Shown under the card image in the modal. */
	notes?: string;
}

/** One card resource object. */
export interface Card {
	id: string;
	type: 'cards';
	attributes: CardAttributes;
}

/** The `attributes` object of a decklist resource. */
export interface DecklistAttributes {
	user_id: string;
	follows_basic_deckbuilding_rules: boolean;
	identity_card_id: string;
	name: string;
	nickname: string | null;
	tagline: string | null;
	notes: string | null;
	tags: string[] | null;
	side_id: string;
	created_at: string;
	updated_at: string;
	faction_id: string;
	/** A map. The key is a card id. The value is the number of copies in the deck. */
	card_slots: Record<string, number>;
	num_cards: number;
	influence_spent: number;
}
