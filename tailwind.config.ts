import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero': "url('/bg-hero.svg')"
      },
      colors: {
        'green-primary': '#1D3531',
        'green-actived': '#5D8A83',
        'green-border': '#2A4B46',
        'green-button': '#CCEC60'
      },
      maxWidth: {
        grid: '1240px',
        'text-hero': '66rem',
        'area-icons': '855px',
        'area-mockups': '957px'
      },
      height: {
        'section-hero': '874px'
      }
    },
  },
  plugins: [],
}
export default config
