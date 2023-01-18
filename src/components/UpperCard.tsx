import InputRange from "./InputRange";
import ToggleButton from "./ToggleButton";

export default function UpperCard() {
  return (
    <div className="relative flex flex-col pt-[34px] pb-[40px] px-[11px] h-auto lg:py-[40px] lg:px-[35px] lg:h-[260px]">
      <div className="flex flex-col gap-[90px] items-center lg:flex-row lg:justify-between">
        <div className="font-extrabold text-[0.75rem] lg:text-[0.875rem]">
          100K PAGEVIEWS
        </div>
        <h2 className="flex items-center">
          <span className="text-blue-900 font-extrabold text-[1.9375rem] lg:text-[2.375rem]">
            $16.00
          </span>
          <span className="ml-[9px] text-[0.9375rem] lg:text-base">/month</span>
        </h2>
      </div>
      <InputRange />
      <div className="flex items-center mt-[35px] lg:mt-auto ml-auto">
        <p aria-hidden className="text-[0.75rem] text-center">
          Monthly Billing
        </p>
        <ToggleButton />
        <p aria-hidden className="text-[0.75rem] text-center">
          Yearly Billing
        </p>
        <div className="px-[7px] py-[2px] ml-[7px] mr-[9px] flex items-center bg-red-300 text-[10px] font-extrabold rounded-[42px] lg:ml-[10px] lg:mr-[20px] customShadow-1">
          <span aria-hidden className="block lg:hidden text-red-500">
            -25%
          </span>
          <span aria-hidden className="hidden lg:block text-red-500">
            25% discount
          </span>
        </div>
      </div>
    </div>
  );
}
