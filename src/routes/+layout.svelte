<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<title>The Netrunner Core Battle Box</title>
	<link rel="icon" href={favicon} />
</svelte:head>
<div class="mx-auto my-4 px-2 md:max-w-[65ch] md:px-4 lg:px-8">
	{@render children()}
</div>
