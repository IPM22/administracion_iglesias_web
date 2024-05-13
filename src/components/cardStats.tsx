import {
  BellIcon,
  CardStackIcon,
  CheckIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardStatsProp {
  title: string;
  content: string;
  description: string;
  icon: React.ReactElement;
}

export function CardStats({
  title,
  content,
  description,
  icon,
}: CardStatsProp) {
  return (
    <Card className={cn("w-full")}>
      <CardHeader className="pb-2 flex flex-row justify-between items-center">
        <CardTitle>{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent className="pb-3">
        <label className="text-2xl font-bold">{content}</label>
      </CardContent>
      <CardFooter>
        <CardDescription>{description}</CardDescription>
      </CardFooter>
    </Card>
  );
}
