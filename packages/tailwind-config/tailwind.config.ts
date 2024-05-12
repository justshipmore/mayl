import type { Config } from "tailwindcss"

const config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    "../../packages/ui/**/*.{ts,tsx}"
	],
  prefix: "",
  darkMode: ["class"],
  theme: {
    extend: {},
  },
  
} satisfies Config

export default config