<script lang="ts">
	import { type CarouselAPI } from '$lib/components/ui/carousel/context.js';
	import * as Carousel from '$lib/components/ui/carousel';
	import CardImage from '$lib/components/ui/card-image/card-image.svelte';
	import type { PageData } from './$types';

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

<h1>The Netrunner Core Battle Box</h1>

<Carousel.Root setApi={(emblaApi) => (api = emblaApi)} opts={{ loop: true }}>
	<Carousel.Content>
		{#each data.decklistData as { attributes, cards }, index (attributes.name)}
			<Carousel.Item
				class="basis-4/5 cursor-pointer transition-opacity md:basis-75 {activeIndex === index
					? 'opacity-100'
					: 'opacity-50'}"
				onclick={() => api?.scrollTo(index)}
			>
				<CardImage card={cards.find((card) => card.id === attributes.identity_card_id)!} />
			</Carousel.Item>
		{/each}
	</Carousel.Content>
</Carousel.Root>

{#if selectedDecklist}
	<section class="decklist">
		<h3>{selectedDecklist.attributes.name}</h3>
		{#if selectedDecklist.attributes.notes}
			<div class="notes">{@html selectedDecklist.attributes.notes}</div>
		{/if}
		<div class="card-grid">
			{#each selectedDecklist.cards.filter((card) => card.id !== selectedDecklist.attributes.identity_card_id) as card (card.id)}
				<CardImage {card} />
			{/each}
		</div>
	</section>
{/if}

<style>
	.card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
		gap: 0.75rem;
	}
</style>
