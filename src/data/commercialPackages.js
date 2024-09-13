const commercialPackages = {
  upperHeading: "Summit Flight Academy Pricing",
  heading: "Commercial Pilot Packages",
  description: `We pride ourselves on transparency when it comes to pilot training. While other flight schools may hide their pricing, we feel that our future students should have an idea of what they’re paying when engaging in flight lessons with us.`,
  flightHours: 215,
  frequencyQuestion: "How many hours per week can you fly for time building?",
  frequencyOptions: [8, 10, 12, 14, 16, 18, 20],
  hoursQuestion: "How many total flight hours do you have?",
  hoursQuestion2: {
    question: "Do you prefer solo or shared time building?",
    options: [" ", "Solo time building", "Shared time building"],
  },
  question: {
    questionHeading: "Which package is right for you?",
    questionDescription: `Our Commercial Pilot training packages are adapted to our students based on their availability during the week for flight training and how they prefer to schedule their payments. Please answer the questions below to discover which package we recommend for your schedule and payment preferences.`,
    questions: [
      {
        question:
          "With enough time building hours, how quickly do you want to earn your Commercial Pilot Certificate (CPL)?",
        options: [
          " ",
          "5 weeks, flying 6 hours/week",
          "3 months, flying 3 hours/week",
          "6 months (10 weeks Solo Time Building + 12 weeks Commercial Program)",
          "3 months (6 weeks Solo Time Building + 5 weeks Commercial Program)",
          "6 months (10 weeks Shared Time Building + 12 weeks Commercial Program",
          "3 months (6 weeks Shared Time Building + 5 weeks Commercial Program)",
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
    "Necessary Redbird Simulator Time",
    `Online Sporty's Ground School Course`,
    "ForeFlight Electronic Chart Subscription",
    "Non-owned Insurance",
  ],
  packs: [
    {
      packageName: "Accelerated Commercial Pilot Program",
      option: "5 weeks, flying 5-6 days/week",
      monthlyPrice: {
        price: 8500,
        afterPrice: "paid once",
      },
      upfrontPrice: {
        price: 8500,
        afterPrice: "paid once",
      },
      packageDescription:
        "*Must have completed Written Exam to qualify for this program.",
      packageFeatures: [
        "Training Duration: 5 weeks",
        "Training Frequency: 6 hours/week",
        "Total Flight Hours: 30 hours",
      ],
      packageLittlePrint:
        "*Five weeks is the expected length of the Commercial Program. Extensions may be needed due to weather, learning speed, illness, or mechanical issues and will be managed to ensure your completion as close as possible to the stated timeframe. No additional charges will apply unless the student exceeds the hours provided. Excess hours will be available at a program-discounted rate if needed.",
    },
    {
      packageName: "Standard Commercial Pilot Program",
      option: "12 weeks, flying 1-2 days/week",
      monthlyPrice: {
        price: 3500,
        afterPrice: "/month",
        note: "for three months",
      },
      upfrontPrice: {
        price: 10000,
        afterPrice: "paid once",
      },
      packageDescription: "",
      packageFeatures: [
        "Training Duration: 3 months",
        "Training Frequency: 3 hours/week",
        "Total Flight Hours: 35 hours",
      ],
      packageLittlePrint:
        "*Twelve weeks is the expected length of the Commercial Program. Extensions may be needed due to weather, learning speed, illness, or mechanical issues and will be managed to ensure your completion as close as possible to the stated timeframe. No additional charges will apply unless the student exceeds the hours provided. Excess hours will be available at a program-discounted rate if needed.",
    },
    {
      packageName: ["Solo Time Building", " + ", "Standard Commercial Program"],
      option: "12 weeks, flying 1-2 days/week (after solo time building)",
      monthlyPrice: {
        price: 4500,
        afterPrice: "/month",
        note: "for six months",
      },
      upfrontPrice: {
        price: 27000,
        afterPrice: "paid once",
      },
      hourPrice: 173.52,
      durationWeeks: 12,
      programFrequency: "1-2 days/week",
      packageDescription: "",
      packageFeatures: [
        "Training Duration:",
        "Time Building Frequency: 11 hours/week",
        "Commercial Training Frequency: 1-2 days/week",
        "Total Time Building Hours: Up to 110 hours",
        "Total Commercial Program Hours: 35 hours",
      ],
      packageLittlePrint:
        "*Twelve weeks is the expected length of the Commercial Program. Completion of time building will depend on your availability and consistency in training. Extensions may be needed due to weather, learning speed, illness, or mechanical issues and will be managed to ensure your completion as close as possible to the stated timeframe. No additional charges will apply unless the student exceeds the hours provided. Excess hours will be available at a program-discounted rate if needed.",
    },
    {
      packageName: [
        "Solo Time Building",
        " + ",
        "Expedited Commercial Program",
      ],
      option: "5 weeks, flying 5-6 days/week (after solo time building)",
      monthlyPrice: {
        price: 8675,
        afterPrice: "/month",
        note: "for three months",
      },
      upfrontPrice: {
        price: 25500,
        afterPrice: "paid once",
      },
      hourPrice: 173.52,
      durationWeeks: 5,
      programFrequency: "4 days/week",

      packageDescription: "",
      packageFeatures: [
        "Training Duration:",
        "Time Building Frequency: 18 hours/week",
        "Commercial Training Frequency: 4 days/week",
        "Total Time Building Hours: Up to 110 hours",
        "Total Commercial Program Hours: 30 hours",
      ],
      packageLittlePrint:
        "*Five weeks is the expected length of the Commercial Program. Completion of time building will depend on your availability and consistency in training. Extensions may be needed due to weather, learning speed, illness, or mechanical issues and will be managed to ensure your completion as close as possible to the stated timeframe. No additional charges will apply unless the student exceeds the hours provided. Excess hours will be available at a program-discounted rate if needed.",
    },
    {
      packageName: [
        "Shared Time Building",
        " + ",
        "Standard Commercial Program",
      ],
      option: "12 weeks, flying 1-2 days/week (after shared time building)",
      monthlyPrice: {
        price: 3500,
        afterPrice: "/month",
        note: "for six months",
      },
      upfrontPrice: {
        price: 20500,
        afterPrice: "paid once",
      },
      hourPrice: 92.18,
      durationWeeks: 12,
      programFrequency: "1-2 days/week",
      packageDescription:
        "*Shared time building is only available if we have multiple students seeking this at the same time.",
      packageFeatures: [
        "Training Duration:",
        "Time Building Frequency: 11 hours/week",
        "Commercial Training Frequency: 1-2 days/week",
        "Total Time Building Hours: Up to 110 hours",
        "Total Commercial Program Hours: 35 hours",
      ],
      packageLittlePrint:
        "*Twelve weeks is the expected length of the Commercial Program. Completion of time building will depend on your availability and consistency in training. Extensions may be needed due to weather, learning speed, illness, or mechanical issues and will be managed to ensure your completion as close as possible to the stated timeframe. No additional charges will apply unless the student exceeds the hours provided. Excess hours will be available at a program-discounted rate if needed.",
    },
    {
      packageName: [
        "Shared Time Building",
        " + ",
        "Expedited Commercial Program",
      ],
      option: "5 weeks, flying 5-6 days/week (after shared time building)",
      monthlyPrice: {
        price: 6350,
        afterPrice: "/month",
        note: "for three months",
      },
      upfrontPrice: {
        price: 19000,
        afterPrice: "paid once",
      },
      hourPrice: 92.18,
      durationWeeks: 5,
      programFrequency: "4 days/week",
      packageDescription:
        "*Shared time building is only available if we have multiple students seeking this at the same time.",
      packageFeatures: [
        "Training Duration:",
        "Time Building Frequency: 18 hours/week",
        "Commercial Training Frequency: 4 days/week",
        "Total Time Building Hours: Up to 110 hours",
        "Total Commercial Program Hours: 30 hours",
      ],
      packageLittlePrint:
        "*Five weeks is the expected length of the Commercial Program. Completion of time building will depend on your availability and consistency in training. Extensions may be needed due to weather, learning speed, illness, or mechanical issues and will be managed to ensure your completion as close as possible to the stated timeframe. No additional charges will apply unless the student exceeds the hours provided. Excess hours will be available at a program-discounted rate if needed.",
    },
  ],
};

export default commercialPackages;
