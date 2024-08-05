const bundlePackages = {
  upperHeading: "Private + Instrument Bundle Training Packages",
  heading: "Programs for You",
  description: `Choose from our selection of private pilot + instrument rating bundle training packages to find the one that best suits your needs. Whether you're looking for a comprehensive training program or a more flexible option, we have a package that's right for you.`,
  question: {
    questionHeading: "Not sure which package is right for you?",
    questionDescription: `Our team is here to help you find the perfect private pilot training package. Contact us today to discuss your goals and preferences, and we'll recommend the best program for you.`,
    questions: [
      {
        question:
          "Based on how often you can fly per week, how quickly do you want to earn your certificate?",
        options: ["7 Month Program", "10 Month Program"],
      },
      {
        question: "How would you prefer to pay for your package?",
        options: [
          "In monthly installments (block time)",
          "In one up-front payment (discounts available)",
        ],
      },
    ],
  },
  allInclude: [
    "Everything in the private pilot package.",
    "Everything in the instrument rating package.",
  ],
  packs: [
    {
      packageName: "7 Month Program",
      option: "7 Month Program",
      monthlyPrice: {
        price: 4500,
        afterPrice: "/1st month",
        note: "Pay $3,600 months 2-7",
      },
      upfrontPrice: {
        price: 25500,
        afterPrice: "once",
      },
      packageDescription:
        "Our seven month* private - instrument pilot training package is available in one of our instrument equipped Pipers.",
      packageFeatures: [
        "Everything in the private pilot package.",
        "Everything in the instrument rating package.",
      ],
      packageLittlePrint:
        "*Contact Summit Flight Academy for scheduling availability on this program. Significant advanced planning required. Two weeks of dedicated, full time effort is needed to complete this program. You will complete multiple flights and ground school each day to complete the program in two weeks. It is expected that you will sit for your checkride at the end of the two weeks. Advanced scheduling for this program is required in order to secure a checkride date and instructor/aircraft availability.",
    },
    {
      packageName: "10 Month Program",
      option: "10 Month Program",
      monthlyPrice: {
        price: 4500,
        afterPrice: "1st month",
        note: "Pay $2,500 in months 2-10",
      },
      upfrontPrice: {
        price: 26500,
        afterPrice: "once",
      },
      packageDescription:
        "Our ten month* private-instrument training package provides a few additional hours to accommodate the longer training plan.",
      packageFeatures: [
        "Everything in the private pilot package.",
        "Everything in the instrument rating package.",
      ],
      packageLittlePrint:
        "*The flex program provides you the flexibility to schedule lessons 2-3 times per week to earn your instrument rating. Scheduled lessons will be a mix of be ground, simulator, and flight lessons.",
    },
  ],
};

export default bundlePackages;
