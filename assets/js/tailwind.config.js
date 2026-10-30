// Configuration Tailwind (CDN) — couleurs et polices pilotées par variables CSS (thèmes + mode sombre)
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: 'rgb(var(--paper) / <alpha-value>)',
        'paper-2': 'rgb(var(--paper-2) / <alpha-value>)',
        card: 'rgb(var(--card) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        'ink-soft': 'rgb(var(--ink-soft) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        'accent-soft': 'rgb(var(--accent-soft) / <alpha-value>)',
        claude: 'rgb(var(--claude) / <alpha-value>)',
        chatgpt: 'rgb(var(--chatgpt) / <alpha-value>)',
        gemini: 'rgb(var(--gemini) / <alpha-value>)',
        ai: 'rgb(var(--ai) / <alpha-value>)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        sans: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      maxWidth: { prose: '68ch' },
    },
  },
};
