import React from "react";
import DateInput from "./DateInput";
import whiteTickIcon from "../../assets/icons/whiteTick.svg";

function SelectDate() {
  return (
    <section className="h-screen w-screen flex  items-center justify-center">
      <div className="w-1/2 p-16">
        <p className="text-2xl mb-8">What date did you have in mind?</p>
        <DateInput />
        <button className="py-2 px-2  mt-4 gap-2 rounded bg-primarybtn flex align-middle justify-between text-white w-[80px]">
          <span className="text-white  font-medium ">OK</span>
          <img src={whiteTickIcon} alt="white tick" className="h-6 w-6" />
        </button>
      </div>
      <div className="w-1/2 flex align-middle justify-center"> image</div>
    </section>
  );
}

export default SelectDate;
