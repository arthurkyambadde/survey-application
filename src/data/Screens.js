import { ulid } from "ulid";

export const ONBOARDING_DATA = {
  introduction: {
    title: "The Venue Ranker",
    video: "../url/to/video.mp4",
  },
  instructions: {
    title: "Pixie point",
    subtitle: `As you work through the ranker, please only select one as "my favorite."`,
    text: `Each venue has a "venue specifics" PDF for you to download and review. Be sure to look this over before deciding if a venue is the one for you.`,
    image: "../url/to/image.jpg",
  },
};

const questionIds = {
  A: ulid(),
  B: ulid(),
  C: ulid(),
  D: ulid(),
  E: ulid(),
  F: ulid(),
};

export const STEP_1_QUESTION = {
  id: ulid(),
  title: "Tell us about your dream venue!",
  instruction: "You can choose 4 more",
  answers: {
    type: "multi_select",
    choices: [
      { id: questionIds["A"], label: "A", text: "Gordon Greenery" },
      { id: questionIds["B"], label: "B", text: "Desert dream" },
      { id: questionIds["C"], label: "C", text: "Distinctily arizona" },
      { id: questionIds["D"], label: "D", text: "Industrial" },
      { id: questionIds["E"], labe: "E", text: "Modern" },
      { id: questionIds["F"], label: "F", text: "Rustic yet Chic" },
    ],
  },
  image: `../url/to/img.jp`,
};

const RATINGS = [
  { id: ulid(), label: "A", text: "My Favourites" },
  { id: ulid(), label: "B", text: "This could work" },
  { id: ulid(), label: "C", text: "Not for me" },
];

// These are questions for each venue and they'll be rendered dynamically based off of chosen venue id
export const STEP_2_QUESTIONS = {
  type: "single_select",
  choices: RATINGS,
  controlsIntructions: {
    text: "You can always use the little blue navigation arrows at the bottom of the screen to go back and review the venues again.",
  },

  [questionIds["A"]]: {
    instructions: {
      title: "Garden Greenery",
      subtitle:
        "An oasis in the desert, you'll enjoy lush gardens, grassy spaces, and trees!",
      image: "../url/to/image.jpg",
    },
    controlsIntructions: {
      text: "You can always use the little blue navigation arrows at the bottom of the screen to go back and review the venues again.",
    },
    places: [
      {
        id: ulid(),
        label: "01",
        text: "The Japanese Freindship Garden",
        description: "",

        attachment: {
          text: "Download_Venue Specific Details",
          link: "../to/download Url/of the attachment",
        },
        controlsIntructions: {
          text: "You can always use the little blue navigation arrows at the bottom of the screen to go back and review the venues again.",
        },
      },
      {
        id: ulid(),
        label: "02",
        text: "The Windmill Winery - Lake House",
        description:
          "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

        attachment: {
          text: "Download PDF",
          link: "../to/download Url/of the attachment",
        },
      },
      {
        id: ulid(),
        label: "03",
        text: "Schnep's Farm - Meadow",
        description:
          "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

        attachment: {
          text: "Download PDF",
          link: "../to/download Url/of the attachment",
        },
      },
      {
        id: ulid(),
        label: "04",
        text: "Tubac Golf Course and Resort",
        description:
          "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

        attachment: {
          text: "Download PDF",
          link: "../to/download Url/of the attachment",
        },
      },
      {
        id: ulid(),
        label: "05",
        text: "Verrado Golf Club",
        description:
          "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

        attachment: {
          text: "Download PDF",
          link: "../to/download Url/of the attachment",
        },
      },
      {
        id: ulid(),
        label: "06",
        text: "Encanterra Golf Club",
        description:
          "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",

        attachment: {
          text: "Download PDF",
          link: "../to/download Url/of the attachment",
        },
      },
    ],
  },
  [questionIds["B"]]: {
    instructions: {
      title: "Desert drean",
      subtitle:
        "Perfectly pristine desert landscaping and authentic desert backdrops!",
      image: "../url/to/image.jpg",
    },
    attachment: {
      text: "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",
      link: "../to/download Url/of the attachment",
    },
    places: [
      { id: ulid(), label: "01", text: "The Paseo" },
      { id: ulid(), label: "02", text: "Desert Foothills" },
    ],
  },
  [questionIds["C"]]: {
    instructions: {
      title: "Distinctily arizona",
      subtitle: "The definition of the Southwest's history and present!",
      image: "../url/to/image.jpg",
    },
    attachment: {
      text: "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",
      link: "../to/download Url/of the attachment",
    },
    places: [
      { id: ulid(), label: "01", text: "Schnep's Farm - Farm House" },
      { id: ulid(), label: "02", text: "Hacienda Del Sol" },
      { id: ulid(), label: "03", text: "Tanque Verde - Saguaro Room" },
      { id: ulid(), label: "04", text: "The Historic Bates Mansion" },
      { id: ulid(), label: "05", text: "The Irish Cultural Center" },
      { id: ulid(), label: "06", text: "The Ocotillo" },
      { id: ulid(), label: "07", text: "The Vic" },
      { id: ulid(), label: "08", text: "La Cocina at Encanterra " },
      { id: ulid(), label: "09", text: "The Rubi House" },
    ],
  },
  [questionIds["D"]]: {
    instructions: {
      title: "Industrial",
      subtitle: "Clean, classic, and perfectly pulled together!",
      image: "../url/to/image.jpg",
    },
    attachment: {
      text: "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",
      link: "../to/download Url/of the attachment",
    },
    places: [
      { id: ulid(), label: "01", text: "Sunkist" },
      { id: ulid(), label: "02", text: "Fabric" },
    ],
  },
  [questionIds["E"]]: {
    instructions: {
      title: "Modern",
      subtitle: "Fun, sleek, and cool!",
      image: "../url/to/image.jpg",
    },
    attachment: {
      text: "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",
      link: "../to/download Url/of the attachment",
    },
    places: [
      { id: ulid(), label: "01", text: "Juncture PHX" },
      { id: ulid(), label: "02", text: "Soho63" },
      { id: ulid(), label: "03", text: "Hotel Valley Ho" },
    ],
  },
  [questionIds["F"]]: {
    instructions: {
      title: "Modern",
      subtitle: "Fun, sleek, and cool!",
      image: "../url/to/image.jpg",
    },
    attachment: {
      text: "This venue is part of the Luxury collection, selecting this option will incur an additional cost up to $5K.",
      link: "../to/download Url/of the attachment",
    },
    places: [
      { id: ulid(), label: "01", text: "The Windmill Winery - Big Red Barn" },
      { id: ulid(), label: "02", text: "Schnep's Farm - Big Red Barn" },
      { id: ulid(), label: "03", text: "Tanque Verde - Big Barn" },
      { id: ulid(), label: "04", text: "Tanque Verde - Cottonwood Grove" },
    ],
  },
};

export const INITIAL_PLACES_RANKING = {
  [questionIds["A"]]: {},
  [questionIds["B"]]: {},
  [questionIds["C"]]: {},
  [questionIds["D"]]: {},
  [questionIds["E"]]: {},
  [questionIds["F"]]: {},
};

export const STEP_3_QUESTIONS = {
  type: "single_select",
  introduction: ` Venue availability differs drastically based on the date and day you
  decide to have your wedding. How flexible are you when it comes to
  your date?`,
  subtitle: "Description(Optional)",
  answers: [
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
      choice: "We haven't settled on a date and we're open to suggestions.",
    },
  ],
};

export const LEAVE_A_NOTE = {
  id: ulid(),
  title: "Notes for your fairy godmother about venue selection",
  subtitle:
    "If there is anything that needs to be renewed or mentioned additionally now is the time",
  placeholder: "Type your answer here",
  image: "./url/to/img.png",
};
