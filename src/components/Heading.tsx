export default function Heading() {
  return (
    <div className="flex flex-col justify-center items-center background-circles w-fit h-[145px] mb-[30px] lg:mb-[55px]">
      <h1 className="text-[1.25rem] text-blue-900 font-extrabold mb-[10px] lg:text-[1.75rem] lg:mb-[12px]">
        Simple, traffic-based pricing
      </h1>
      <div className="text-[0.8125rem] lg:text-[0.9375rem]">
        <div className="flex flex-wrap flex-col justify-center items-center gap-[0.25em] sm:flex-row">
          <span>Sign-up for our 30-day trial.</span>
          <span>No credit card required.</span>
        </div>
      </div>
    </div>
  );
}
