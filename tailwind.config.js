/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        // Azul-engenharia discreto, usado em detalhes e botões
        eng: {
          50: '#eef4fb',
          100: '#d6e4f5',
          500: '#2563a8',
          600: '#1d4f8a',
          700: '#173f6e',
          900: '#0c223d',
        },
      },
    },
  },
};
