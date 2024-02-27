import { TopicCard } from "../TopicCard";
import { Link } from "@nextui-org/react";
import { JavascriptLogo, TypescriptLogo } from "../../assets";
import { ReactLogo } from "../../assets/ReactLogo.tsx";

export const topcisData = [
  {
    id: 1,
    name: "Základy JavaScriptu",
    icon: <JavascriptLogo />,
    author: "Adam Tretera & Adam Bárta",
    link: "/javascript-basics",
  },
  {
    id: 1,
    name: "JavaScript a DOM",
    icon: <JavascriptLogo />,
    author: "Adam Tretera & Adam Bárta",
    link: "/javascript-dom",
  },
  {
    id: 1,
    name: "Základy TypeScriptu",
    icon: <TypescriptLogo />,
    author: "Adam Tretera",
    link: "/typescript-basics",
  },
  {
    id: 1,
    name: "Základy React",
    icon: <ReactLogo />,
    author: "Adam Tretera",
    link: "/react-basics",
  },
].sort((a, b) => a.name.localeCompare(b.name));

export const TopicsList = () => {
  return (
    <section className="grid grid-cols-3 gap-3">
      {topcisData.map((topic) => (
        <Link key={topic.id} href={topic.link}>
          <TopicCard {...topic} />
        </Link>
      ))}
    </section>
  );
};
