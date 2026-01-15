import {
  ArrowPathIcon,
  UsersIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  TrophyIcon,
  ChartBarIcon,
  RocketLaunchIcon
} from "@heroicons/react/24/outline";

const items = [
  {
    title: "Skills Decay",
    desc: "every 2–3 years faster for technical skills",
    icon: ArrowPathIcon,
  },
  {
    title: "Manager Role Shift",
    desc: "orchestrating people + AI agents",
    icon: UsersIcon,
  },
  {
    title: "Leaders + AI Co-Pilots",
    desc: "requires sensemaking and systems thinking",
    icon: ChartBarIcon,
  },
  {
    title: "Frontline Capability",
    desc: "now depends on digital fluency",
    icon: ShieldCheckIcon,
  },
  {
    title: "Core Human Capabilities",
    desc: "analytical reasoning and scenario planning",
    icon: LightBulbIcon,
  },
  {
    title: "Winning Organizations",
    desc: "predict skills ahead of demand",
    icon: RocketLaunchIcon,
  },
];

export default function WhatWeExplore() {
  return (
    <section className="bg-[#EEF4FF] py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <h3 className="text-sm font-semibold text-orange-500">
          What We’ll Explore
        </h3>

        <p className="mt-2 text-sm text-gray-700">
          The critical shifts every enterprise must plan for:
        </p>

        {/* Cards */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-lg bg-white p-5 shadow-sm"
            >
              <item.icon className="mb-3 h-5 w-5 text-blue-600" />
              <h4 className="text-[14px] font-semibold text-gray-900">
                {item.title}
              </h4>
              <p className="mt-1 text-[12px] leading-snug text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
