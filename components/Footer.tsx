import RSVPForm from "@/components/RSVPForm";

export default function Footer() {
  return (
    <footer className="relative text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/footer-bg.jpg"
          alt="Venue"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20">
        {/* RSVP strip */}
              <p className="mb-4 text-sm font-semibold">Space is limited.</p>

              <RSVPForm className="max-w-3xl w-full bg-[#E7E7E7]/90" />

        </div>

        {/* Footer bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 md:flex-row">
          <img
            src="/simplilearn.svg"
            alt="Simplilearn"
            className="h-6"
          />

          <p className="text-xs text-gray-200">
            © 2009–2025 · Simplilearn Solutions. All Rights Reserved.
          </p>
        </div>
      {/* </div> */}
    </footer>
  );
}
