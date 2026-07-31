// Shapes for the bundled card and decklist data. These mirror the NetrunnerDB API v3
// records (JSON:API format) that the data in cards.ts and decklists.ts was sourced from.
// The app no longer fetches from the API; it ships this data statically.
// See https://api.netrunnerdb.com/api/v3/public/

// The art tiers that the NRDB image CDN serves for a printing.
// tiny, small, medium, and large are jpgs. Every card record has them.
// xlarge and narrative are webps. Only NSG-era printings have them.
// The API does not send the missing keys. Each field is optional. The caller must
// handle a missing field.
export interface NrdbImageSet {
	tiny?: string;
	small?: string;
	medium?: string;
	large?: string;
	xlarge?: string;
	narrative?: string;
}

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
	latest_printing_images: {
		nrdb_classic: NrdbImageSet;
	};
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
