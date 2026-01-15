const speakers = [
  {
    name: "Rob Lauber",
    image: "/speakers/rob-lauber.jpg",
    desc: `Rob Lauber is a global workforce and capability-building leader with over
25 years of experience helping organizations prepare leaders and frontline
teams for change. Most recently, he served as SVP and Chief Learning Officer
at McDonald’s, leading learning and development across 37,000+ restaurants
worldwide. His perspective is especially relevant as organizations rethink
leadership and capability models in the age of AI.`,
  },
  {
    name: "Krishna Kumar",
    image: "/speakers/krishna-kumar.jpg",
    desc: `Krishna Kumar is the Founder and CEO of Simplilearn, working closely with
enterprises navigating workforce transformation driven by AI and digital
change. At the center of the learning and skills ecosystem, he brings a
unique perspective on how roles, leadership expectations, and capabilities
are evolving across industries.`,
  },
  {
    name: "Sudipto Mitra",
    image: "/speakers/sudipto-mitra.jpg",
    desc: `Sudipto Mitra is a senior transformation and growth leader with over 20
years of experience helping enterprises navigate large-scale change across
technology, operations, and talent. As Chief Revenue Officer at Simplilearn,
he works with executive teams to address workforce capability gaps as AI
reshapes roles and operating models.`,
  },
];

export default function FeaturedSpeakers() {
  return (
    <section className="bg-gradient-to-b from-[#1D4DF4] to-[#112D8E] py-20 text-white">
      <div className="mx-auto max-w-6xl px-4">
        {/* Title */}
        <h2 className="mb-12 text-lg font-semibold text-yellow-300">
          Featured Speakers
        </h2>

        {/* Speakers */}
        <div className="space-y-14">
          {speakers.map((s) => (
            <div
              key={s.name}
              className="flex flex-col gap-6 md:flex-row md:items-start"
            >
              {/* Image */}
              <img
                src={s.image}
                alt={s.name}
                className="h-32 w-32 rounded-lg object-cover"
              />

              {/* Content */}
              <div>
                <h3 className="text-base font-semibold text-cyan-300">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-blue-100">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Expert Perspectives */}
        <div className="mt-16 rounded-lg bg-[#2E7CF6] p-6">
          <h4 className="text-sm font-semibold text-cyan-200">
            Additional Expert Perspectives
          </h4>
          <p className="mt-2 text-sm text-blue-100">
            Invited experts from leading consulting and enterprise learning
            organizations will contribute short perspectives, offering insight
            into how large organizations are evolving skills and leadership
            models in the AI era.
          </p>
        </div>
      </div>
    </section>
  );
}
