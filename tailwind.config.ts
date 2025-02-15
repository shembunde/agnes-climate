import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,mdx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				'placeholder': 'var(--placeholder-text)',
				'bodytext': 'var(--body-text)',
				'border-color-darker': 'var(--border-color-darker)',
				'border-single-pagin': 'var(--border-single-pagin)',
				'dark': 'var(--dark)',
				'agnes-blue': 'var(--agnes-blue)',
				'card': {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				'popover': {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				'primary': {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				'secondary': {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				'muted': {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				'accent': {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				'destructive': {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				'border': 'hsl(var(--border))',
				'input': 'hsl(var(--input))',
				'ring': 'hsl(var(--ring))',
				'chart': {
					1: 'hsl(var(--chart-1))',
					2: 'hsl(var(--chart-2))',
					3: 'hsl(var(--chart-3))',
					4: 'hsl(var(--chart-4))',
					5: 'hsl(var(--chart-5))',
				},
			},
			boxShadow: {
				'soft-multi':
					'19px 27px 13px rgba(171, 171, 171, 0.01), ' +
					'11px 15px 11px rgba(171, 171, 171, 0.04), ' +
					'5px 7px 8px rgba(171, 171, 171, 0.06), ' +
					'1px 2px 5px rgba(171, 171, 171, 0.07)',
				'elevated':
					'19px 27px 13px rgba(171, 171, 171, 0.01), ' +
					'11px 15px 11px rgba(171, 171, 171, 0.04), ' +
					'5px 7px 8px rgba(171, 171, 171, 0.06), ' +
					'1px 2px 5px rgba(171, 171, 171, 0.07)',

				'soft-depth':
					'19px 27px 13px rgba(171, 171, 171, 0.01), ' +
					'11px 15px 11px rgba(171, 171, 171, 0.04), ' +
					'5px 7px 8px rgba(171, 171, 171, 0.06), ' +
					'1px 2px 5px rgba(171, 171, 171, 0.07)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0',
					},
					to: {
						height: 'var(--radix-accordion-content-height)',
					},
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)',
					},
					to: {
						height: '0',
					},
				},

				'dot-rotate': {
					'0%': {
						transform: 'rotate(0deg) translateX(2.5rem) rotate(0deg)',
					},
					'100%': {
						transform: 'rotate(360deg) translateX(2.5rem) rotate(-360deg)',
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'dot-rotate': 'dot-rotate 1s linear infinite',
			},
			height: {
				'screen-less-60px': 'calc(100dvh - 76px)',
			},
		},
	},

	plugins: [require('tailwindcss-animate')],
};
export default config;
