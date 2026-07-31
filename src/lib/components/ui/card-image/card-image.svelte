<script lang="ts">
	import type { Card } from '$lib/types/netrunnerdb';
	import { getHighResImage } from '$lib/utils';

	interface Props {
		card: Card;
		loading?: 'lazy' | 'eager';
		class?: string;
		boxShadow?: boolean;
		hasTransition?: boolean;
		responsive?: boolean;
	}

	const {
		card,
		loading = 'lazy',
		class: className = '',
		boxShadow = true,
		hasTransition = false,
		responsive = false
	}: Props = $props();

	const title = $derived(card.attributes.title ?? 'Card image');
</script>

{#if responsive}
	<picture>
		<source srcset={getHighResImage(card, 'small')} type="image/jpeg" media="(max-width:936px)" />
		<source srcset={getHighResImage(card, 'large')} type="image/jpeg" media="(min-width:936px)" />
		<img
			crossorigin="anonymous"
			class="card {className}"
			class:shadow={boxShadow}
			src={getHighResImage(card)}
			alt={title}
			{loading}
			style:view-transition-name={hasTransition ? `card-${card.id}` : ''}
		/>
	</picture>
{:else}
	<img
		crossorigin="anonymous"
		class="card {className}"
		class:shadow={boxShadow}
		src={getHighResImage(card)}
		alt={title}
		{loading}
		style:view-transition-name={hasTransition ? `card-${card.id}` : ''}
	/>
{/if}

<style>
	img.card {
		aspect-ratio: 0.718 / 1;
		border-radius: 4.55% / 3.5%;
	}

	img.card.shadow {
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
	}
</style>
