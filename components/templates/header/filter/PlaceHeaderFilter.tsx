import { SetStateAction } from "react";

export default function PlaceHeaderFilter({
  setSelected,
}: {
  setSelected: (value: SetStateAction<string>) => void;
}) {
  return (
    <>
      <button
        onClick={() => setSelected("where")}
        className="flex-1 z-20 bg-transparent hover:bg-chart-1/30 text-start cursor-pointer rounded-full py-3 px-7">
        <label className="text-sm block">where</label>
        <input
          placeholder="Search destinations"
          className="border-0 bg-transparent px-0 text-lg! outline-0"
        />
      </button>
    </>
  );
}
