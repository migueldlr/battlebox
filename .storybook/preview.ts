import type { Preview } from '@storybook/sveltekit';

import '../src/routes/layout.css';

// Match the app: <html class="dark"> (see src/app.html)
if (typeof document !== 'undefined') {
	document.documentElement.classList.add('dark');
}

const preview: Preview = {
	parameters: {
		backgrounds: { disable: true },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	}
};

export default preview;
