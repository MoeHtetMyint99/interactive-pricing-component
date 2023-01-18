import LowerCard from "./LowerCard";
import UpperCard from "./UpperCard";

export default function Card() {
  return (
    <section className="w-full max-w-[540px] bg-white rounded-[10px] shadow-xl">
      <UpperCard />
      <div className="h-[1px] bg-blue-300"></div>
      <LowerCard />
    </section>
  );
}
