// import { ulid } from "ulid";
// import introductionGif from "../assets/sectionsvgs/introduction";
// import castleGif from "../assets/sectionsvgs/castle.gif";
// import gardenGreenImage from "../assets/sectionsvgs/gardenGreen.gif";
// import desertDreamImage from "../assets/sectionsvgs/desert_dream.gif";
// import distinctilyArizonaImage from "../assets/sectionsvgs/distinctly_arizona.gif";
// import industrialImage from "../assets/sectionsvgs/industrial.gif";
// import modernImage from "../assets/sectionsvgs/modern.gif";
// import rustic_yet_chicImage from "../assets/sectionsvgs/rustic_yet_chic.gif";

// export const ONBOARDING_DATA = {
//   introduction: {
//     title: "The Venue Ranker",
//     videoUrl: "https://www.youtube.com/embed/1&loop=1",
//   },
//   instructions: {
//     title: "Pixie point",
//     subtitle: `As you work through the ranker, please only select one as "my favorite."`,
//     text: `Each venue has a "venue specifics" PDF for you to download and review. Be sure to look this over before deciding if a venue is the one for you.`,
//     imageUrl: introductionGif,
//   },
// };

// const questionIds = {
//   A: ulid(),
//   B: ulid(),
//   C: ulid(),
//   D: ulid(),
//   E: ulid(),
//   F: ulid(),
// };

// export const STEP_1_QUESTION = {
//   id: ulid(),
//   title: "Tell us about your dream venue!",
//   instruction: "You can choose 4 more",
//   answers: {
//     type: "multi_select",
//     choices: [
//       { id: questionIds["A"], label: "A", text: "Gordon Greenery" },
//       { id: questionIds["B"], label: "B", text: "Desert dream" },
//       { id: questionIds["C"], label: "C", text: "Distinctily arizona" },
//       { id: questionIds["D"], label: "D", text: "Industrial" },
//       { id: questionIds["E"], labe: "E", text: "Modern" },
//       { id: questionIds["F"], label: "F", text: "Rustic yet Chic" },
//     ],
//   },
//   imageUrl: castleGif,
// };

// const RATINGS = [
//   { id: ulid(), label: "A", text: "My Favourites" },
//   { id: ulid(), label: "B", text: "This could work" },
//   { id: ulid(), label: "C", text: "Not for me" },
// ];

// // These are questions for each venue and they'll be rendered dynamically based off of chosen venue id
// export const STEP_2_QUESTIONS = {
//   type: "single_select",
//   choices: RATINGS,
//   controlsIntructions: {
//     text: "You can always use the little blue navigation arrows at the bottom of the screen to go back and review the venues again.",
//   },

//   [questionIds["A"]]: {
//     instructions: {
//       title: "Garden Greenery",
//       subtitle:
//         "An oasis in the desert, you'll enjoy lush gardens, grassy spaces, and trees!",
//       imageUrl: gardenGreenImage,
//     },
//     controlsIntructions: {
//       text: "You can always use the little blue navigation arrows at the bottom of the screen to go back and review the venues again.",
//     },
//     places: [
//       {
//         id: ulid(),
//         label: "01",
//         text: "The Japanese Freindship Garden",
//         description: "",

//         attachment: {
//           text: "Download_Venue Specific Details",
//           link: "https://www.youtube.com/embed/AGifXQlNXHw",
//         },
//         controlsIntructions: {
//           text: "You can always use the little blue navigation arrows at the bottom of the screen to go back and review the venues again.",
//         },
//       },
//       {
//         id: ulid(),
//         label: "02",
//         text: "The Windmill Winery - Lake House",
//         description:
//           "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

//         attachment: {
//           text: "Download PDF",
//           link: "https://www.youtube.com/embed/CwLWV3k9h2Y",
//         },
//       },
//       {
//         id: ulid(),
//         label: "03",
//         text: "Schnep's Farm - Meadow",
//         description:
//           "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

//         attachment: {
//           text: "Download PDF",
//           link: "https://www.youtube.com/embed/CwLWV3k9h2Y",
//         },
//       },
//       {
//         id: ulid(),
//         label: "04",
//         text: "Tubac Golf Course and Resort",
//         description:
//           "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

//         attachment: {
//           text: "Download PDF",
//           link: "https://www.youtube.com/embed/mL-WYrEq5EM",
//         },
//       },
//       {
//         id: ulid(),
//         label: "05",
//         text: "Verrado Golf Club",
//         description:
//           "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

//         attachment: {
//           text: "Download PDF",
//           link: "https://www.youtube.com/embed/CwLWV3k9h2Y",
//         },
//       },
//       {
//         id: ulid(),
//         label: "06",
//         text: "Encanterra Golf Club",
//         description:
//           "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

//         attachment: {
//           text: "Download PDF",
//           link: "https://www.youtube.com/embed/CwLWV3k9h2Y",
//         },
//       },
//     ],
//   },
//   [questionIds["B"]]: {
//     instructions: {
//       title: "Desert drean",
//       subtitle:
//         "Perfectly pristine desert landscaping and authentic desert backdrops!",
//       imageUrl: desertDreamImage,
//     },
//     attachment: {
//       text: "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",
//       link: "../to/download Url/of the attachment",
//     },
//     places: [
//       {
//         id: ulid(),
//         label: "01",
//         text: "The Paseo",
//         description:
//           "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

//         attachment: {
//           text: "Download PDF",
//           link: "https://www.youtube.com/embed/HrAQPgOEO68",
//         },
//       },
//       {
//         id: ulid(),
//         label: "02",
//         text: "Desert Foothills",
//         description:
//           "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

//         attachment: {
//           text: "Download PDF",
//           link: "https://www.youtube.com/embed/T4Nbf3k06Vs",
//         },
//       },
//     ],
//   },
//   [questionIds["C"]]: {
//     instructions: {
//       title: "Distinctily arizona",
//       subtitle: "The definition of the Southwest's history and present!",
//       imageUrl: distinctilyArizonaImage,
//     },
//     attachment: {
//       text: "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",
//       link: "../to/download Url/of the attachment",
//     },
//     places: [
//       {
//         id: ulid(),
//         label: "01",
//         text: "Schnep's Farm - Farm House",
//         description:
//           "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

//         attachment: {
//           text: "Download PDF",
//           link: "https://www.youtube.com/embed/CwLWV3k9h2Y",
//         },
//       },
//       {
//         id: ulid(),
//         label: "02",
//         text: "Hacienda Del Sol",
//         description:
//           "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

//         attachment: {
//           text: "Download PDF",
//           link: "https://www.youtube.com/embed/1oTX2dAi5Ig",
//         },
//       },
//       {
//         id: ulid(),
//         label: "03",
//         text: "Tanque Verde - Saguaro Room",
//         description:
//           "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

//         attachment: {
//           text: "Download PDF",
//           link: "https://www.youtube.com/embed/MetPMveCal0",
//         },
//       },
//       {
//         id: ulid(),
//         label: "04",
//         text: "The Historic Bates Mansion",
//         description:
//           "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

//         attachment: {
//           text: "Download PDF",
//           link: "https://www.youtube.com/embed/psMcgHpJ-ec",
//         },
//       },
//       {
//         id: ulid(),
//         label: "05",
//         text: "The Irish Cultural Center",
//         description:
//           "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

//         attachment: {
//           text: "Download PDF",
//           link: "https://www.youtube.com/embed/8UDbpY5-frU",
//         },
//       },
//       {
//         id: ulid(),
//         label: "06",
//         text: "The Ocotillo",
//         description:
//           "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

//         attachment: {
//           text: "Download PDF",
//           link: "https://www.youtube.com/embed/Y6TGV5PQIE",
//         },
//       },
//       {
//         id: ulid(),
//         label: "07",
//         text: "The Vic",
//         description:
//           "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

//         attachment: {
//           text: "Download PDF",
//           link: "https://www.youtube.com/embed/CwLWV3k9h2Y",
//         },
//       },
//       {
//         id: ulid(),
//         label: "08",
//         text: "La Cocina at Encanterra ",
//         description:
//           "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

//         attachment: {
//           text: "Download PDF",
//           link: "https://www.youtube.com/embed/CwLWV3k9h2Y",
//         },
//       },
//       {
//         id: ulid(),
//         label: "09",
//         text: "The Rubi House",
//         description:
//           "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

//         attachment: {
//           text: "Download PDF",
//           link: "https://www.youtube.com/embed/_F-fbyBIXro",
//         },
//       },
//     ],
//   },
//   [questionIds["D"]]: {
//     instructions: {
//       title: "Industrial",
//       subtitle: "Clean, classic, and perfectly pulled together!",
//       imageUrl: industrialImage,
//     },
//     attachment: {
//       text: "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",
//       link: "../to/download Url/of the attachment",
//     },
//     places: [
//       {
//         id: ulid(),
//         label: "01",
//         text: "Sunkist",
//         description:
//           "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

//         attachment: {
//           text: "Download PDF",
//           link: "https://www.youtube.com/embed/FfNc9n4sIGM",
//         },
//       },
//       {
//         id: ulid(),
//         label: "02",
//         text: "Fabric",
//         description:
//           "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

//         attachment: {
//           text: "Download PDF",
//           link: "https://www.youtube.com/embed/rwGNjmwVp-o",
//         },
//       },
//     ],
//   },
//   [questionIds["E"]]: {
//     instructions: {
//       title: "Modern",
//       subtitle: "Fun, sleek, and cool!",
//       imageUrl: modernImage,
//     },
//     attachment: {
//       text: "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",
//       link: "../to/download Url/of the attachment",
//     },
//     places: [
//       {
//         id: ulid(),
//         label: "01",
//         text: "Juncture PHX",
//         description:
//           "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

//         attachment: {
//           text: "Download PDF",
//           link: "https://www.youtube.com/embed/tGrHIo3sh-0",
//         },
//       },
//       {
//         id: ulid(),
//         label: "02",
//         text: "Soho63",
//         description:
//           "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

//         attachment: {
//           text: "Download PDF",
//           link: "https://www.youtube.com/embed/-Gdd9qk9B7s",
//         },
//       },
//       {
//         id: ulid(),
//         label: "03",
//         text: "Hotel Valley Ho",
//         description:
//           "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

//         attachment: {
//           text: "Download PDF",
//           link: "https://www.youtube.com/embed/BQnWf9iXuj8",
//         },
//       },
//     ],
//   },
//   [questionIds["F"]]: {
//     instructions: {
//       title: "	Rustic Yet Chic",
//       subtitle:
//         "Classic and cozy spaces that are classed up and ready for a party",
//       imageUrl: rustic_yet_chicImage,
//     },
//     attachment: {
//       text: "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",
//       link: "../to/download Url/of the attachment",
//     },
//     places: [
//       {
//         id: ulid(),
//         label: "01",
//         text: "The Windmill Winery - Big Red Barn",
//         description:
//           "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

//         attachment: {
//           text: "Download PDF",
//           link: "https://www.youtube.com/embed/CwLWV3k9h2Y",
//         },
//       },
//       {
//         id: ulid(),
//         label: "02",
//         text: "Schnep's Farm - Big Red Barn",
//         description:
//           "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

//         attachment: {
//           text: "Download PDF",
//           link: "https://www.youtube.com/embed/CwLWV3k9h2Y",
//         },
//       },
//       {
//         id: ulid(),
//         label: "03",
//         text: "Tanque Verde - Big Barn",
//         description:
//           "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

//         attachment: {
//           text: "Download PDF",
//           link: "https://www.youtube.com/embed/ezNyNDvRT1U",
//         },
//       },
//       {
//         id: ulid(),
//         label: "04",
//         text: "Tanque Verde - Cottonwood Grove",
//         description:
//           "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

//         attachment: {
//           text: "Download PDF",
//           link: "https://www.youtube.com/embed/SJ9neqsvNbo",
//         },
//       },
//     ],
//   },
// };

// export const INITIAL_PLACES_RANKING = {
//   [questionIds["A"]]: {},
//   [questionIds["B"]]: {},
//   [questionIds["C"]]: {},
//   [questionIds["D"]]: {},
//   [questionIds["E"]]: {},
//   [questionIds["F"]]: {},
// };

// export const STEP_3_QUESTIONS = {
//   type: "single_select",
//   introduction: ` Venue availability differs drastically based on the date and day you
//   decide to have your wedding. How flexible are you when it comes to
//   your date?`,
//   subtitle: "Description(Optional)",
//   answers: [
//     {
//       id: ulid(),
//       label: "A",

//       choice:
//         "Our date is SUPER important to us. If our top pick doesn’t have it available, move on to the next venue on our list.",
//     },
//     {
//       id: ulid(),
//       label: "B",
//       choice:
//         " We are willing to look at another date in the same month as long as it’s a Friday, Saturday, or Sunday.",
//     },
//     {
//       id: ulid(),
//       label: "C",
//       choice:
//         "We are willing to look at booking a week day date as long as it’s in the same month.",
//     },
//     {
//       id: ulid(),
//       label: "D",
//       choice:
//         "We are flexible on the month and the day if it lets us book our favorite venue.",
//     },
//     {
//       id: ulid(),
//       label: "E",
//       choice: "We haven't settled on a date and we're open to suggestions.",
//     },
//   ],
// };

// export const LEAVE_A_NOTE = {
//   id: ulid(),
//   title: "Notes for your fairy godmother about venue selection",
//   subtitle:
//     "If there is anything that needs to be renewed or mentioned additionally now is the time",
//   placeholder: "Type your answer here",
//   image: "./url/to/img.png",
// };
