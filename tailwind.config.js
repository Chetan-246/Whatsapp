/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whatsapp: {
          green: '#25D366',
          dark: '#128C7E',
          light: '#DCF8C6',
          gray: '#F0F0F0',
          darkgray: '#667781',
          chatbg: '#EFEAE2',
          header: '#F0F2F5',
          message: '#FFFFFF',
          sent: '#DCF8C6',
          received: '#FFFFFF'
        }
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'typing': 'typing 1.5s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        typing: {
          '0%, 60%, 100%': { opacity: '0.4' },
          '30%': { opacity: '1' }
        }
      }
    },
  },
  plugins: [],
} 