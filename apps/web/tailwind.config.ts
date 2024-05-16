// import baseConfig from "@repo/ui/tailwind.config"
// import type { Config } from "tailwindcss";

// export default {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./ui/**/*.{js,ts,jsx,tsx,mdx}",
//     // h/t to https://www.willliu.com/blog/Why-your-Tailwind-styles-aren-t-working-in-your-Turborepo
//     "../../packages/ui/src/**/*{.js,.ts,.jsx,.tsx}",
//   ],
//   presets: [baseConfig],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// } satisfies Config;

// export * from "@repo/ui/tailwind.config"

// import baseConfig from "@repo/ui/tailwind.config";
// import type { Config } from "tailwindcss";

// export default {
//   content: ["./src/**/*.{ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}"],
//   presets: [baseConfig],
//   theme: {
//     container: {
//       center: true,
//     },
//   },
// } satisfies Config;

// export default "@repo/tailwind-config";
// module.exports = require('@repo/tailwind-config/tailwind.config');
// export * from '@repo/tailwind-config/tailwind.config';
export * from "@repo/ui/tailwind.config";