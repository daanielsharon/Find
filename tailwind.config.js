/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			mobile: '320px',
			tablet: '810px',
			laptop: '1024px',
			desktop: '1280px',
		},
		fontFamily: {
			sans: ['Helvetica', 'Arial', 'sans-serif'],
			serif: ['ui-serif', 'Georgia'],
			mono: ['ui-monospace', 'SFMono-Regular'],
			display: ['Oswald'],
			body: ['Open Sans'],
			poppins: ['Poppins'],
		},
		extend: {
			colors: {
				lightGreen: '#65a30d',
				background: '#f7fee7',
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.scrollbar-hide': {
					/* IE and Edge */
					'-ms-overflow-style': 'none',

					/* Firefox */
					'scrollbar-width': 'none',

					/* Safari and Chrome */
					'&::-webkit-scrollbar': {
						display: 'none',
					},
				},
			});
		}),
	],
};
