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
        home: "url('/img/summit-flight-academy-pilot-student-shaking-hand-with-flight-instructor-in-font-of-Piper-PA-28-Cherokee-home-header.webp')",
        "new-to-flying":
          "url('/img/summit-flight-academy-pilot-student-in-font-of-Piper-PA-28-Cherokee-new-to-flying.webp')",
        404: "url('https://source.unsplash.com/random/?clouds,sky,skies/720x480')",
        "private-pilot":
          "url('/img/summit-flight-academy-pilot-student-shaking-hands-with-flight-instructor-in-front-of-Piper-PA-28-Cherokee-private-pilot-header.webp')",
        "instrument-rating":
          "url('/img/summit-flight-academy-pilot-student-and-flight-instructor-inside-a-flight-simulator-instrument-rating.webp')",
        "pilot-bundle":
          "url('/img/summit-flight-academy-very-happy-pilot-stanging-next-to-piper-cherokee-bundle-header.webp')",
        "commercial-pilot":
          "url('/img/summit-flight-academy-missoury-very-happy-pilot-standing-on-left-wing-of-piper-cherokee-commercial-pilot.webp')",
        "multi-engine":
          "url('/img/summit-flight-academy-missoury-kansas-city-multi-engine-pilot-student-flying-twin-comanche-at-summit-flight-academy.webp')",
        blog: "url('/img/summit-flight-academy-missoury-kansas-city-blog-header.webp')",
        "instructor-training":
          "url('/img/summit-flight-academy-missoury-kansas-city-cfi-instructor-training-pilot-student-and-instructor-next-to-piper-cherokee.webp')",
        "career-track":
          "url('/img/summit-flight-academy-missoury-kansas-city-career-track-zero-to-hero-pilot-student-and-instructor-next-to-piper-cherokee.webp')",
        "teach-at":
          "url('/img/summit-flight-academy-missoury-kansas-city-cfi-instructor-teach-at-summit-header.webp')",
        "our-team":
          "url('/img/our-team/summit-flight-academy-missoury-kansas-city-our-team-header.webp')",
        "our-fleet": "url('/img/our-fleet/our-fleet-header.webp')",
        "forms-library":
          "url('/img/summit-flight-academy-missoury-kansas-city-forms-header.webp')",
        "faa-exam-center": "url('/img/faa-exam-center/banner.webp')",
        financing:
          "url('/img/summit-flight-academy-missoury-kansas-city-financing-header.webp')",
        "insurance-header":
          "url('/img/summit-flight-academy-missoury-kansas-city-insurance-header.webp')",
        "faqs-header":
          "url('/img/summit-flight-academy-missoury-kansas-city-faqs-header.webp')",
        "visit-us":
          "url('/img/summit-flight-academy-missoury-kansas-city-visit-us-header.webp')",
        "training-courses": "url('/img/training-courses/banner.webp')",
        "discovery-flight":
          "url('/img/summit-flight-academy-front-view-of-piper-cherokee-park-on-runway-discovery-flight.webp')",
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
