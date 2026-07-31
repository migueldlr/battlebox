<script lang="ts">
	import type { Decklist } from '$lib/types/decklists';
	import type { Card } from '$lib/types/netrunnerdb';
	import { CARD_TYPE_ORDER } from '$lib/utils';
	import InfluencePips from './InfluencePips.svelte';
	import FactionIcon from '$lib/icons/FactionIcon.svelte';
	import CardImage from './ui/card-image/card-image.svelte';
	let { decklist, allCards }: { decklist: Decklist; allCards: Record<string, Card> } = $props();

	let open = $state(false);

	const idFaction = $derived(decklist.attributes.faction_id);

	const cards = $derived(
		Object.entries(decklist.attributes.card_slots).map(([cardId, count]) => ({
			card: allCards[cardId],
			count
		}))
	);

	const nonIdentityCards = $derived(
		cards.filter((card) => !card.card?.attributes.card_type_id.includes('identity'))
	);

	const groupedCards = $derived(
		nonIdentityCards.reduce(
			(acc, card) => {
				const type = card.card?.attributes.card_type_id;
				if (!acc[type]) {
					acc[type] = [];
				}
				acc[type].push(card);
				return acc;
			},
			{} as Record<string, typeof cards>
		)
	);

	const sortedGroupedCards = $derived(
		Object.entries(groupedCards).sort(
			(a, b) => CARD_TYPE_ORDER.indexOf(a[0]) - CARD_TYPE_ORDER.indexOf(b[0])
		)
	);

	$inspect(sortedGroupedCards);
</script>

<div class="decklist-view">
	<button type="button" class="w-full bg-white p-2 text-black" onclick={() => (open = !open)}
		>Open</button
	>
	{#if open}
		<div class="decklist-view-content">
			<p class="mb-2 text-muted-foreground">
				View the original list on <a
					href={`https://netrunnerdb.com/en/decklist/${decklist.id}`}
					target="_blank">NRDB</a
				>
			</p>
			<ul class="grid gap-2">
				{#each sortedGroupedCards as [type, cards]}
					<li class="text-lg font-bold">
						{type} ({cards.reduce((acc, card) => acc + card.count, 0)})
					</li>
					{#each cards as cardData}
						{@const count = cardData.count}
						{@const card = cardData.card}
						<li>
							<span class="text-sm text-muted-foreground">{count}x</span>
							<CardImage class="inline-block h-4 w-auto" {card} />
							{card?.attributes.title}
							<InfluencePips {card} {count} {idFaction} />
						</li>
					{/each}
				{/each}
			</ul>
		</div>
	{/if}
</div>
