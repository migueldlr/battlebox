import type { StorybookConfig } from '@storybook/sveltekit';
import tailwindcss from '@tailwindcss/vite';

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(js|ts|svelte)'],
	addons: ['@storybook/addon-svelte-csf'],
	framework: '@storybook/sveltekit',
	viteFinal: async (viteConfig) => {
		viteConfig.plugins = [...(viteConfig.plugins ?? []), tailwindcss()];
		return viteConfig;
	}
};
export default config;
