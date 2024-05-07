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
        home: "url('/img/home-header.webp')",
        404: "url('https://source.unsplash.com/random/?clouds/1280x720')",
        blog: "url('/img/c1b522_8c1a8368eb464ce4bcae7b7dda097168~mv2.webp')",
        "our-team": "url('/img/our-team/our-team-header.webp')",
        "our-fleet": "url('/img/our-fleet/our-fleet-header.webp')",
        "private-pilot": "url('/img/private-pilot-header.webp')",
        "instrument-rating": "url('/img/instrument-rating-header.webp')",
        "career-track": "url('/img/pilot-bundle-header.webp')",
        "commercial-pilot": "url('/img/commercial-pilot-header.webp')",
        "instructor-training": "url('/img/cfi-header.webp')",
        "forms-library": "url('/img/forms-header.webp')",
        "teach-at": "url('/img/teach-at-summit-header.webp')",
        "pilot-bundle": "url('/img/zero-to-hero-header.webp')",
        "new-to-flying":
          "url('/img/363431096_191721537226616_5859843225312776391_n.webp')",
        "faa-exam-center": "url('/img/faa-exam-center/banner.webp')",
        financing: "url('/img/financing-header.webp')",
        "insurance-header": "url('/img/insurance-header.webp')",
        "faqs-header": "url('/img/faqs-header.webp')",
        "visit-us": "url('/img/visit-us-header.webp')",
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
