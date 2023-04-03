import React from "react";
import { MediaViewer } from "../../../components/MediaViewer/MediaViewer";
import { Question } from "../../../components/question/Question";
import { data } from "../../../data/data";
import { useVenue } from "../../../hooks/useVenue";
import "./PlaceRating.css";

export function PlaceRating({
  venue,
  places,
  onRatePlace,
  placeRatings,
  venueTitle,
  item_id,
}) {
  const { hasError } = useVenue();

  console.log("rendering------------- place");

  return (
    <section className="relative">
      {places.map((place) => {
        const places_layout = venue.choices;

        //loops through places_layout
        const place_layout = places_layout.find((item) => item.id === item_id);

        const options = place.mcqs.choices;
        console.log("place", options);

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
                  title={place.question}
                  attachment={place_layout.attachment}
                  description={place_layout.description}
                  type={"single_select"}
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
              <div className="w-1/2 p-24 h-1/2 flex align-middle justify-center">
                <MediaViewer videoUrl={place_layout.layout.attachment.link} />
              </div>
            </div>
          </section>
        );
      })}
    </section>
  );
}
