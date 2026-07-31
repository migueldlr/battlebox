<script lang="ts">
	import type { Card } from '$lib/types/netrunnerdb';

	let { card, count, idFaction }: { card: Card; count: number; idFaction: string } = $props();

	const faction = $derived(card.attributes.faction_id);
	const show = $derived(idFaction != faction && !faction.includes('neutral'));
	const cost = $derived((card.attributes.influence_cost ?? 0) * count);

	const pips = (n: number) => '●'.repeat(n).replace(/(.{5})(?=.)/g, '$1 ');
</script>

{#if show}
	<span style={`color: var(--${faction}-color)`}>
		{pips(cost)}
	</span>
{/if}
