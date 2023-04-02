import React from "react";
import whiteTickIcon from "../../assets/icons/whiteTick.svg";
import { useVenue } from "../../hooks/useVenue";

export default function Confirm() {
  //
  const { scrollDown } = useVenue();

  return (
    <button
      className="py-2 px-2  mt-4 sm:mt-2 gap-2 rounded bg-primarybtn flex align-middle justify-between text-white w-[80px]"
      onClick={scrollDown}
    >
      <span className="text-white  font-normal text-4xl sm:text-2xl ">OK</span>
      <img src={whiteTickIcon} alt="white tick" className="h-6 w-6 " />
    </button>
  );
}
