const commercialPackages = {
  upperHeading: "Summit Flight Academy Pricing",
  heading: "Commercial Pilot Packages",
  description: `We pride ourselves on transparency when it comes to pilot training. While other flight schools may hide their pricing, we feel that our future students should have an idea of what they’re paying when engaging in flight lessons with us.`,
  flightHours: 215,
  hoursQuestion: "How many flight hours do you have?",
  hoursQuestion2: {
    question: "Do you prefer solo or shared flight hours?",
    options: ["Solo flight hours", "Shared flight hours"],
  },
  question: {
    questionHeading: "Which package is right for you?",
    questionDescription: `Our Commercial Pilot training packages are adapted to our students based on their availability during the week for flight training and how they prefer to schedule their payments. Please answer the questions below to discover which package we recommend for your schedule and payment preferences.`,
    questions: [
      {
        question:
          "Based on how often you can fly per week, how quickly do you want to earn your Private Pilot Certificate?",
        options: [
          "3-4 months by flying 5-6 days per week",
          "5-6 months by flying 3-4 days per week",
          "Solo flight hours 11 hours/week",
          "Solo flight hours 18 hours/week",
          "Shared flight hours 11 hours/week",
          "Shared flight hours 18 hours/week",
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
    "Instructor Services, including Checkride Prep",
    "Basic Pilot Supplies: Passive Headset, Bag, Kneeboard, etc.",
    `Online Sporty's Ground School Course`,
    "ForeFlight Electronic Chart Subscription",
    "ASA Oral Exam Prep Book",
    "FAA Private Pilot ACS Standards Book",
    "Non-owned Insurance",
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
        afterPrice: "paid once",
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
        price: 3000,
        afterPrice: "/month",
        note: "for five months",
      },
      upfrontPrice: {
        price: 14900,
        afterPrice: "paid once",
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
      packageName: "Solo Flight Time Package 1",
      option: "Solo flight hours 11 hours/week",
      monthlyPrice: {
        price: 1950,
        afterPrice: "/month",
        note: "for nine months",
      },
      upfrontPrice: {
        price: 16900,
        afterPrice: "paid once",
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
    {
      packageName: "Solo Flight Time Package 2",
      option: "Solo flight hours 18 hours/week",
      monthlyPrice: {
        price: 8675,
        afterPrice: "/month",
        note: "for three months",
      },
      upfrontPrice: {
        price: 25500,
        afterPrice: "paid once",
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
    {
      packageName: "Shared Flight Time Package 1",
      option: "Shared flight hours 11 hours/week",
      monthlyPrice: {
        price: 3500,
        afterPrice: "/month",
        note: "for six months",
      },
      upfrontPrice: {
        price: 20500,
        afterPrice: "paid once",
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
    {
      packageName: "Shared Flight Time Package 2",
      option: "Shared flight hours 18 hours/week",
      monthlyPrice: {
        price: 6350,
        afterPrice: "/month",
        note: "for three months",
      },
      upfrontPrice: {
        price: 19000,
        afterPrice: "paid once",
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

export default commercialPackages;
