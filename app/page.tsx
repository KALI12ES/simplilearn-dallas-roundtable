import Hero from "@/components/Hero";
import RSVPForm from "@/components/RSVPForm";
import IntroText from "@/components/IntroText";
import BigQuestion from "@/components/BigQuestion";
import WhatWeExplore from "@/components/WhatWeExplore";
import FeaturedSpeakers from "@/components/FeaturedSpeakers";
import BehindTheCurtain from "@/components/BehindTheCurtain";
import EventAgenda from "@/components/EventAgenda";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="relative -mt-12 px-4">
        <RSVPForm />
      </div>
      <IntroText />
      <BigQuestion />
      <WhatWeExplore />
      <FeaturedSpeakers/>
      <BehindTheCurtain/>
      <EventAgenda/>
      <Footer/>
    </main>
  );
}
