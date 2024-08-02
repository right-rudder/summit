const privatePackages = {
  upperHeading: "Private Pilot Training Packages",
  heading: "Programs for You",
  description: `Choose from our selection of private pilot training packages to find the one that best suits your needs. Whether you're looking for a comprehensive training program or a more flexible option, we have a package that's right for you.`,
  question: {
    questionHeading: "Not sure which package is right for you?",
    questionDescription: `Our team is here to help you find the perfect private pilot training package. Contact us today to discuss your goals and preferences, and we'll recommend the best program for you.`,
    questions: [
      {
        question:
          "Based on how often you can fly per week, how quickly do you want to earn your certificate?",
        options: [
          "3-4 months by flying 5-6 days per week",
          "5-6 months by flying 3-4 days per week",
          "9-10 months by flying 1-2 days per week",
        ],
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
    "Instructor Services, including Checkride Prep.",
    "Basic Pilot Supplies: Passive Headset, Bag, Kneeboard, etc..",
    `Online Sporty's Ground School Course.`,
    "ForeFlight Electronic Chart Subscription.",
    "ASA Oral Exam Prep Book.",
    "FAA Private Pilot ACS Standards Book.",
    "Non-owned Insurance.",
  ],
  packs: [
    {
      packageName: "Expedited Package",
      option: "3-4 months by flying 5-6 days per week",
      monthlyPrice: {
        price: 4500,
        afterPrice: "/month",
      },
      upfrontPrice: {
        price: 13900,
        afterPrice: "once",
      },
      packageDescription:
        "Our three-month* private pilot training package is perfect for those looking to earn their pilot certificate over the summer or anytime where full-time effort can be applied. Students will take their ground school month one, then fly the next two months. Students must have the FAA medical certificate in hand prior to scheduling a start date. Your course schedule is planned in advance and you can expect to fly and study five days a week.",
      packageFeatures: [
        "Training Duration: 3-4 months",
        "Training Frequency: 5-6 days/week",
        "Total Flight Hours: 48 hours",
      ],
      packageLittlePrint:
        "*Three months is the expected program length. Extensions may be needed due to weather, learning speed, illness, or mechanical issues and will be managed to ensure your completion as close as possible to the stated timeframe. No additional charges will apply unless the student exceeds the hours provided. Excess hours will be available at a program-discounted rate if needed.",
    },
    {
      packageName: "Efficient Package",
      option: "5-6 months by flying 3-4 days per week",
      monthlyPrice: {
        price: 3500,
        afterPrice: "1st month",
        note: "Pay $2,925 in months 2-5",
      },
      upfrontPrice: {
        price: 14900,
        afterPrice: "once",
      },
      packageDescription:
        "Our five-month* private pilot training package is perfect for the majority of students. This program expects a student can commit to coming to the airport an average of 2-3 times a week to fly with various ground school assignments between lessons. Students will take their ground school and pass the FAA knowledge test prior to solo. Students will generally schedule out a month at a time to ensure their program progresses on schedule.",
      packageFeatures: [
        "Training Duration: 5-6 month",
        "Training Frequency: 3-4 days/week",
        "Total Flight Hours: 58 hours",
      ],
      packageLittlePrint:
        "*Five months is the expected program length. Extensions may be needed due to weather, learning speed, illness, or mechanical issues and will be managed to ensure your completion as close as possible to the stated timeframe. No additional charges will apply unless the student exceeds the hours provided. Excess hours will be available at a program-discounted rate if needed.",
    },
    {
      packageName: "Extended Package ",
      option: "9-10 months by flying 1-2 days per week",
      monthlyPrice: {
        price: 3500,
        afterPrice: "1st month",
        note: "Pay $1,738 in months 2-9",
      },
      upfrontPrice: {
        price: 16900,
        afterPrice: "once",
      },
      packageDescription:
        "Our nine-month* private pilot training package is recommended only for those students with more limited availability to learn to fly. The monthly cost is less, but the overall cost is more due to more flight hours needed for this pace of learning. Students will take their ground school and pass the FAA knowledge test prior to solo. Students will generally schedule out a month at a time, 1-2 lessons per week, to ensure their program progresses on schedule.",
      packageFeatures: [
        "Training Duration: 9-10 months",
        "Training Frequency: 1-2 days/week",
        "Total Flight Hours: 67 hours",
      ],
      packageLittlePrint:
        "*Nine months is the expected program length. Extensions may be needed due to weather, learning speed, illness, or mechanical issues and will be managed to ensure your completion as close as possible to the stated timeframe. No additional charges will apply unless the student exceeds the hours provided. Excess hours will be available at a program-discounted rate if needed.",
    },
  ],
};

export default privatePackages;
