import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    const padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  const projects = [
    {
      id: "01",
      name: "Radar Tracking",
      category: "Radar Target Tracking",
      tech: "Python, Radar Signal Processing, State Estimation",
      focus:
        "Developed a radar target tracking system with real-time state estimation for moving objects.",
      image: "/images/Radar_Tracking.webp",
      link: "https://github.com/swet40/Radar-Target-Tracking",
    },
    {
      id: "02",
      name: "NutriFit",
      category: "AI-Powered Wellness Platform",
      tech: "Python, Flask, MongoDB, MediaPipe, Cohere LLM",
      focus:
        "Built a real-time posture analysis engine achieving 98% accuracy on live video and an LLM-powered meal recommendation engine processing health metrics.",
      image: "/images/NutriFit.webp",
      link: "https://ieeexplore.ieee.org/abstract/document/11346361",
    },
    {
      id: "03",
      name: "Tomato Ripeness Detection System",
      category: "Edge Deployment",
      tech: "Python, YOLOv8, Computer Vision",
      focus:
        "Trained an object detection model on 2,000+ images for automated agricultural sorting, optimized for edge deployment to reduce inference time by 40%.",
      image: "/images/TRD.webp",
      link: "https://github.com/SuhasMGowda/TomatoRipenessDetection",
    },
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.id}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tech}</p>
                <p>{project.focus}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.name}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
