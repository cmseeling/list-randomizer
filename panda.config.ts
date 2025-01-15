import { defineConfig } from '@pandacss/dev';

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: [
		'./src/**/*.{js,jsx,ts,tsx,svelte}',
		'./pages/**/*.{js,jsx,ts,tsx,svelte}',
		'./stories/**/*.{js,jsx,ts,tsx,svelte}'
	],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {
			tokens: {
				colors: {
					slate: {
						50: { value: '#f8fafc' },
						100: { value: '#f1f5f9' },
						200: { value: '#e2e8f0' },
						300: { value: '#cbd5e1' },
						400: { value: '#94a3b8' },
						500: { value: '#64748b' },
						600: { value: '#475569' },
						700: { value: '#334155' },
						800: { value: '#1e293b' },
						900: { value: '#0f172a' },
						950: { value: '#020617' }
					},
					gray: {
						50: { value: '#f9fafb' },
						100: { value: '#f3f4f6' },
						200: { value: '#e5e7eb' },
						300: { value: '#d1d5db' },
						400: { value: '#9ca3af' },
						500: { value: '#6b7280' },
						600: { value: '#4b5563' },
						700: { value: '#374151' },
						800: { value: '#1f2937' },
						900: { value: '#111827' },
						950: { value: '#030712' }
					},
					zinc: {
						50: { value: '#fafafa' },
						100: { value: '#f4f4f5' },
						200: { value: '#e4e4e7' },
						300: { value: '#d4d4d8' },
						400: { value: '#a1a1aa' },
						500: { value: '#71717a' },
						600: { value: '#52525b' },
						700: { value: '#3f3f46' },
						800: { value: '#27272a' },
						900: { value: '#18181b' },
						950: { value: '#09090b' }
					},
					red: {
						50: { value: '#fef2f2' },
						100: { value: '#fee2e2' },
						200: { value: '#fecaca' },
						300: { value: '#fca5a5' },
						400: { value: '#f87171' },
						500: { value: '#ef4444' },
						600: { value: '#dc2626' },
						700: { value: '#b91c1c' },
						800: { value: '#991b1b' },
						900: { value: '#7f1d1d' },
						950: { value: '#450a0a' }
					},
					blue: {
						50: { value: '#eff6ff' },
						100: { value: '#dbeafe' },
						200: { value: '#bfdbfe' },
						300: { value: '#93c5fd' },
						400: { value: '#60a5fa' },
						500: { value: '#3b82f6' },
						600: { value: '#2563eb' },
						700: { value: '#1d4ed8' },
						800: { value: '#1e40af' },
						900: { value: '#1e3a8a' },
						950: { value: '#172554' }
					},
					green: {
						50: { value: '#f0fdf4' },
						100: { value: '#dcfce7' },
						200: { value: '#bbf7d0' },
						300: { value: '#86efac' },
						400: { value: '#4ade80' },
						500: { value: '#22c55e' },
						600: { value: '#16a34a' },
						700: { value: '#15803d' },
						800: { value: '#166534' },
						900: { value: '#14532d' },
						950: { value: '#052e16' }
					}
				},
				fonts: {
					sans: { value: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' },
					serif: { value: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' },
					mono: { value: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }
				},
				fontWeights: {
					thin: { value: '100' },
					extralight: { value: '200' },
					light: { value: '300' },
					normal: { value: '400' },
					medium: { value: '500' },
					semibold: { value: '600' },
					bold: { value: '700' },
					extrabold: { value: '800' },
					black: { value: '900' }
				},
				fontSizes: {
					xs: { value: '0.75rem' },
					sm: { value: '0.875rem' },
					base: { value: '1rem' },
					lg: { value: '1.125rem' },
					xl: { value: '1.25rem' },
					'2xl': { value: '1.5rem' },
					'3xl': { value: '1.875rem' },
					'4xl': { value: '2.25rem' },
					'5xl': { value: '3rem' },
					'6xl': { value: '3.75rem' },
					'7xl': { value: '4.5rem' },
					'8xl': { value: '6rem' },
					'9xl': { value: '8rem' }
				},
				spacing: {
					px: { value: '1px' },
					0: { value: '0px' },
					0.5: { value: '0.125rem' },
					1: { value: '0.25rem' },
					1.5: { value: '0.375rem' },
					2: { value: '0.5rem' },
					2.5: { value: '0.625rem' },
					3: { value: '0.75rem' },
					3.5: { value: '0.875rem' },
					4: { value: '1rem' },
					5: { value: '1.25rem' },
					6: { value: '1.5rem' },
					7: { value: '1.75rem' },
					8: { value: '2rem' },
					9: { value: '2.25rem' },
					10: { value: '2.5rem' },
					11: { value: '2.75rem' },
					12: { value: '3rem' },
					14: { value: '3.5rem' },
					16: { value: '4rem' },
					20: { value: '5rem' },
					24: { value: '6rem' },
					28: { value: '7rem' },
					32: { value: '8rem' },
					36: { value: '9rem' },
					40: { value: '10rem' },
					44: { value: '11rem' },
					48: { value: '12rem' },
					52: { value: '13rem' },
					56: { value: '14rem' },
					60: { value: '15rem' },
					64: { value: '16rem' },
					72: { value: '18rem' },
					80: { value: '20rem' },
					96: { value: '24rem' }
				},
				borderWidths: {
					default: { value: '1px' },
					0: { value: '0px' },
					2: { value: '2px' },
					4: { value: '4px' },
					8: { value: '8px' }
				},
				borders: {
					none: { value: 'none' },
					default: { value: '1px solid' },
					0: { value: '0px' },
					2: { value: '2px solid' },
					4: { value: '4px solid' },
					8: { value: '8px solid' }
				},
				opacities: {
					0: { value: '0' },
					5: { value: '0.05' },
					10: { value: '0.1' },
					20: { value: '0.2' },
					25: { value: '0.25' },
					30: { value: '0.3' },
					40: { value: '0.4' },
					50: { value: '0.5' },
					60: { value: '0.6' },
					70: { value: '0.7' },
					75: { value: '0.75' },
					80: { value: '0.8' },
					90: { value: '0.9' },
					95: { value: '0.95' },
					100: { value: '1' }
				},
				zIndex: {
					0: { value: '0' },
					10: { value: '10' },
					20: { value: '20' },
					30: { value: '30' },
					40: { value: '40' },
					50: { value: '50' },
					auto: { value: 'auto' }
				},
				durations: {
					75: { value: '75ms' },
					100: { value: '100ms' },
					150: { value: '150ms' },
					200: { value: '200ms' },
					300: { value: '300ms' },
					500: { value: '500ms' },
					700: { value: '700ms' },
					1000: { value: '1000ms' }
				},
				easings: {
					linear: { value: 'linear' },
					in: { value: 'cubic-bezier(0.4, 0, 1, 1)' },
					out: { value: 'cubic-bezier(0, 0, 0.2, 1)' },
					'in-out': { value: 'cubic-bezier(0.4, 0, 0.2, 1)' }
				},
				blurs: {
					none: { value: '0' },
					sm: { value: '4px' },
					default: { value: '8px' },
					md: { value: '12px' },
					lg: { value: '16px' },
					xl: { value: '24px' },
					'2xl': { value: '40px' },
					'3xl': { value: '64px' }
				},
				aspectRatios: {
					auto: { value: 'auto' },
					square: { value: '1/1' },
					video: { value: '16/9' }
				}
			}
		}
	},

	// The output directory for your css system
	outdir: 'styled-system'
});
