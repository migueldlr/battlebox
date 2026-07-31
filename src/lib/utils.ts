import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Card } from '$lib/types/netrunnerdb';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const NRDB_IMAGE_URL = 'https://card-images.netrunnerdb.com/v2';

// Cycles from Null Signal Games. These cycles have hi-res xlarge webp art.
const NSG_CARD_CYCLES = ['elevation', 'liberation', 'borealis', 'ashes', 'system_gateway'];

/**
 * Get one image URL for a card at the given tier.
 * For an NSG-cycle card, use the NSG hi-res webp.
 * For any other card, use the classic image set. If the tier is missing, fall back to `large`.
 */
export function getHighResImage(
	card: Card,
	size: 'small' | 'medium' | 'large' | 'xlarge' = 'large'
): string {
	const printingId = card.attributes.latest_printing_id;

	// An NSG-cycle card has an xlarge webp. Use it for the sharpest art. Ignore the given tier.
	if (card.attributes.card_cycle_ids.some((cycle) => NSG_CARD_CYCLES.includes(cycle))) {
		return `${NRDB_IMAGE_URL}/xlarge/${printingId}.webp`;
	}

	const classic = card.attributes.latest_printing_images?.nrdb_classic;
	if (!classic) {
		return `${NRDB_IMAGE_URL}/large/${printingId}.jpg`;
	}

	return classic[size] || classic.large || `${NRDB_IMAGE_URL}/large/${printingId}.jpg`;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, 'child'> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, 'children'> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };
