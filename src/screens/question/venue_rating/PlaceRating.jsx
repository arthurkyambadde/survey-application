import React from "react";
import { MediaViewer } from "../../../components/MediaViewer/MediaViewer";
import { Question } from "../../../components/question/Question";
import { data } from "../../../data/data";
import { useVenue } from "../../../hooks/useVenue";
import "./PlaceRating.css";

export function PlaceRating({
  places,
  onRatePlace,
  placeRatings,
  venueTitle,
  item_id,
}) {
  const { hasError } = useVenue();

  return (
    <section className="relative">
      {places.map((place) => {
        const place_id = place.id;
        const places_layout = data.STEP_2_QUESTIONS[item_id].places;
        const place_layout = places_layout.find((item) => item.id === place_id);

        const options = data.mcqs.choices;

        return (
          <section className="h-screen w-screen relative " key={place.id}>
            <div
              className="w-full h-14 text-4xl bg-headerbg flex items-center justify-center header-animation"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 5,
              }}
            >
              {venueTitle}
            </div>
            <div className="flex items-center sm:flex-col-reverse justify-center h-screen sm:h-1/2 sm:min-h-0 pb-14">
              <div className="w-1/2 p-16 h-1/2 flex sm:w-full sm:mt-8 sm:p-0 flex-col justify-between">
                <Question
                  key={place.id}
                  id={place.id}
                  title={place.question}
                  attachment={place_layout.attachment}
                  description={place_layout.description}
                  type={data.STEP_2_QUESTIONS.type}
                  options={options}
                  onMakeSelection={(answerId) =>
                    onRatePlace(place.id, answerId)
                  }
                  selectedValue={placeRatings[place.id]}
                  superId={place.id}
                  venueTitle={venueTitle}
                  showError={hasError}
                />
              </div>
              <div className="w-1/2 p-24 sm:pb-0 sm:pt-[200px] h-1/3  sm:w-1/2 sm:mt-8 flex align-middle justify-center">
                <MediaViewer videoUrl={place_layout.attachment.link} />
              </div>
            </div>
          </section>
        );
      })}
    </section>
  );
}
