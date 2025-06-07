import HeroImg from "@/assets/images/me.jpg";
// import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-deepSpace">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Creator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  loading="lazy"
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hi! I'm Rohit Neogi, a full-stack developer skilled in
                JavaScript, Python, React, Node.js, and Django. I build
                scalable, data-driven web apps focused on clean UI and user
                experience. Currently, I’m a Software Development Engineer
                Intern at IEMA R&D, working on projects like MarketMind AI,
                Macro, and developing the IEMEDU.in website using the MERN
                stack.
              </p>

              <p className="text-white">
                I build scalable, accessible web apps using React, Node.js, and
                Django. I'm currently focused on backend development and
                databases like MongoDB and Django REST to grow as a full-stack
                developer.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a passionate developer and lifelong learner, building
                    tech solutions from IoT pollution monitors to AI stock
                    analysis tools. Through projects like Macro and MarketMind
                    AI, I aim to create meaningful, modern, and impactful
                    technology.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Rohit Neogi
                    </cite>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
