import Marquee from "react-fast-marquee";
import "./styles/TechStack.css";
import { FaAws, FaMicrosoft, FaJava } from "react-icons/fa";
import {
  SiPython,
  SiGo,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiApachekafka,
  SiPandas,
  SiApache,
} from "react-icons/si";

const skills = [
  { name: "Python", Icon: SiPython },
  { name: "Go", Icon: SiGo },
  { name: "Java", Icon: FaJava },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "React", Icon: SiReact },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "AWS", Icon: FaAws },
  { name: "Azure", Icon: FaMicrosoft },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Docker", Icon: SiDocker },
  { name: "Kubernetes", Icon: SiKubernetes },
  { name: "Kafka", Icon: SiApachekafka },
  { name: "Spark", Icon: SiApache },
  { name: "Pandas", Icon: SiPandas },
];

const TechStack = () => {
  const row = [...skills, ...skills];

  return (
    <div className="techstack techstack-scroll">
      <h2>Skills</h2>
      <div className="techstack-marquee-wrap">
        <Marquee speed={35} gradient={false} className="techstack-marquee">
          {row.map(({ name, Icon }, i) => (
            <div className="techstack-item" key={`${name}-${i}`}>
              <span className="techstack-icon">
                <Icon aria-hidden />
              </span>
              <span className="techstack-name">{name}</span>
            </div>
          ))}
        </Marquee>
        <Marquee
          speed={28}
          direction="right"
          gradient={false}
          className="techstack-marquee techstack-marquee-2"
        >
          {row.map(({ name, Icon }, i) => (
            <div className="techstack-item" key={`r-${name}-${i}`}>
              <span className="techstack-icon">
                <Icon aria-hidden />
              </span>
              <span className="techstack-name">{name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TechStack;
