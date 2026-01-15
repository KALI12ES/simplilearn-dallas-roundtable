import { CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    
    <section className="relative min-h-[420px] md:min-h-[520px] w-full text-white">
    {/* Background */}
    <div className="absolute inset-0">
        <img
        src="/hero-bg.png"
        alt="Hero background"
        className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
    </div>
    

      {/* Overlay */}
      <div className="relative flex h-full items-center px-4 py-16 md:px-6 md:py-20">
        <div className="max-w-[771px]">
        {/* Tags */}
                  <img
                      src="/simplilearn.svg"
                      alt="Simplilearn"
                      className="mb-6 h-6"
                  />

                  <div className="mb-6 flex items-center gap-3">
                      <span className="rounded-md bg-[#00FFFF] px-3 py-1 text-xs font-semibold text-black">
                          Invite-only
                      </span>
                      <span className="text-sm text-cyan-300">
                          An Executive Roundtable Lunch
                      </span>
                  </div>


        {/* Heading */}
                  <h1 className="text-[32px] leading-[100%] text-[#F5AB40] md:text-[46px]">
                      <span className="font-black">
                          The Skills That Matter Next:
                      </span>
                      <br />
                      <span className="font-normal">
                          Preparing Your Workforce
                      </span>
                      <br />
                      <span className="font-normal">
                          & Leaders for the AI Era
                      </span>
                  </h1>


        {/* Meta info */}
                  <div className="mt-6 flex flex-col gap-3 text-sm text-gray-200">
                      <div className="flex items-center gap-2">
                          <CalendarIcon className="h-4 w-4 text-cyan-400" />
                          <span>February 20, 2026</span>
                      </div>

                      <div className="flex items-center gap-2">
                          <MapPinIcon className="h-4 w-4 text-cyan-400" />
                          <span>Chamberlain’s Steak & Fish House, Dallas</span>
                      </div>
                  </div>

        </div>
     </div>
    </section>
  );
}
