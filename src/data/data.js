import { ulid } from "ulid";
import introductionGif from "../assets/sectionsvgs/introduction";
import castleGif from "../assets/sectionsvgs/castle.gif";
import gardenGreenImage from "../assets/sectionsvgs/gardenGreen.gif";
import desertDreamImage from "../assets/sectionsvgs/desert_dream.gif";
import distinctilyArizonaImage from "../assets/sectionsvgs/distinctly_arizona.gif";
import industrialImage from "../assets/sectionsvgs/industrial.gif";
import modernImage from "../assets/sectionsvgs/modern.gif";
import rustic_yet_chicImage from "../assets/sectionsvgs/rustic_yet_chic.gif";
import unicornGif from "../assets/sectionsvgs/Unicorn.gif";

const questionIds = {
  A: ulid(),
  B: ulid(),
  C: ulid(),
  D: ulid(),
  E: ulid(),
  F: ulid(),
};

export const INITIAL_PLACES_RANKING = {
  [questionIds["A"]]: {},
  [questionIds["B"]]: {},
  [questionIds["C"]]: {},
  [questionIds["D"]]: {},
  [questionIds["E"]]: {},
  [questionIds["F"]]: {},
};

export const data = {
  controls_instructions: {
    text: "You can always use the little blue navigation arrows at the bottom of the screen to go back and review the venues again.",
    link: castleGif,
  },

  mcqs: {
    type: "single_select",
    choices: [
      { id: ulid(), label: "A", text: "My Favourites" },
      { id: ulid(), label: "B", text: "This could work" },
      { id: ulid(), label: "C", text: "Not for me" },
    ],
  },

  end_page: {
    link: unicornGif,
    text: "Way to go!\nYour Venue Ranker is complete :) Your info is flittering off to Madge and her team. We'll be in touch soon!",
  },

  STEP_2_QUESTIONS: {
    type: "single_select",
    [questionIds["A"]]: {
      instructions: {
        title: "Garden Greenery",
        subtitle:
          "An oasis in the desert, you'll enjoy lush gardens, grassy spaces, and trees!",
        imageUrl: gardenGreenImage,
      },

      places: [
        {
          id: "garden_01",
          label: "01",
          description: "",

          attachment: {
            text: "Download_Venue Specific Details",
            link: "https://www.youtube.com/embed/AGifXQlNXHw",
          },
        },
        {
          id: "garden_02",
          label: "02",
          description:
            "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

          attachment: {
            text: "Download PDF",
            link: "https://www.youtube.com/embed/CwLWV3k9h2Y",
          },
        },
        {
          id: "garden_03",
          label: "03",
          question: "Schnep's Farm - Meadow",
          description:
            "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

          attachment: {
            text: "Download PDF",
            link: "https://www.youtube.com/embed/CwLWV3k9h2Y",
          },
          answer: "",
        },
        {
          id: "garden_04",
          label: "04",
          description:
            "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

          attachment: {
            text: "Download PDF",
            link: "https://www.youtube.com/embed/mL-WYrEq5EM",
          },
        },
        {
          id: "garden_05",
          label: "05",
          description:
            "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

          attachment: {
            text: "Download PDF",
            link: "https://www.youtube.com/embed/CwLWV3k9h2Y",
          },
        },
        {
          id: "garden_06",
          label: "06",
          description:
            "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

          attachment: {
            text: "Download PDF",
            link: "https://www.youtube.com/embed/CwLWV3k9h2Y",
          },
        },
      ],
    },
    [questionIds["B"]]: {
      instructions: {
        title: "Desert drean",
        subtitle:
          "Perfectly pristine desert landscaping and authentic desert backdrops!",
        imageUrl: desertDreamImage,
      },
      attachment: {
        text: "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",
        link: "../to/download Url/of the attachment",
      },
      places: [
        {
          id: "desert_01",
          label: "01",
          description:
            "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

          attachment: {
            text: "Download PDF",
            link: "https://www.youtube.com/embed/HrAQPgOEO68",
          },
        },
        {
          id: "desert_02",
          label: "02",
          description:
            "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

          attachment: {
            text: "Download PDF",
            link: "https://www.youtube.com/embed/T4Nbf3k06Vs",
          },
        },
      ],
    },
    [questionIds["C"]]: {
      instructions: {
        title: "Distinctily arizona",
        subtitle: "The definition of the Southwest's history and present!",
        imageUrl: distinctilyArizonaImage,
      },
      attachment: {
        text: "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",
        link: "../to/download Url/of the attachment",
      },
      places: [
        {
          id: "arizona_01",
          label: "01",
          description:
            "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

          attachment: {
            text: "Download PDF",
            link: "https://www.youtube.com/embed/CwLWV3k9h2Y",
          },
        },
        {
          id: "arizona_02",
          label: "02",
          description:
            "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

          attachment: {
            text: "Download PDF",
            link: "https://www.youtube.com/embed/1oTX2dAi5Ig",
          },
        },
        {
          id: "arizona_03",
          label: "03",
          description:
            "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

          attachment: {
            text: "Download PDF",
            link: "https://www.youtube.com/embed/MetPMveCal0",
          },
        },
        {
          id: "arizona_04",
          label: "04",
          description:
            "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

          attachment: {
            text: "Download PDF",
            link: "https://www.youtube.com/embed/psMcgHpJ-ec",
          },
        },
        {
          id: "arizona_05",
          label: "05",
          description:
            "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

          attachment: {
            text: "Download PDF",
            link: "https://www.youtube.com/embed/8UDbpY5-frU",
          },
        },
        {
          id: "arizona_06",
          label: "06",
          question: "The Ocotillo",
          description:
            "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

          attachment: {
            text: "Download PDF",
            link: "https://www.youtube.com/embed/Y6TGV5PQIE",
          },
          answer: "",
        },
        {
          id: "arizona_07",
          label: "07",
          description:
            "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

          attachment: {
            text: "Download PDF",
            link: "https://www.youtube.com/embed/CwLWV3k9h2Y",
          },
        },
        {
          id: "arizona_08",
          label: "08",
          description:
            "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

          attachment: {
            text: "Download PDF",
            link: "https://www.youtube.com/embed/CwLWV3k9h2Y",
          },
        },
        {
          id: "arizona_09",
          label: "09",
          description:
            "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

          attachment: {
            text: "Download PDF",
            link: "https://www.youtube.com/embed/_F-fbyBIXro",
          },
        },
      ],
    },
    [questionIds["D"]]: {
      instructions: {
        title: "Industrial",
        subtitle: "Clean, classic, and perfectly pulled together!",
        imageUrl: industrialImage,
      },
      attachment: {
        text: "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",
        link: "../to/download Url/of the attachment",
      },
      places: [
        {
          id: "industrial_01",
          label: "01",
          description:
            "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

          attachment: {
            text: "Download PDF",
            link: "https://www.youtube.com/embed/FfNc9n4sIGM",
          },
        },
        {
          id: "industrial_02",
          label: "02",
          description:
            "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

          attachment: {
            text: "Download PDF",
            link: "https://www.youtube.com/embed/rwGNjmwVp-o",
          },
        },
      ],
    },
    [questionIds["E"]]: {
      instructions: {
        title: "Modern",
        subtitle: "Fun, sleek, and cool!",
        imageUrl: modernImage,
      },
      attachment: {
        text: "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",
        link: "../to/download Url/of the attachment",
      },
      places: [
        {
          id: "modern_01",
          label: "01",
          description:
            "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

          attachment: {
            text: "Download PDF",
            link: "https://www.youtube.com/embed/tGrHIo3sh-0",
          },
        },
        {
          id: "modern_02",
          label: "02",
          description:
            "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

          attachment: {
            text: "Download PDF",
            link: "https://www.youtube.com/embed/-Gdd9qk9B7s",
          },
        },
        {
          id: "modern_03",
          label: "03",
          description:
            "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

          attachment: {
            text: "Download PDF",
            link: "https://www.youtube.com/embed/BQnWf9iXuj8",
          },
        },
      ],
    },
    [questionIds["F"]]: {
      instructions: {
        title: "	Rustic Yet Chic",
        subtitle:
          "Classic and cozy spaces that are classed up and ready for a party",
        imageUrl: rustic_yet_chicImage,
      },
      attachment: {
        text: "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",
        link: "../to/download Url/of the attachment",
      },
      places: [
        {
          id: "rustic_01",
          label: "01",
          description:
            "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

          attachment: {
            text: "Download PDF",
            link: "https://www.youtube.com/embed/CwLWV3k9h2Y",
          },
        },
        {
          id: "rustic_02",
          label: "02",
          description:
            "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

          attachment: {
            text: "Download PDF",
            link: "https://www.youtube.com/embed/CwLWV3k9h2Y",
          },
        },
        {
          id: "rustic_03",
          label: "03",
          description:
            "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

          attachment: {
            text: "Download PDF",
            link: "https://www.youtube.com/embed/ezNyNDvRT1U",
          },
        },
        {
          id: "rustic_04",
          label: "04",
          description:
            "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

          attachment: {
            text: "Download PDF",
            link: "https://www.youtube.com/embed/SJ9neqsvNbo",
          },
        },
      ],
    },
  },

  venueRankerLayout: [
    // introduction video
    {
      type: "introduction",
      id: ulid(),
      title: "The Venue Ranker",
      videoUrl: `https://www.youtube.com/embed/E0fPPRiY-5w`,
    },

    // form instructions
    {
      type: "instructions",
      id: ulid(),
      title: "Pixie point",
      subtitle: `As you work through the ranker, please only select one as "my favorite.
    Each venue has a "venue specifics" PDF for you to download and review. Be sure to look this over before deciding if a venue is the one for you.`,
      imageUrl: introductionGif,
    },

    // venues to be chosen from
    {
      type: "multi_choice_question",
      id: ulid(),
      title: "Tell us about your dream venue!",
      answers: {
        type: "multi_select", //multi_select_custom
        choices: [
          { id: questionIds["A"], label: "A", text: "Gordon Greenery" },
          { id: questionIds["B"], label: "B", text: "Desert dream" },
          { id: questionIds["C"], label: "C", text: "Distinctily arizona" },
          { id: questionIds["D"], label: "D", text: "Industrial" },
          { id: questionIds["E"], label: "E", text: "Modern" },
          { id: questionIds["F"], label: "F", text: "Rustic yet Chic" },
        ],
      },
      imageUrl: castleGif,
    },

    //venues layout data

    //lets talk dates
    {
      type: "introduction",
      id: ulid(),
      title: "Lets talk dates",
      imageUrl: desertDreamImage,
    },
  ],

  formQuestion: {
    STEP_2_QUESTIONS_OPTIONS: {
      [questionIds["A"]]: {
        places: [
          {
            id: "garden_01",
            question: "The Japanese Freindship Garden",
            answer: "",
          },
          {
            id: "garden_02",
            question: "The Windmill Winery - Lake House",
            answer: "",
          },
          {
            id: "garden_03",
            question: "Schnep's Farm - Meadow",
            answer: "",
          },
          {
            id: "garden_04",
            question: "Tubac Golf Course and Resort",
            answer: "",
          },
          {
            id: "garden_05",
            question: "Verrado Golf Club",
            answer: "",
          },
          {
            id: "garden_06",
            question: "Encanterra Golf Club",
            answer: "",
          },
        ],
      },
      [questionIds["B"]]: {
        places: [
          {
            id: "desert_01",
            question: "The Paseo",
            answer: "",
          },
          {
            id: "desert_02",
            question: "Desert Foothills",
            answer: "",
          },
        ],
      },
      [questionIds["C"]]: {
        places: [
          {
            id: "arizona_01",
            question: "Schnep's Farm - Farm House",
            answer: "",
          },
          {
            id: "arizona_02",
            question: "Hacienda Del Sol",
            answer: "",
          },
          {
            id: "arizona_03",
            question: "Tanque Verde - Saguaro Room",
            answer: "",
          },
          {
            id: "arizona_04",
            question: "The Historic Bates Mansion",
            answer: "",
          },
          {
            id: "arizona_05",
            question: "The Irish Cultural Center",
            answer: "",
          },
          {
            id: "arizona_06",
            question: "The Ocotillo",
            answer: "",
          },
          {
            id: "arizona_07",
            question: "The Vic",
            answer: "",
          },
          {
            id: "arizona_08",
            question: "La Cocina at Encanterra ",
            answer: "",
          },
          {
            id: "arizona_09",
            question: "The Rubi House",
            answer: "",
          },
        ],
      },
      [questionIds["D"]]: {
        places: [
          {
            id: "industrial_01",
            question: "Sunkist",
            answer: "",
          },
          {
            id: "industrial_02",
            question: "Fabric",
            answer: "",
          },
        ],
      },
      [questionIds["E"]]: {
        places: [
          {
            id: "modern_01",
            question: "Juncture PHX",
            answer: "",
          },
          {
            id: "modern_02",
            question: "Soho63",
            answer: "",
          },
          {
            id: "modern_03",
            question: "Hotel Valley Ho",
            answer: "",
          },
        ],
      },
      [questionIds["F"]]: {
        places: [
          {
            id: "rustic_01",
            question: "The Windmill Winery - Big Red Barn",
            answer: "",
          },
          {
            id: "rustic_02",
            question: "Schnep's Farm - Big Red Barn",
            answer: "",
          },
          {
            id: "rustic_03",
            question: "Tanque Verde - Big Barn",
            answer: "",
          },
          {
            id: "rustic_04",
            question: "Tanque Verde - Cottonwood Grove",
            answer: "",
          },
        ],
      },
    },

    venueRanker: [
      //venues questions

      {
        id: ulid(),
        type: "single_select",
        introduction: ` Venue availability differs drastically based on the date and day you
        decide to have your wedding. How flexible are you when it comes to
        your date?`,
        subtitle: "Description(Optional)",
        question: [
          {
            id: ulid(),
            label: "A",

            choice:
              "Our date is SUPER important to us. If our top pick doesn’t have it available, move on to the next venue on our list.",
          },
          {
            id: ulid(),
            label: "B",
            choice:
              " We are willing to look at another date in the same month as long as it’s a Friday, Saturday, or Sunday.",
          },
          {
            id: ulid(),
            label: "C",
            choice:
              "We are willing to look at booking a week day date as long as it’s in the same month.",
          },
          {
            id: ulid(),
            label: "D",
            choice:
              "We are flexible on the month and the day if it lets us book our favorite venue.",
          },
          {
            id: ulid(),
            label: "E",
            choice:
              "We haven't settled on a date and we're open to suggestions.",
          },
        ],
        answer: "",
      },

      {
        id: ulid(),
        type: "description",
        question: " What date did you have in mind?",
        subtile:
          "If you havent decided just enter any date for this coming month",
        input_type: "date",
        link: gardenGreenImage,
        answer: "",
      },
      {
        id: ulid(),
        type: "description",
        question: "Notes for your fairy godmother about venue selection",
        subtitle:
          "If there is anything that needs to be renewed or mentioned additionally now is the time",
        input_type: "text",
        placeHolder: "Type your answer here",
        link: gardenGreenImage,
        answer: "",
      },
    ],
  },
};
