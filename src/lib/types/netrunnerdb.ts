// Types for the NetrunnerDB API v3. The API uses the JSON:API format.
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
	latest_printing_id: string;
	card_cycle_ids: string[];
	latest_printing_images: {
		nrdb_classic: NrdbImageSet;
	};
}

/** One card resource object. The cards endpoint returns this. */
export interface Card {
	id: string;
	type: 'cards';
	attributes: CardAttributes;
}

/** The response from the decklist's related cards link. It holds a list of card resources. */
export interface CardListResponse {
	data: Card[];
	meta: Record<string, unknown>;
}

/** The `attributes` object of a decklist resource. */
export interface DecklistAttributes {
	user_id: string;
	follows_basic_deckbuilding_rules: boolean;
	identity_card_id: string;
	name: string;
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

/** One decklist resource object. */
export interface DecklistResource {
	id: string;
	type: 'decklists';
	attributes: DecklistAttributes;
	relationships: Record<string, { links: { related: string } }>;
	links: { self: string };
}

/** The top-level response from `GET /decklists/{id}`. */
export interface DecklistResponse {
	data: DecklistResource;
	meta: Record<string, unknown>;
}
