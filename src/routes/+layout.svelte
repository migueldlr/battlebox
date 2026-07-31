<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="mx-auto md:max-w-7xl md:px-4 lg:px-8">
	{@render children()}
</div>
