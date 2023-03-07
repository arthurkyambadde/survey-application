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
  instruction: "",
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
