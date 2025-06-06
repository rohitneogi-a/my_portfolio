import HeroImg from "@/assets/images/me.jpg";
// import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
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
                Hello! I'm Rohit Neogi, a passionate full-stack developer with a
                strong foundation in JavaScript, Python, and modern web
                technologies.{" "}
                <span className="font-bold text-white">
                  With hands-on experience in building scalable applications
                  using React.js, Node.js, and Django,
                </span>{" "}
                I specialize in crafting data-driven, responsive interfaces and
                seamless user experiences. I’ve worked on impactful projects
                like MarketMind AI and Macro, and currently contribute as a
                Software Development Engineer Intern at IEMA R&D, focusing on
                robust web applications and innovative solutions.
              </p>

              <p className="text-white">
  My focus is on building efficient, scalable, and accessible web applications using modern technologies like React.js, Node.js, and Django. Currently, I'm deepening my expertise in backend development and database management with tools like MongoDB and Django REST Framework, aiming to grow as a versatile full-stack developer capable of delivering end-to-end solutions.
</p>


              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
  I'm a lifelong learner and developer, driven by curiosity and a commitment to solving real-world problems through technology. From building IoT-based pollution monitoring systems to developing AI-powered stock analysis platforms, I strive to contribute meaningful solutions to the tech community. Through my projects like Macro and MarketMind AI, I aim to innovate and empower developers with tools that blend performance, usability, and modern design.
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
