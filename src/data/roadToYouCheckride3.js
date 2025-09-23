export const CHECKRIDE_GUIDE = {
  title: "Road To Your Checkride",
  introduction:
    "We receive a lot of questions about pilot exams. This document is our attempt to clarify what will happen here at Summit before your checkride, how it is scheduled, what to expect, and the more frequent reasons why an applicant may not be successful.",

  //cardwhite
  checkrideAndExaminer: {
    upperTitle: "Examiner",
    title: 'The "Checkride" and your Examiner',
    descriptions: [
      'The FAA calls your exam for a certificate or additional rating a "Practical Test". Most pilots use the term "checkride". The person administering your exam will be a private citizen appointed by the FAA as a Designated Pilot Examiner (aka DPE). These individuals can charge a reasonable fee for their services. "Reasonable" around the Midwest usually means between $700-$1200, depending on the test and examiner. Initial Flight Instructor Practical Tests are the most expensive due to the long nature of those exams. Additional fees may apply if a recheck is needed or a student voluntarily discontinues an exam.',
      "A DPE is trained to test you according to the applicable testing document provided by the FAA for the rating or certificate sought. This document is called the Airmen Certification Standards (ACS) or the Practical Test Standards (PTS), depending on the test given. The good news is that everything on the test is in the public domain in these freely available documents. Most of the source material is also available in FAA documents such as the FAR/AIM, Pilot's Handbook of Aeronautical Knowledge, and the Airplane Flying Handbook. Your CFI will review the ACS/PTS document with you before your test to be sure you are familiar with it.",
      "For the oral, the FAA is looking for an application level of knowledge. This means you take what you know and understand and make use of that insight to apply it to the task or situation at hand. If you can read a weather report (Rote), that's a start. If you can understand what it means, good! But the expectation that the FAA has is that you will be able to apply your knowledge to your flight and go/no-go decision.",
      'During the flight, the failure line is "consistently exceeds the standards", the creation of a safety issue or lack of action to eliminate a safety issue. It\'s not uncommon for a DPE to give an applicant a "three chances" approach. For example, if you bust an altitude once and bust an airspeed once but everything else went great, you will pass. Perfection is not the expectation. While there are some tasks that have very black and white completion standards, DPEs want you to pass and if they are seeing consistent adherence to the standards, then you will do great. A DPE does not grade technique, they grade outcomes as they relate to a test standard.',
    ],
  },

  //cardblue
  knowledgeTest: {
    upperTitle: "Test",
    title: "Knowledge Test",
    descriptions: [
      "We typically ask our students to take their knowledge before solo or before the mid-point in the training for Practical Tests beyond private pilot. We do this to make sure the learning is well distributed throughout your course and to give us time to address any weaknesses that show up in your written test.",
      ` An examiner is required to include in their test plan any topics you miss on your written. This is one of the reasons we want students to do well on the knowledge test. Getting a barely passing score makes your oral exam more complicated than it needs to be and opens you up to first impressions that may be less favorable if you "barely passed" your written.`,
    ],
    imagePath:
      "/src/assets/summit-flight-academy-pilot-training-ground-school-instrument-rating.webp",
    imageAlt: "Pilot training ground school",
  },

  //cardwhite
  scheduling: {
    upperTitle: "Scheduling",
    title: "When can I take the checkride?",
    descriptions: [
      "To be qualified to take your test, your CFI will review the requirements in part 61 of the FAA regulations for the certificate or rating you are applying for. There are requirements that must be completed (for example completing X amount of solo time, night flight time, cross country experiences, etc.) as well as standards that you need to meet in your knowledge, skills, and risk management. Your CFI cannot legally sign you off until you meet all requirements.",
      "At Summit Flight, once your syllabus is completed successfully, you will be paired with senior instructor to compete a mock oral exam and a mock flight test. You must pass both to sit for your checkride. If we are working to schedule you into a time slot we have already booked with an examiner, you must schedule and pass these mocks at least two weeks prior to your checkride so we have time to address any lingering deficiencies. Otherwise, we typically will schedule a checkride after you pass the mocks.",
      "When you are ready for your checkride, your instructor will help you schedule it. We have DPEs that we get regular dates for and others that we call and schedule when we have a student just about ready. Most students can get a checkride in less than month from the time we sign you off. Some rides, such as the multi-engine and initial Flight Instructor Practical Test, can take longer to get scheduled due to the limited number of DPEs that are qualified to administer them. Once your test is scheduled, your CFI will continue to work with you on ground and flight lessons to ensure you stay sharp.",
      "As mentioned, your oral exam is going to be based on the testing document from the FAA. The FAA strongly encourages DPEs to administer a scenario-based exam where it makes sense to do so. What this likely means is that your knowledge will be applied to one or more hypothetical situations, and you will be asked to explain how you are going to proceed or what you are going to do, and why.",
      "One recommendation we give students for their checkride is to take the ACS/PTS and use it to create blueprint to your checkride. First, go through each task and sub-item/code and attempt to document where the source of this topic come from. For example, if you are looking at the line item on the Private ACS about BasicMed, the ACS code is PA.I.A.K5 and the regulations are found in part 68 of the FAR. This line item already tells you it is in part 68, so no extra note pointing to the reg is needed. Then on the page, you might make a few key notes to jog your memory about BasicMed that should expect to be able to explain…the privileges and limitations of BasicMed, how to obtain it and how to retain it. If the DPE wants more than you have in your head or notes, you know exactly where to dig in the FARs to answer his or her question.",
    ],
    imagePath:
      "/src/assets/summit-flight-academy-two-students-in-front-of-plane.webp",
    imageAlt: "Summit FLight Academy inside office",
  },

  //Card blue
  oralExamInsight: {
    upperTitle: "Oral Exam",
    title: "Oral Exam Insight and Common Errors",
    haveIcon: true,
    descriptions: [
      "Not having appropriate endorsements or they are expired.",
      "Not bringing all required documents",
      "Not signing all pages of your paper logbook.",
      "Not bringing a signed paper copy of your application (form 8710) in case IACRA is down.",
      "Not verifying aircraft airworthiness or bringing aircraft logbooks.",
      "Not bringing DPE fee in their required form of payment.",
      "Not bringing current FAA documents and charts.",
      "Forgetting to bring a view limiting device.",
      `<strong>Not carefully reviewing that all requirements are met. </strong> <br> ( Did you do 9 night takeoffs and 10 night landings? <br> If so, you are not qualified for the private checkride. )`,
    ],
    imagePath: "/src/assets/CFI-and-student-pilot.webp",
    imageAlt: "CFI and Student Pilot inside plane",
  },

  //checkRide RoadMap
  acsTasks: {
    upperTitle: "ACS Tasks",
    title: "Private/Commercial ACS Notes",
    description: "Commom Errors",
    steps: [
      {
        step: "A",
        title: "Task A: Pilot Qualifications",
        descriptions: [
          "In general, this task is one where an applicant should be comfortable with all the topics listed. You will be fine looking up a few key details, if needed, but one should be conversational about all these items. The DPE is looking to determine if you know what you are allowed to do, not do, and when you cannot temporarily do something (e.g. when ill). You will likely get a scenario or two given to you and then asked to determine how you will response as PIC. Once you answer, expect to be asked why you gave the answer you gave.",
          'A common scenario as a private pilot is asking about taking a friend or family member somewhere and how the costs of that flight can or cannot be shared and even if the flight is legal to make. It\'s a common error to not understand the term "common purpose" and assume that just because you pay your share, the flight is legal.',
          "For commercial applicants, there are a lot of nuances to the regulations around when it is appropriate to be paid, when you are crossing the line into a regulated charter operation and the responsibilities of the operator vs. the pilot. There are many resources on navigating these scenarios online, FAA interpretation letters, and commercial training resources. Is a common error to not be able to talk through a hypothetical scenario and be able to defend your answer using appropriate FAA resources.",
        ],
        imagePath:
          "/src/assets/summit-flight-academy-pilot-student-in-front-of-Piper-PA-28-Cherokee-lees-summit-missoury.webp",
        imageAlt: "",
      },
      {
        step: "B",
        title: "Task B: Airworthiness Requirements",
        descriptions: [
          "This task has gotten the better of some pilot applicants simply because they couldn't get past the rote understanding of these topics. It can break down when given a scenario by the DPE to talk through a hypothetical flight and aircraft. Often, he or she will use the aircraft you will be flying to talk through many of these items. Be sure to pre-mark all inspection items and compliance items so you can easily show them to the examiner.",
          "Your scenario will likely also give you something 'broke' on the airplane and that will spur a conversation that walks through the various airworthiness regulations and different types of equipment lists. The DPE will want to hear you talk through the regulations (e.g. 91.205) and various types of equipment lists, be able to explain what those lists are and if/how they are relevant to your aircraft.",
          "A lot of applicants also miss what to do if something is found inop. They know they need to placard it, but often forget about the required aircraft logbook entry and who can make that entry. This is a critical step, deactivating and placarding isn't enough without the proper documentation to keep the aircraft's maintenance records accurate and the next pilot informed.",
        ],
        imagePath:
          "/src/assets/summit-flight-academy-missoury-kansas-city-piper-back-view-amazing-sunset-whats-next.webp",
        imageAlt: "",
      },
      {
        step: "C",
        title: "Task C: Weather Information",
        descriptions: [
          "The weather task can be divided into two parts: theory and application. Not having a good grasp of the knowledge areas listed in this task is a common issue and one frequent pain point is atmospheric composition and stability.",
          "For example, applicants struggle at times to explain wind shear (what it is) and/or what to do when faced with it. Another example: In the Midwest we don't have mountains, the impact of mountains on a pilot are sometimes not well remembered.",
          "Application is a key thing DPEs are looking for and often see weakness in. For example, being able to explain different cloud types and then, more importantly, applying that knowledge to your VFR flight. It's good that you can explain what a cold front vs. warm front is, but can you explain how they can impact a flight?",
          "Often your cross-country assignment will be the basis of your weather discussion. You likely will be asked to make hypothetical go/no-go decisions. Do you have personal minimums documented? Often a DPE will press you on your decision not to change your mind, but to see if you can smartly defend it.",
          "A counter-intuitive common error is to just default to a 'no go' decision. Applicants often feel that is the 'safe' answer. It's only safe if you can defend it well.",
          "Finally, another common error is not being able to explain all the various ways to get weather information and the best use cases and limitations of each (e.g., EFB, aviationweather.gov, Flight Service). A common issue with contacting flight service is not knowing how to use the sectional to obtain the radio frequency information and the name of the service you are speaking to.",
        ],
        imagePath:
          "/src/assets/summit-plane-preparing-take-flight-clouds-mountain.webp",
        imageAlt: "",
      },
      {
        step: "D",
        title: "Task D: Cross-Country Flight Planning",
        descriptions: [
          "It is permissible to use an electronic Flight Bag (e.g. ForeFlight) OR Paper nav logs and paper or electronic sectionals to aid in your flight planning. The biggest common error seen here is the lack of understanding around what the EFB is calculating for you.",
          "Did you build your aircraft profile using current conditions and performance charts? Or have you used the defaults from two seasons ago? Have you compared your EFB weight and balance to one you calculated manually to ensure it is right? If you can't talk through how an electronic W&B works, a DPE often will ask you to fill out a paper one in front of them.",
          "Another common error is how to account for compass errors in an EFB. On a paper nav log, this is a built-in column. How does a pilot account for this with an EFB? Some applicants can't explain that.",
          "When using an EFB, sometimes applicants struggle with identifying information found in the Chart Supplement. It is common for applicants to struggle to determine where to get that information in an EFB. If you get stumped, be able to find the answer using the EFB and/or the FAA's Aeronautical Chart User Guide.",
          "A common error across paper and electronic formats is making sure there is consistency in speeds (e.g., MPH vs. Knots) and understanding the difference between true north and magnetic north and when they are used.",
          "Fuel planning can be a challenge. Are you being conservative, and can you demonstrate good judgement? Often applicants will oversimplify their fuel planning explanation, especially when planning electronically, because they don't see the calculations being made.",
          "Altitude selection is a struggle for many applicants when they fixate on one data point like winds. However, airspace, obstacles, terrain, endurance, clouds, and turbulence should all be well accounted for.",
          "A common challenge is for an applicant to not be able to explain how to file, open, and close a VFR flight plan, as it's not as common in the world of ADS-B and flight following.",
        ],
        imagePath: "/src/assets/red-arrow-fleet.webp",
        imageAlt: "",
      },
      {
        step: "E",
        title: "Task E: National Airspace System",
        descriptions: [
          "Many DPEs will bake this topic into the flight planning and use a sectional to go over this task during your cross-country review. They will ask you about the airspace along your route of flight and then pick out random other airspace or chart symbols.",
          "A common error on this topic is not having down cold the A-G airspace definitions, their weather mins, and entry requirements. You do not have time to look this up while flying. It's expected you know these 'cold' just like your aircraft V speeds.",
          "With the ease of EFBs, a DPE may take you for a virtual trip out to visit airspace you are not familiar with. A common error is not being able to identify the requirements for special use airspace, warning areas, Class Charlie airspace, TRSAs, etc. Don't just know your local airspace; be prepared to interpret any airspace on the sectional.",
        ],
        imagePath: "/src/assets/discovery-flight-banner.webp",
        imageAlt: "",
      },
      {
        step: "F",
        title: "Task F: Performance and Limitations",
        descriptions: [
          "This is often baked into the cross-country flight planning exercise. The DPE will expect you to be familiar with all of the performance charts applicable to your aircraft and use them correctly.",
          "A best practice is printing off the most common charts and using a ruler and pencil to mark them up with the output expected for your checkride conditions. This prevents many stress-induced errors.",
          "Common errors include not using the right chart for the given weight, not using the more conservative number when faced with an in-between answer, and not accounting for your level of proficiency when using the output of a chart (are you as good as the manufacturer's test pilot?).",
          "Aerodynamics is included in this task. The DPE is not going to expect you to fill out the lift equation, but they will expect you to explain aerodynamic principles to the standard found in the Pilot's Handbook of Aeronautical Knowledge.",
        ],
        imagePath:
          "/src/assets/summit-flight-academy-missoury-kansas-city-insurance-header.webp",
        imageAlt: "",
      },
      {
        step: "G",
        title: "Task G: Operations of Systems",
        descriptions: [
          "Put bluntly, you need to know your airplane extremely well. Some of this topic may be covered during the oral and some may continue into the pre-flight or even the flight. You must know about every piece of equipment and switch in your aircraft.",
          "A common error during the oral is not being able to explain the flight instruments and how they work. The principle of rigidity in space and how it makes gyroscopic instruments work is a weak area. Understanding the power sources for the various instruments is another.",
          "During the preflight, if the cowling is easy to open, expect the DPE to ask you to perform some show and tell. You are not a mechanic, but you are expected to know how all systems operate at a basic level. A common error is not referencing the POH to walk through the details when asked.",
          "During your flight, the DPE may 'fail' a piece of equipment. A common error is not being able to work through a logical flow of what to do. For example, can you explain how an electrical failure does or does not impact engine operation and how you would handle it?",
          "Another common error is not having basic mastery of the avionics. If you have a GPS like a Garmin 650/750, you need to be able to use its functions. Study the manuals and use simulator apps. Applicants have failed for not knowing how to switch from GPS to VLOC mode and tune a VOR.",
        ],
        imagePath: "/src/assets/instrument-panel.webp",
        imageAlt: "",
      },
      {
        step: "H",
        title: "Task H: Human Factors",
        descriptions: [
          "This is a task where some applicants get stuck giving just rote answers. DPEs will expect you to be able to define IMSAFE, PAVE, and other risk management templates.",
          "To meet the standard, a DPE needs to be satisfied with two things: Does this applicant know the aeromedical and physiological risks of flight, and do they possess the skills to assess and mitigate them well?",
          "A common error is being able to recite the acronyms but failing to apply them well in a scenario. For example: If you can't name every exact type of hypoxia, that's okay if you can look it up. But you must be able to explain what to do to avoid it, the symptoms if it happens, and the immediate actions to take. The application of the knowledge is more important than just memorization.",
        ],
      },
    ],
  },

  // cards container
  flightErrors: {
    upperTitle: "Flight Errors",
    title:
      "Common Private and Commercial Flight Errors (Courtesy of DPE Brian Park)",
    description: "Most common flight errors in maneuvers",
    cards: [
      {
        title: "Soft-Field Takeoff and Climb",
        standards: [
          "IV.C.S6: Clear the area, maintain necessary flight control inputs, taxi into takeoff position and align the airplane on the runway centerline without stopping, while advancing the throttle smoothly to takeoff power.",
          "IV.C.S9: Lift off at the lowest possible airspeed and remain in ground effect while accelerating to Vx or Vy, as appropriate.",
        ],
        commonErrors: [
          "Insufficient back-elevator pressure during taxi into takeoff position.",
          "Taxiing too quickly onto the runway and therefore having to use brakes while taxiing into takeoff position.",
          "Not remaining in ground effect while accelerating to Vx or Vy.",
        ],
      },
      {
        title: "Soft-Field Approach and Landing",
        standards: [
          "IV.D.S9: Make smooth, timely, and correct control inputs during the round out and touchdown, and, for tricycle gear airplanes, keep the nose wheel off the surface until loss of elevator effectiveness.",
        ],
        commonErrors: [
          "Hard touchdown and allowing the nose-wheel to 'fall' to the runway after touchdown rather than controlling its descent.",
          "Not keeping the nose wheel off the surface until loss of elevator effectiveness.",
          "Lowering the nose similar to a normal landing without much attempt at applying back-elevator pressure during the rollout.",
        ],
      },
      {
        title: "Short-Field Takeoff and Maximum Performance Climb",
        standards: [
          "IV.E.S6: Clear the area, taxi into takeoff position, and align the airplane on the runway centerline utilizing maximum available takeoff area.",
        ],
        commonErrors: [
          "Failure to utilize all available runway/takeoff area.",
          "Little difference between taxi for a normal takeoff and a short-field takeoff.",
        ],
      },
      {
        title: "Short-Field Approach and Landing",
        privateStandards: [
          "IV.F.S7: Maintain manufacturer's published approach airspeed or in its absence not more than 1.3Vso, +10/-5 knots with gust factor applied.",
          "IV.F.S10: Touch down at a proper pitch attitude within 200 feet beyond or on the specified point, threshold markings, or runway numbers, with no side drift, minimum float, and with the airplane's longitudinal axis aligned with and over the runway centerline.",
          "IV.F.S11: Use manufacturer's recommended procedures for airplane configuration and braking.",
        ],
        commercialStandards: [
          "IV.F.S7: Maintain manufacturer's published approach airspeed or in its absence not more than 1.3 times the stalling speed or the minimum steady flight speed in the landing configuration (Vso), +/-5 knots with gust factor applied.",
          "IV.F.S10: Touch down at a proper pitch attitude within 100 feet beyond or on the specified point, threshold markings, or runway numbers, with no side drift, minimum float, and with the airplane's longitudinal axis aligned with and over the runway centerline.",
          "IV.F.S11: Use manufacturer's recommended procedures for airplane configuration and braking.",
        ],
        commonErrors: [
          "Too high an airspeed resulting in floating on round out.",
          "Touchdown with excessive airspeed.",
          "Not applying adequate braking after touchdown.",
          "Difficulty controlling airspeed on final, often coming in faster than normal.",
          "Floating past the intended landing point or forcing the plane onto the runway.",
          "Applicants often do not brake at all and instead announce 'simulate maximum braking,' creating a negative transfer of learning.",
        ],
      },
      {
        title: "Power-Off 180 Accuracy Approach and Landing",
        standards: [
          "IV.M.S8: Touch down at a proper pitch attitude, within 200 feet beyond or on the specified point with no side drift and with the airplane's longitudinal axis aligned with and over the runway centerline or landing path, as applicable.",
        ],
        commonErrors: [
          "Forcing the airplane onto the runway to avoid overshooting the designated landing spot.",
          "Approaching too fast, resulting in drifting long past the intended landing point.",
        ],
      },
      {
        title: "Steep Turns",
        standards: [
          "V.A.S5: Maintain the entry altitude +/-100 feet, airspeed +/-10 knots, bank +/-5 degrees, and roll out on the entry heading +/-10 degrees.",
        ],
        commonErrors: [
          "Gaining or losing altitude.",
          "Ineffective use of trim.",
          "Ineffective use of power.",
          "Inadequate airspeed control.",
          "Biggest challenges: altitude (improper trim) and speed (improper power adjustment).",
        ],
      },
      {
        title: "Ground Reference Maneuvers",
        standards: [
          "V.B.S4: Apply adequate wind-drift correction during straight and turning flight to maintain a constant ground track around a rectangular reference area, or to maintain a constant radius turn on each side of a selected reference line or point.",
          "V.B.S7: Maintain altitude +/-100 feet; maintain airspeed +/-10 knots.",
        ],
        commonErrors: [
          "Failure to establish a constant level altitude prior to entering the maneuver.",
          "Failure to maintain altitude during the maneuver.",
          "Failure to properly assess wind direction, leading to inability to maintain constant radius turns.",
          "Not configuring the aircraft properly (altitude, power, trim) before entering the maneuver.",
          "Not using available wind direction/velocity indicators in the cockpit.",
        ],
      },
      {
        title: "Eights on Pylons",
        standards: [
          "V.E.S6: Apply smooth and continuous corrections so that the line-of-sight reference line remains on the pylon.",
        ],
        commonErrors: [
          "Excessive gain or loss of altitude.",
          "Abrupt control usage.",
          "Failure to time the entry turn correctly, often starting with the pylon behind the reference line of sight.",
          "Pitching up excessively to start the maneuver, then losing altitude trying to 'catch' the pylon.",
        ],
      },
      {
        title: "Pilotage and Dead Reckoning",
        standards: [
          "VI.A.S2: Navigate by pilotage.",
          "VI.A.S3: Navigate by means of pre-computed headings, groundspeeds, elapsed time, and reference to landmarks or checkpoints.",
        ],
        descriptions: [
          "This task uses the applicant’s prepared cross-country flight plan to navigate by means of pilotage and dead reckoning. Applicants should include 2–3 visual waypoints within the first 25nm (not VORs or top of climb).",
          "The task requires looking outside, identifying visual waypoints, and flying computed headings to arrive on time.",
          "No GPS use is allowed. Applicants should rely on heading indicator, clock/timer, and ground references.",
        ],
      },
      {
        title: "Lost Procedures",
        standards: [
          "VI.D.S1: Use an appropriate method to determine position.",
          "VI.D.S2: Maintain an appropriate heading and climb as necessary.",
        ],
        commonErrors: [
          "No prepared method to determine position when asked.",
          "Flying same heading and altitude for several minutes without progress.",
          "Incorrectly identifying position behind actual location due to not staying in the same area.",
          "Not circling, climbing, or flying to a prominent landmark to help determine position.",
        ],
      },
      {
        title: "Emergency Descent",
        standards: [
          "IX.A.S4: Use bank angle between 30 degrees and 45 degrees to maintain positive load factors during the descent.",
          "IX.A.S5: Maintain appropriate airspeed +/-10 knots, and level off at a specified altitude +/-100 feet.",
        ],
        commonErrors: [
          "Not maintaining 30–45° bank angle throughout the descent (only at the beginning).",
          "Descending below the specified altitude.",
          "Forgetting the assigned level-off altitude during a rapid descent.",
        ],
      },
      {
        title: "Emergency Approach and Landing (Simulated)",
        standards: [
          "IX.B.S1: Establish and maintain the recommended best glide airspeed, +/-10 knots.",
          "IX.B.S3: Select a suitable landing area considering altitude, wind, terrain, obstructions, and available glide distance.",
        ],
        commonErrors: [
          "Not maintaining recommended best glide airspeed (airspeed fluctuates due to lack of trim or distraction).",
          "Not using trim to maintain best glide airspeed, requiring excessive scanning.",
          "Selecting a landing area without considering wind direction.",
          "Setting up to land with a tailwind.",
          "Not checking winds aloft or cockpit wind indicators when available.",
        ],
      },
    ],
  },
};
