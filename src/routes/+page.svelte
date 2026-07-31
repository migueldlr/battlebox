<script lang="ts">
	import { type CarouselAPI } from '$lib/components/ui/carousel/context.js';
	import * as Carousel from '$lib/components/ui/carousel';
	import CardImage from '$lib/components/ui/card-image/card-image.svelte';
	import type { PageData } from './$types';
	import DecklistView from '$lib/components/DecklistView.svelte';
	import { cards as allCards } from '$lib/types/cards';
	import FactionIcon from '$lib/icons/FactionIcon.svelte';

	let { data }: { data: PageData } = $props();

	let api = $state<CarouselAPI>();
	let activeIndex = $state(0);
	let selectedDecklist = $derived(data.decklistData[activeIndex]);

	$effect(() => {
		if (api) {
			api.on('select', () => {
				activeIndex = api?.selectedScrollSnap() ?? 0;
			});
		}
	});
</script>

<h1 class="mb-2">The Netrunner Core Battle Box</h1>
<p class="mb-4 text-muted-foreground">
	Originally created by <a
		href="https://cardgamer.com/features/introducing-the-netrunner-core-battle-box/"
		target="_blank">lunari</a
	>
</p>

<Carousel.Root
	setApi={(emblaApi) => (api = emblaApi)}
	opts={{ loop: true }}
	class="-mx-2 mb-8 md:mx-0"
>
	<Carousel.Content>
		{#each data.decklistData as decklist, index (decklist.attributes.name)}
			<Carousel.Item
				class="basis-4/5 cursor-pointer transition-opacity md:basis-75 {activeIndex === index
					? 'opacity-100'
					: 'opacity-20'}"
				onclick={() => api?.scrollTo(index)}
			>
				<CardImage card={allCards[decklist.attributes.identity_card_id]} />
			</Carousel.Item>
		{/each}
	</Carousel.Content>
</Carousel.Root>

<section class="decklist">
	<h3>
		<FactionIcon faction={selectedDecklist.attributes.faction_id} />
		{selectedDecklist.attributes.nickname}
		- {selectedDecklist.attributes.tagline}
	</h3>
	<DecklistView decklist={selectedDecklist} {allCards} />
	{#if selectedDecklist.attributes.notes}
		<div class="notes">{@html selectedDecklist.attributes.notes}</div>
	{/if}
</section>

<style>
	.notes {
		max-width: 65ch;
		margin-top: 1.5rem;
		font-size: 1rem;
		line-height: 1.7;
		color: var(--foreground);
	}

	.notes :global(p) {
		margin-bottom: 1rem;
	}

	.notes :global(p:last-child) {
		margin-bottom: 0;
	}

	.notes :global(strong) {
		font-weight: 700;
		color: var(--foreground);
	}

	.notes :global(a) {
		font-weight: 500;
		text-decoration-thickness: 1px;
		text-underline-offset: 2px;
	}

	@media (max-width: 640px) {
		.notes {
			font-size: 0.9375rem;
			line-height: 1.65;
		}
	}
</style>
