import React, { useContext } from "react";
import whiteTickIcon from "../../assets/icons/whiteTick.svg";
import { ScrollContext } from "../../App";

function Notes() {
  const { scrollDown } = useContext(ScrollContext);

  return (
    <section className="h-screen w-screen flex items-center justify-center">
      <div className="w-1/2 p-24 h-auto flex flex-col justify-between">
        <p className=" w-1/2">
          Notes for your fairy god mother about your choice
        </p>
        <p className=" w-1/2">
          If there is anything that needs to be reviewed or mentioned
          additionaly now is the time!
        </p>
        <input
          className="border-b-2 w-1/2 border-primarybtn border-1 outline-none focus:border-primarybtn"
          type="text"
          placeholder="Type your answer here"
        />

        <button
          className="py-2 px-2  mt-4 gap-2 rounded bg-primarybtn flex align-middle justify-between text-white w-[80px]"
          onClick={scrollDown}
        >
          <span className="text-white  font-medium ">OK</span>
          <img src={whiteTickIcon} alt="white tick" className="h-6 w-6" />
        </button>
      </div>

      <div className="w-1/2 flex align-middle justify-center"> image</div>
    </section>
  );
}

export default Notes;
