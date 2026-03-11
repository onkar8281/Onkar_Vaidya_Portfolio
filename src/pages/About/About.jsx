import OnkarImg from "@/assets/images/Onkar.JPG";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">

        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
          iOS Developer, React Developer, Full-Stack Engineer
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">

          {/* Image */}
          <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
              <img
                src={OnkarImg}
                className="rounded-[15px] shadow block"
                alt="Onkar Vaidya"
                width={1207}
                height={929}
              />
            </div>
          </div>

          {/* Text */}
          <div className="relative space-y-4">

            <p className="text-white">
              Hello! I'm <span className="font-bold">Onkar Vaidya</span>, a passionate
              iOS and Full-Stack Developer with experience in building scalable
              mobile and web applications.
            </p>

            <p className="text-white">
              I specialize in developing iOS applications using Swift, SwiftUI
              and UIKit, and modern web applications using React.js, Node.js
              and MySQL. I enjoy solving real-world problems by creating clean,
              efficient and user-friendly software solutions.
            </p>

            <p className="text-white">
              My goal is to continuously learn new technologies, build impactful
              products, and contribute to innovative projects that improve user
              experiences across mobile and web platforms.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}