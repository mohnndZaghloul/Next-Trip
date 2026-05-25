"use client";

import { SearchIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import PeriodTimeFilter from "./PeriodTimeFilter";
import PlaceHeaderFilter from "./PlaceHeaderFilter";
import GuestsFilter from "./GuestsFilter";

export default function HeaderFilter() {
  const [selected, setSelected] = useState("");
  const boxRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      // @ts-ignore
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setSelected("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="container my-8">
      <div
        ref={boxRef}
        className="relative shadow-2xl w-lg mx-auto flex justify-between items-center border border-primary bg-secondary rounded-full">
        <PlaceHeaderFilter setSelected={setSelected} />
        <PeriodTimeFilter setSelected={setSelected} />
        <GuestsFilter setSelected={setSelected} />
        <div
          className={`absolute top-0 left-1/3 ${selected == "where" ? "-translate-x-full" : selected == "when" ? "translate-x-0" : selected === "who" ? "translate-x-full" : "opacity-0 scale-0"} h-full w-1/3 bg-chart-1 rounded-full border-primary border transition-all duration-300`}
        />
        <button
          onClick={() => setSelected("")}
          className={`absolute right-2 top-1/2 -translate-y-1/2
              h-[85%] rounded-full
              bg-linear-300 from-primary to-chart-2
              text-secondary font-medium
              flex items-center justify-center
              overflow-hidden
              transition-all duration-500
              z-20 ${selected === "" ? "w-14 px-0" : "w-36 px-5 gap-2 "}`}>
          <SearchIcon />
          <span
            className={` whitespace-nowrap
            transition-all duration-300 ${
              selected === ""
                ? "w-0 opacity-0 translate-x-5"
                : "opacity-100 translate-x-0"
            }`}>
            Search
          </span>
        </button>
      </div>
    </div>
  );
}
