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

export const STEP_1_QUESTION = {
  id: "1",
  title: "Tell us about your dream venue!",
  instruction: "You can choose 4 more",
  answers: {
    type: "multi_select",
    choices: [
      { id: "A", text: "Gordon Greenery" },
      { id: "B", text: "Desert dream" },
      { id: "C", text: "Distinctily arizona" },
      { id: "D", text: "Industrial" },
      { id: "E", text: "Modern" },
      { id: "F", text: "Rustic yet Chic" },
    ],
  },
  image: `../url/to/img.jp`,
};

const RATINGS = [
  {
    id: "A",
    label: "My Favourites",
  },
  {
    id: "B",
    label: "This could work",
  },
  {
    id: "C",
    label: "Not for me",
  },
];

// These are questions for each venue and they'll be rendered dynamically based off of chosen venue id
export const STEP_2_QUESTIONS = {
  type: "single_select",
  choices: RATINGS,
  A: {
    instructions: {
      title: "Garden Greenery",
      subtitle:
        "An oasis in the desert, you'll enjoy lush gardens, grassy spaces, and trees!",
      image: "../url/to/image.jpg",
    },
    places: [
      { id: "01", text: "The Japanese Freindship Garden" },
      { id: "02", text: "The Windmill Winery - Lake House" },
      { id: "03", text: "Schnep's Farm - Meadow" },
      { id: "04", text: "Tubac Golf Course and Resort" },
      { id: "05", text: "Verrado Golf Club" },
      { id: "06", text: "Encanterra Golf Club" },
    ],
  },
  B: {
    instructions: {
      title: "Desert drean",
      subtitle:
        "Perfectly pristine desert landscaping and authentic desert backdrops!",
      image: "../url/to/image.jpg",
    },
    places: [
      { id: "01", text: "The Paseo" },
      { id: "02", text: "Desert Foothills" },
    ],
  },
  C: {
    instructions: {
      title: "Distinctily arizona",
      subtitle: "The definition of the Southwest's history and present!",
      image: "../url/to/image.jpg",
    },
    places: [
      { id: "01", text: "Schnep's Farm - Farm House" },
      { id: "02", text: "Hacienda Del Sol" },
      { id: "03", text: "Tanque Verde - Saguaro Room" },
      { id: "04", text: "The Historic Bates Mansion" },
      { id: "05", text: "The Irish Cultural Center" },
      { id: "06", text: "The Ocotillo" },
      { id: "07", text: "The Vic" },
      { id: "08", text: "La Cocina at Encanterra " },
      { id: "09", text: "The Rubi House" },
    ],
  },
  D: {
    instructions: {
      title: "Industrial",
      subtitle: "Clean, classic, and perfectly pulled together!",
      image: "../url/to/image.jpg",
    },
    places: [
      { id: "01", text: "Sunkist" },
      { id: "02", text: "Fabric" },
    ],
  },
  E: {
    instructions: {
      title: "Modern",
      subtitle: "Fun, sleek, and cool!",
      image: "../url/to/image.jpg",
    },
    places: [
      { id: "01", text: "Juncture PHX" },
      { id: "02", text: "Soho63" },
      { id: "03", text: "Hotel Valley Ho" },
    ],
  },
  F: {
    instructions: {
      title: "Modern",
      subtitle: "Fun, sleek, and cool!",
      image: "../url/to/image.jpg",
    },
    places: [
      { id: "01", text: "The Windmill Winery - Big Red Barn" },
      { id: "02", text: "Schnep's Farm - Big Red Barn" },
      { id: "03", text: "Tanque Verde - Big Barn" },
      { id: "04", text: "Tanque Verde - Cottonwood Grove" },
    ],
  },
};
