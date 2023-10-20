import { Card, CardHeader, CardBody } from "@nextui-org/react";
import type { ReactNode } from "react";

interface TopicCardProps {
  name: string;
  icon: ReactNode;
  author: string;
}
export const TopicCard = ({ name, icon, author }: TopicCardProps) => {
  return (
    <Card shadow="sm" className="py-4  rounded-md " isPressable>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{name}</h4>
        <small className="text-default-500">Autor: {author}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2 items-end">
        <div className="w-12 pt-4">{icon}</div>
      </CardBody>
    </Card>
  );
};
