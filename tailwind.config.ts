
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
			},
			colors: {
				// Sistema de colores personalizado
				'azul-profundo': '#1E4A8F',
				'azul-medio': '#3B6CB3', 
				'azul-claro': '#5DA5E8',
				'blanco-principal': '#FFFFFF',
				'gris-oscuro': '#333333',
				
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float-card': {
					'0%, 100%': { 
						transform: 'translateY(0px) scale(1)',
						boxShadow: '0 4px 20px rgba(30, 74, 143, 0.1)'
					},
					'50%': { 
						transform: 'translateY(-5px) scale(1.02)',
						boxShadow: '0 8px 30px rgba(30, 74, 143, 0.2)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float-card': 'float-card 3s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-azul': 'linear-gradient(135deg, #1E4A8F 0%, #3B6CB3 50%, #5DA5E8 100%)',
				'gradient-azul-hover': 'linear-gradient(135deg, #1a3f7a 0%, #2f5a9a 50%, #4a8bc4 100%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
