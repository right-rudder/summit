const bundlePackages = {
  upperHeading: "Summit Flight Academy Pricing",
  heading: "Our Private Pilot + Instrument Rating Bundle",
  description: `We pride ourselves on transparency when it comes to pilot training. While other flight schools may hide their pricing, we feel that our future students should have an idea of what they’re paying when engaging in flight lessons with us.`,
  question: {
    questionHeading: "Which bundle is right for you?",
    questionDescription: `Our Private Pilot + Instrument Bundle is adapted to our students based on their availability during the week for flight training and how they prefer to schedule their payments. Please answer the questions below to discover which bundle we recommend for your schedule and payment preferences.`,
    questions: [
      {
        question:
          "Based on how often you can fly per week, how quickly do you want to earn your Private Pilot Certificate and Instrument Rating?",
        options: [
          " ",
          "7 months by flying 5-6 times per week",
          "10 months by flying 2-3 times per week",
        ],
      },
      {
        question: "How would you prefer to pay for your package?",
        options: [
          " ",
          "In monthly installments (block time)",
          "In one up-front payment (discounts available)",
        ],
      },
    ],
  },
  allInclude: [
    "Instructor Services, including Checkride Prep",
    "Basic Pilot Supplies: Passive Headset, Bag, Kneeboard, etc.",
    `Online Sporty's Ground School Course`,
    "ForeFlight Electronic Chart Subscription",
    "ASA Oral Exam Prep Book",
    "FAA Private Pilot ACS Standards Book",
    "Non-owned Insurance",
    "Everything else in the private pilot package",
    "Everything else in the instrument rating package",
  ],
  packs: [
    {
      packageName: "7-Month Bundle",
      option: "7 months by flying 5-6 times per week",
      monthlyPrice: {
        price: 3750,
        afterPrice: "/month",
        note: "for seven months",
      },
      upfrontPrice: {
        price: 25500,
        afterPrice: "paid once",
      },
      packageDescription:
        "Our seven-month* private - instrument pilot training package is available in one of our instrument equipped Pipers.",
      packageFeatures: [
        "Training Duration: 7 months",
        "Training Frequency: 5-6 days/week",
        "Total Flight Hours: 85-100 hours",
        "Total Simulator Hours: ~15 hours",
      ],
      packageLittlePrint:
        "*Contact Summit Flight Academy for scheduling availability on this program. Significant advanced planning required. Two weeks of dedicated, full time effort is needed to complete this program. You will complete multiple flights and ground school each day to complete the program in two weeks. It is expected that you will sit for your checkride at the end of the two weeks. Advanced scheduling for this program is required in order to secure a checkride date and instructor/aircraft availability.",
    },
    {
      packageName: "10-Month Program",
      option: "10 months by flying 2-3 times per week",
      monthlyPrice: {
        price: 2700,
        afterPrice: "/month",
        note: "for ten months",
      },
      upfrontPrice: {
        price: 26500,
        afterPrice: "paid once",
      },
      packageDescription:
        "Our ten-month* private-instrument training package provides a few additional hours to accommodate the longer training plan.",
      packageFeatures: [
        "Training Duration: 10 months",
        "Training Frequency: 2-3 days/week",
        "Total Flight Hours: 90-110 hours",
        "Total Simulator Hours: ~15 hours",
      ],
      packageLittlePrint:
        "*The flex program provides you the flexibility to schedule lessons 2-3 times per week to earn your instrument rating. Scheduled lessons will be a mix of be ground, simulator, and flight lessons.",
    },
  ],
};

export default bundlePackages;
