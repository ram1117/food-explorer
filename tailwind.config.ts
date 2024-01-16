import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/atoms/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'main-bg':'url(/main-bg.svg)'
      },
      backgroundColor:{
        'gradient-primnary':'linear-gradient(90deg, #f9572a, #ff8a05)',
        'tile-gradient':'linear-gradient(90deg, #2c1e19, #25200f)'
      },
      fontFamily:{
        montserrat:'var(--font-montserrat)'
      },
      colors: {
        'text-primary': '#ddd6cb',
        
      },
    },
  },
  plugins: [],
};
export default config;
