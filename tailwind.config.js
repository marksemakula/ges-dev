/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'ges-navy': '#1A1A1A',
        'ges-gold': '#FFC72C',
        'ges-cream': '#F5F5F5',
        'ges-teal': '#FFC72C',
        'ges-burgundy': '#1A1A1A',
        'ges-slate': '#555555',
        'ges-blue': '#3b82f6',
        'ges-orange': '#f97316',
        'ges-purple': '#a855f7',
        'ges-green': '#10b981',
        'netlify-dark': '#0e1117',
        'netlify-darker': '#0a0d13',
        'netlify-teal': '#00C7B7',
        'netlify-cyan': '#06b6d4',
        'netlify-purple': '#a855f7',
        'netlify-gray': '#1e293b',
      },
      fontFamily: {
        sans: ['Ubuntu', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'ges-gradient': 'linear-gradient(135deg, #0e1117 0%, #1a1f2e 100%)',
        'ges-gold-gradient': 'linear-gradient(135deg, #00C7B7 0%, #06b6d4 100%)',
        'netlify-gradient': 'linear-gradient(135deg, #00C7B7 0%, #a855f7 100%)',
        'netlify-dark-gradient': 'linear-gradient(135deg, #0e1117 0%, #1a1f2e 100%)',
      },
    },
  },
  plugins: [],
}