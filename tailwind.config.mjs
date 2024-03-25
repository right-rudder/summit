import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "main-red": "#C70009",
      },
      backgroundImage: {
        home: "url('/img/424764052_300248556373913_8162742436028565876_n (1).jpg')",
        blog: "url('/img/c1b522_8c1a8368eb464ce4bcae7b7dda097168~mv2.webp')",
        "two-cessna": "url('/img/fromWIX/AdobeStock_198399440.jpeg')",
        "our-story": "url('/img/our-story/banner.webp')",
        "our-team": "url('/img/our-team/banner.webp')",
        "our-fleet": "url('/img/our-fleet/banner.webp')",
        maintenance: "url('/img/maintenance/banner.webp')",
        "private-pilot":
          "url('/img/c1b522_4a8105c7c387483691d1432b3866ac28~mv2.webp')",
        "commercial-pilot":
          "url('/img/425867522_303524629379639_309923734982898779_n.webp')",
        military: "url('/img/military/banner.webp')",
        "new-to-flying":
          "url('/img/363431096_191721537226616_5859843225312776391_n.webp')",
        "university-program": "url('/img/university-program/banner.webp')",
        "international-program":
          "url('/img/international-program/banner.webp')",
        "faa-exam-center": "url('/img/faa-exam-center/banner.webp')",
        financing: "url('/img/financing/banner.webp')",
        "training-courses": "url('/img/training-courses/banner.webp')",
        "discovery-flight": "url('/img/fromWIX/IMG_2053 3_edited(1).jpg')",
        "cfi-and-student": "url('/img/discovery-flight/cfi-and-student.webp')",
      },
      height: (theme) => ({
        "screen-1/2": "50vh",
        "screen-2/3": "66vh",
        "screen-1/3": "calc(100vh / 3)",
        "screen-3/4": "75vh",
        "screen-4/5": "80vh",
        "screen-mobile": "92vh", //depends on menu height
      }),
      keyframes: {
        moveReviews: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        moveReviews: "moveReviews 5s linear infinite",
      },
      fontFamily: {
        serif: ["Urbanist Variable", ...defaultTheme.fontFamily.serif],
        sans: ["Raleway Variable", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  safelist: ["object-left", "object-right", "object-center", "object-cover"],
};
