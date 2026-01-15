//import RSVPForm from "./RSVPForm";
import RSVPForm from "@/components/RSVPForm";


const points = [
  "A clear view of the leadership & workforce capabilities that will matter most over the next 24–36 months.",
  "Insights from high-scale operating environments including the former CLO of McDonald’s on what truly scales and what breaks under pressure.",
  "Signals for where capability gaps may already be forming in your organization.",
  "Peer-validated perspectives from leaders running workforce, talent, and transformation ecosystems at scale.",
  "Actionable insights you can take straight into your next exec meeting.",
];

export default function BehindTheCurtain() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2">
        {/* Left content */}
        <div>
          <h2 className="text-xl font-semibold text-orange-500">
            Go behind the curtain with real examples and high-scale insights
          </h2>

          <p className="mt-6 text-sm font-medium text-gray-900">
            You’ll walk away with:
          </p>

          <ul className="mt-6 space-y-4">
            {points.map((point, i) => (
              <li key={i} className="flex gap-4">
                <span className="mt-1 block h-full w-[2px] bg-orange-400" />
                <p className="text-sm text-gray-700">{point}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/chess.png"
            alt="Strategic insights"
            className="max-w-sm"
          />
        </div>
      </div>

      {/* RSVP bar */}
          <div className="mt-16 flex justify-center">
              <RSVPForm className="max-w-3xl w-full" />
          </div>

    </section>
  );
}
