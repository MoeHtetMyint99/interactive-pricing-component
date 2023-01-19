import { useRef, useState } from "react";

export default function InputRange() {
  const max = 20;
  const [val, setVal] = useState(max / 2);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  return (
    <div className="absolute top-[75px] left-[50px] right-[50px] lg:left-[25px] lg:right-[25px] lg:top-[118px]">
      <span
        ref={spanRef}
        className="absolute pointer-events-none top-1/2 left-0 z-10 h-[7px] w-1/2 bg-cyan-300 rounded-full"
      ></span>
      <label htmlFor="myRange" className="sr-only">
        Pricing Range
      </label>
      <input
        className="customRange w-full rounded-full appearance-none h-[7px] bg-blue-300 cursor-pointer thumb:appearance-none thumb:w-[40px] thumb:h-[40px] thumb:rounded-full thumb:bg-cyan-500/80 thumb:relative thumb:z-[11] thumb:cursor-pointer thumb:thumb-shadow thumb:hover:bg-cyan-500/60 thumb:active:bg-cyan-500"
        type="range"
        id="myRange"
        value={val}
        min="0"
        max={max}
        step="1"
        onChange={(e) => {
          const span = spanRef.current as HTMLSpanElement;
          const val = parseInt(e.target.value);
          const max = parseInt(e.target.max);
          setVal(val);
          if (span) span.style.width = (val / max) * 100 + "%";
        }}
      />
    </div>
  );
}
