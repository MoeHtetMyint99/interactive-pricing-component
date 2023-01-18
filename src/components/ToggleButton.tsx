import { ChangeEvent, MouseEvent, useRef, useState } from "react";

export default function ToggleButton() {
  const [billType, setBillType] = useState("monthly");

  function eventHandler(e: MouseEvent | ChangeEvent) {
    const ele = e.target as HTMLInputElement;
    if (ele.type === "radio") {
      if (ele.value === "monthly") setBillType("monthly");
      if (ele.value === "yearly") setBillType("yearly");
    } else {
      if (billType === "monthly") setBillType("yearly");
      else setBillType("monthly");
    }
  }

  return (
    <div
      className="bg-blue-310 focus-within:bg-cyan-300 hover:bg-cyan-300 inline-block relative mx-4 w-[42px] h-[22px] rounded-full overflow-hidden cursor-pointer transition-colors duration-300"
      onClick={eventHandler}
    >
      <label className="sr-only">
        Monthly Billing
        <input
          type="radio"
          value="monthly"
          checked={billType === "monthly" ? true : false}
          onChange={eventHandler}
        />
      </label>
      <label className="sr-only">
        Yearly Billing (25% discount)
        <input
          type="radio"
          value="yearly"
          checked={billType === "yearly" ? true : false}
          onChange={eventHandler}
        />
      </label>
      <span
        className={`${
          billType === "monthly" ? "right-[calc(100%-18px)]" : "right-[4px]"
        } absolute w-[14px] h-[14px] top-1/2 -translate-y-1/2 rounded-full bg-white transition-[right] duration-300 pointer-events-none`}
      ></span>
    </div>
  );
}
