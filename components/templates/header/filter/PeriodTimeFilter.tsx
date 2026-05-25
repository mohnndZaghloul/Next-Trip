import React, { SetStateAction } from "react";

export default function PeriodTimeFilter({
  setSelected,
}: {
  setSelected: (value: SetStateAction<string>) => void;
}) {
  return (
    <>
      <button
        onClick={() => setSelected("when")}
        className="flex-1 hidden md:block z-20 bg-transparent hover:bg-chart-1/30 text-start cursor-pointer rounded-full py-3 px-7">
        <label className="text-sm">when</label>
        <p className="text-muted-foreground">Add dates</p>
      </button>
    </>
  );
}
