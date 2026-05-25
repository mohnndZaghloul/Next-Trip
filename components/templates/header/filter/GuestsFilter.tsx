import { SetStateAction } from "react";

export default function GuestsFilter({
  setSelected,
}: {
  setSelected: (value: SetStateAction<string>) => void;
}) {
  return (
    <>
      <button
        onClick={() => setSelected("who")}
        className="flex-1 hidden md:block z-20 bg-transparent hover:bg-chart-1/30 text-start cursor-pointer rounded-full py-3 px-7">
        <label className="text-sm">who</label>
        <p className="text-muted-foreground">Add guests</p>
      </button>
    </>
  );
}
