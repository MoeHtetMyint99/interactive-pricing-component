import CheckIcon from "../assets/images/icon-check.svg";

export default function LowerCard() {
  return (
    <div className="h-[200px] flex flex-col items-center justify-between px-[45px] pt-[25px] pb-[30px] lg:h-[140px] lg:flex-row">
      <ul className="grid justify-items-center gap-y-[11px] text-blue-800 text-[0.75rem] lg:justify-items-start">
        <li className="flex items-center gap-[15px]">
          <img src={CheckIcon} aria-hidden="true" /> Unlimited websites
        </li>
        <li className="flex items-center gap-[15px]">
          <img src={CheckIcon} aria-hidden="true" /> 100% data ownership
        </li>
        <li className="flex items-center gap-[15px]">
          <img src={CheckIcon} aria-hidden="true" /> Email reports
        </li>
      </ul>
      <button className="px-[45px] py-[12px] bg-blue-900 rounded-full text-blue-400 font-extrabold text-[0.75rem] hocus:text-white">
        Start my trial
      </button>
    </div>
  );
}
