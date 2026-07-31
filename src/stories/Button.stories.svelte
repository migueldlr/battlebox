<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Button, { type ButtonProps } from '$lib/components/ui/button/button.svelte';

	const { Story } = defineMeta({
		title: 'Components/Button',
		component: Button,
		tags: ['autodocs'],
		parameters: {
			controls: {
				sort: 'none'
			}
		},
		argTypes: {
			label: {
				control: 'text'
			},
			variant: {
				control: 'inline-radio',
				options: ['default', 'outline', 'secondary', 'ghost', 'destructive', 'link']
			},
			size: {
				control: 'inline-radio',
				options: ['default', 'xs', 'sm', 'lg', 'icon', 'icon-xs', 'icon-sm', 'icon-lg']
			},
			disabled: {
				control: 'boolean'
			}
		}
	});
</script>

<Story
	name="Button"
	args={{ variant: 'default', size: 'default', disabled: false, label: 'Click me' }}
>
	{#snippet template({ label, ...args }: { label: string } & ButtonProps)}
		<Button {...args}>{label}</Button>
	{/snippet}
</Story>
