import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-r from-[#1F1D1B] to-[#3A3632]">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 px-6 py-16 md:py-24">
        {/* Left column */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <p className="font-nunito text-xs uppercase tracking-[0.2em] text-[#888780] mb-5">
            for roommates and households
          </p>
          <h1 className="font-nunito font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            No texts. No drama.
            <br />
            Just dibs.
          </h1>
          <p className="font-nunito text-lg md:text-xl text-white/60 mb-10 max-w-lg mx-auto md:mx-0">
            Claim a space without starting a conversation. Everyone sees it.
            Nobody has to ask.
          </p>
          <div className="flex flex-row gap-4 justify-center md:justify-start">
            <button className="font-nunito text-sm text-white border border-white/30 rounded-full px-6 py-3 hover:bg-white/10 transition-colors">
              App Store
            </button>
            <button className="font-nunito text-sm text-white border border-white/30 rounded-full px-6 py-3 hover:bg-white/10 transition-colors">
              Google Play
            </button>
          </div>
        </div>

        {/* Right column — phone mockup */}
        <div className="flex items-center justify-center">
          <div className="relative flex flex-col w-[270px] h-[580px] bg-[#111] border-2 border-white/15 rounded-[2.8rem] shadow-2xl overflow-hidden">
            {/* Notch */}
            <div className="flex justify-center pt-3 pb-1">
              <div className="w-20 h-5 bg-black rounded-full" />
            </div>
            {/* Screen */}
            <div className="relative mx-3 mb-3 flex-1 rounded-[2.2rem] overflow-hidden">
              <Image
                src="/images/screenshots/home.png"
                alt="EasyDibs app home screen"
                fill
                className="object-cover object-top"
                sizes="270px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
