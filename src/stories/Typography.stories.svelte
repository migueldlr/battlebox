<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'Components/Typography',
		tags: ['autodocs']
	});
</script>

<Story name="Typography">
	<h1>Heading 101234</h1>
	<h2>Heading 2</h2>
	<h3>Heading 3</h3>
	<h4>Heading 4</h4>
	<h5>Heading 5</h5>
	<h6>Heading 6</h6>
	<p>
		Paragraph text. The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet,
		consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
	</p>
</Story>
