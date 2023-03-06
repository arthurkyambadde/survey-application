import React from "react";

import upArrow from "../../assets/icons/upArrow.svg";
import downArrow from "../../assets/icons/downArrow.svg";

function Controls() {
  const scrollDown = () => {
    window.scrollBy(0, window.innerHeight); // scroll down by 100vh
  };

  const scrollUp = () => {
    window.scrollBy(0, -window.innerHeight); // scroll up by 100vh
  };

  return (
    <div className="fixed flex bottom-8 right-8 gap-0.5">
      <img
        src={upArrow}
        alt="up arrow "
        className="w-6 h-6 bg-primarybtn text-white rounded cursor-pointer "
        onClick={scrollUp}
      />
      <img
        src={downArrow}
        alt="down arrow "
        className="w-6 h-6 bg-primarybtn text-white rounded cursor-pointer"
        onClick={scrollDown}
      />
    </div>
  );
}

export default Controls;
