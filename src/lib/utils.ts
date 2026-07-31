import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Card, CardImageTier } from '$lib/types/netrunnerdb';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const NRDB_IMAGE_URL = 'https://card-images.netrunnerdb.com/v2';

export const CARD_TYPE_ORDER = [
	'agenda',
	'asset',
	'operation',
	'upgrade',
	'ice',
	'event',
	'hardware',
	'resource',
	'program'
];

/**
 * Build the image URL for a printing at a given tier. The URL comes from the printing
 * id, so we do not store URLs per card. The pattern for each tier is:
 *   tiny | small | medium | large -> {base}/{tier}/{id}.jpg
 *   xlarge                          -> {base}/xlarge/{id}.webp
 *   narrative                       -> {base}/xlarge/{id}-narrative.webp
 */
export function cardImageUrl(printingId: string, tier: CardImageTier): string {
	if (tier === 'narrative') {
		return `${NRDB_IMAGE_URL}/xlarge/${printingId}-narrative.webp`;
	}
	if (tier === 'xlarge') {
		return `${NRDB_IMAGE_URL}/xlarge/${printingId}.webp`;
	}
	return `${NRDB_IMAGE_URL}/${tier}/${printingId}.jpg`;
}

export function getHighResImage(card: Card): string {
	return cardImageUrl(card.attributes.latest_printing_id, 'xlarge');
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, 'child'> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, 'children'> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };
