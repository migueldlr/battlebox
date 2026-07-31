<script lang="ts">
	import { SYMBOL_TO_UNICODE } from '$lib/text';

	let { faction, class: className = '' }: { faction: string; class?: string } = $props();

	const unicode = $derived(SYMBOL_TO_UNICODE[faction as keyof typeof SYMBOL_TO_UNICODE]);
</script>

{#if unicode !== undefined}
	<span class="netrunner-symbol {faction} {className} font-normal" title={faction}>
		{@html `&#${unicode};`}
	</span>
{/if}

<style>
	.netrunner-symbol {
		font-family: 'Netrunner', monospace;
		line-height: 1;
		position: relative;
		top: 0.08em;
	}
</style>
