const agenda = [
  {
    title: "Welcome & Opening",
    speaker: "Sudipto Mitra, CRO Simplilearn",
    desc: "Why capability-building is now a board-level issue and what’s changing in the workforce landscape.",
  },
  {
    title: "Keynote: What Enterprise Leaders Are Seeing on the Ground",
    speaker: "Rob Lauber, Former CLO McDonald’s",
    desc: "A grounded view of how AI and AI agents are reshaping work, workflows, and leadership across industries.",
  },
  {
    title: "Lunch & Executive Conversation",
    speaker: "Industry Experts Invited",
    desc: "What large enterprise talent ecosystems are learning about capability-building at scale.",
  },
];

export default function EventAgenda() {
  return (
    <section className="bg-[#00F0F0] py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Title */}
        <h2 className="mb-10 text-lg font-semibold text-blue-700">
          Event Agenda
        </h2>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {agenda.map((item) => (
            <div
              key={item.title}
              className="rounded-lg bg-white p-6 shadow-sm"
            >
              <h3 className="text-sm font-semibold text-blue-600">
                {item.title}
              </h3>

              <p className="mt-4 text-sm font-semibold text-gray-900">
                {item.speaker}
              </p>

              <p className="mt-2 text-sm text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
