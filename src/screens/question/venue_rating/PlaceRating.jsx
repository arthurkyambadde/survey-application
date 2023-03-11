import React from "react";
import { MediaViewer } from "../../../components/MediaViewer/MediaViewer";
import { Question } from "../../../components/question/Question";
import { STEP_2_QUESTIONS } from "../../../data/Screens";
import { useVenue } from "../../../hooks/useVenue";
import "./PlaceRating.css";

export function PlaceRating({ places, onRatePlace, placeRatings, venueTitle }) {
  const { hasError } = useVenue();
  return (
    <section className="relative">
      {places.map((place) => {
        return (
          <section className="h-screen w-screen relative" key={place.id}>
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
            <div className="flex items-center justify-center h-screen sm:h-auto sm:min-h-0 pb-14">
              <div className="w-1/2 p-16 h-1/2 flex flex-col justify-between">
                <Question
                  key={place.id}
                  id={place.id}
                  title={place.text}
                  attachment={place.attachment}
                  description={place.description}
                  type={STEP_2_QUESTIONS.type}
                  options={STEP_2_QUESTIONS.choices}
                  onMakeSelection={(answerId) =>
                    onRatePlace(place.id, answerId)
                  }
                  selectedValue={placeRatings[place.id]}
                  superId={place.id}
                  venueTitle={venueTitle}
                  showError={hasError}
                />
              </div>
              <div className="w-1/2 p-24 h-1/2 flex align-middle justify-center">
                <MediaViewer videoUrl={place.attachment.link} />
              </div>
            </div>
          </section>
        );
      })}
    </section>
  );
}
