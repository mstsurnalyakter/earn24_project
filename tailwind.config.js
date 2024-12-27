import daisyui from 'daisyui';

export default {
  content: [
    './index.html', 
    './src/**/*.{js,jsx,ts,tsx}',  // Ensure your paths are correct
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
};
