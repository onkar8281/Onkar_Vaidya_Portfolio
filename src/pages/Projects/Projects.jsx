import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import UserTrackerImg from "@/assets/images/usertracker.png";
import AlarmAppImg from "@/assets/images/AlarmApp.png";
import EcommerceImg from "@/assets/images/EcommerceApp.png";
import AGBImg from "@/assets/images/AGB.png";
import CorporateImg from "@/assets/images/CorporateGifting.png";
import EmailImg from "@/assets/images/Email.webp";

const projects = [
  {
    title: "UserTracker – Employee Attendance & Location Tracker (iOS)",
    description:
      "Built a real-time employee attendance and location tracking system with secure user/admin roles. Implemented live GPS tracking, route playback, and automatic location logging using MapKit and Firebase.",
    src: UserTrackerImg,
    link: UserTrackerImg,
    color: "#5196fd",
    githubLink: "https://github.com/onkar8281/UserTracker",
  },

  {
    title: "Alarm App – iOS Clock Application",
    description:
      "Developed a full-featured iOS clock application including World Clock, Alarm, Stopwatch, and Timer modules. Supports multi-alarm management, lap stopwatch tracking, and real-time countdown timers.",
    src: AlarmAppImg,
    link: AlarmAppImg,
    color: "#8f89ff",
    githubLink: "https://github.com/onkar8281/Alarm-App-Final",
  },

  {
    title: "Interior Design Shopping App (iOS)",
    description:
      "Created a modern interior furniture shopping iOS application with product catalog, wishlist, shopping cart, and checkout system. Built with SwiftUI following Apple Human Interface Guidelines.",
    src: EcommerceImg,
    link: EcommerceImg,
    color: "#3ecf8e",
    githubLink: "https://github.com/onkar8281/InteriorApp",
  },

  {
    title: "AGB Automation – Industrial Automation Website",
    description:
      "Developed a responsive industrial automation company website showcasing services, solutions, and products. Built using modern frontend technologies with a clean professional UI.",
    src: AGBImg,
    link: AGBImg,
    color: "#ff6b6b",
    liveLink:
      "https://cityofbaytown.org/?d=agbautomation.com&a=2143526812&s=a8b2fc9817439bdd4dc4f4b25b8d0c3d09e4c351bc2a0e8d2c8f4e7d97077276",
  },

  {
    title: "Corporate Gifting Management System (Web)",
    description:
      "Developed a web-based corporate gifting management system to streamline bulk gift ordering, inventory tracking, and client management. The platform allows businesses to manage corporate gift catalogs, track orders, and automate gifting workflows efficiently.",
    src: CorporateImg,
    link: CorporateImg,
    color: "#22c55e",
    liveLink: "https://gifttingadmin.netlify.app/",
  },

  {
    title: "Email Tracking System (Web)",
    description:
      "Developed a web-based email tracking system that allows users to monitor email opens, delivery status, and user engagement. The system tracks email activity in real-time and provides analytics to improve communication and campaign performance.",
    src: EmailImg,
    link: EmailImg,
    color: "#5196fd",
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Add specific styles for 1366x768 resolution
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    // Resolution check function
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
  <ReactLenis root>
    <main className="bg-black" ref={container}>
      <section className="text-white w-full bg-slate-950 flex flex-col gap-32">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;

          return (
            <Card
  key={`p_${i}`}
  i={i}
  url={project.link}
  title={project.title}
  description={project.description}
  src={project.src}
  color={project.color}
  progress={scrollYProgress}
  range={[i * 0.25, 1]}
  targetScale={targetScale}
  githubLink={project.githubLink}
  liveLink={project.liveLink}
/>
          );
        })}
      </section>
    </main>
  </ReactLenis>
);
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        {/* Modern split card design */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Image section - full width on mobile, 55% on desktop */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            {/* Colored overlay on hover */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />

            {/* Project number */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>

          {/* Content section - full width on mobile, 45% on desktop */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                {description}
              </p>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                {/* GitHub Link */}
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Code
                  </span>
                </motion.a>

                {/* Live Link */}
                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Live
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Add PropTypes validation
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
githubLink: PropTypes.string,
liveLink: PropTypes.string,
  // liveLink: PropTypes.string.isRequired,
};