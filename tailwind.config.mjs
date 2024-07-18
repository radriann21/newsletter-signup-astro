/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'dark-slate-grey': 'hsl(234, 29%, 20%)',
				'charcoal-grey': 'hsl(235, 18%, 26%)',
				'custom-grey': ' hsl(231, 7%, 60%)'
			},
			fontFamily: {
				'global': "'Roboto', sans-serif"
			}
		},
	},
	plugins: [],
}
