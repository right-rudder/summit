const instrumentPackages = {
  upperHeading: "Summit Flight Academy Pricing",
  heading: "Our Instrument Rating Packages",
  description: `We pride ourselves on transparency when it comes to pilot training. While other flight schools may hide their pricing, we feel that our future students should have an idea of what they’re paying when engaging in flight lessons with us.`,
  question: {
    questionHeading: "Which package is right for you?",
    questionDescription: `Our Instrument Rating training packages are adapted to our students based on their availability during the week for flight training and how they prefer to schedule their payments. Please answer the questions below to discover which package we recommend for your schedule and payment preferences.`,
    questions: [
      {
        question:
          "Based on how often you can fly per week, how quickly do you want to earn your Instrument Rating?",
        options: [
          " ",
          /* "2 weeks of full-time training by flying daily", */
          "4 months flexible training by flying 2-3 days per week",
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
    "ForeFlight Electronic Chart Subscription",
    "Non-owned Insurance",
  ],
  packs: [
    /* {
      packageName: "Accelerated Package",
      option: "2 weeks of full-time training by flying daily",
      monthlyPrice: {
        price: 3500,
        afterPrice: "Enrollment Fee",
        note: "Remaining $8,500 due at Start",
      },
      upfrontPrice: {
        price: 3500,
        afterPrice: "Enrollment Fee",
        note: "Remaining $8,500 due at Start",
      },
      packageDescription:
        "Our two week* accelerated instrument pilot training package is available in two plans with two aircraft choices in one of our instrument equipped Pipers.",
      packageFeatures: [
        "Training Duration: 2 weeks",
        "Training Frequency: Fly every day",
        "Up to 40 hours of aircraft flight time",
        "Up to 15 hours of simulator time",
        "Dedicated scheduling over two weeks",
      ],
      packageLittlePrint:
        "*Contact Summit Flight Academy for scheduling availability on this program. Significant advanced planning required. Two weeks of dedicated, full time effort is needed to complete this program. You will complete multiple flights and ground school each day to complete the program in two weeks. It is expected that you will sit for your checkride at the end of the two weeks. Advanced scheduling for this program is required in order to secure a checkride date and instructor/aircraft availability.",
    }, */
    {
      packageName: "Efficient Package",
      option: "4 months flexible training by flying 2-3 days per week",
      monthlyPrice: {
        price: 3200,
        afterPrice: "/month",
        note: "for four months",
      },
      upfrontPrice: {
        price: 12400,
        afterPrice: "paid once",
      },
      packageDescription:
        "Our four month* flexible instrument pilot training package is available in two plans with two aircraft choices in one of our instrument equipped Pipers.",
      packageFeatures: [
        "Training Duration: 4 months",
        "Training Frequency: Fly 2-3 days/week",
        "Up to 45 hours of aircraft flight time",
        "Up to 10 hours of simulator time",
        "Online Sporty's ground school course",
      ],
      packageLittlePrint:
        "*The flex program provides you the flexibility to schedule lessons 2-3 times per week to earn your instrument rating. Scheduled lessons will be a mix of be ground, simulator, and flight lessons.",
    },
  ],
};

export default instrumentPackages;
