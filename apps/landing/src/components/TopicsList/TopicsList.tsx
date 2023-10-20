import { TopicCard } from "../TopicCard";
import { Link } from "@nextui-org/react";
import { JavascriptLogo, TypescriptLogo } from "../../assets";

export const topcisData = [
  {
    id: 1,
    name: "Základy JavaScriptu",
    icon: <JavascriptLogo />,
    author: "Adam Tretera & Adam Bárta",
    link: "/js-zaklady",
  },
  {
    id: 1,
    name: "Základy Typescriptu",
    icon: <TypescriptLogo />,
    author: "Adam Tretera",
    link: "/typescript-zaklady",
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
