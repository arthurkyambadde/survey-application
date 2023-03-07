import React, { useContext } from "react";
import whiteTickIcon from "../../assets/icons/whiteTick.svg";
import ScrollContext from "../../App";

export default function Confirm() {
  //
  const { scrollDown } = useContext(ScrollContext);

  return (
    <button
      className="py-2 px-2  mt-4 gap-2 rounded bg-primarybtn flex align-middle justify-between text-white w-[80px]"
      onClick={scrollDown}
    >
      <span className="text-white  font-medium ">OK</span>
      <img src={whiteTickIcon} alt="white tick" className="h-6 w-6" />
    </button>
  );
}
