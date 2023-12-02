import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
      "dark-blue": "#181E34",
      "light-blue": "#3498DB",
      "very-light-blue": "#D6EFFF",
      "smokey-blue": "#13496C",
      "medium-gray": "#5C5F70",
      "light-gray": "#F0F1F4",
      "another-light-gray": "#D6D8E0",
      },
      boxShadow: {
        'contentBox': '0 4px 8px 1px rgba(13, 17, 38, 0.05)',
      },
    },
  },
  plugins: [],
}
export default config
