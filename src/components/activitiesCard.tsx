import { Badge } from "@/components/ui/badge";

import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/ui/card";

interface CardStatsProp {
  title: string;
  tipo: string;
  description: string;
  date: string;
  icon: React.ReactElement;
}

const getMonth = (dateStr: string) => {
  const date = new Date(dateStr);
  const monthNames = [
    "ENE",
    "FEB",
    "MAR",
    "ABR",
    "MAY",
    "JUN",
    "JUL",
    "AGO",
    "SEP",
    "OCT",
    "NOV",
    "DIC",
  ];

  return monthNames[date.getMonth()];
};
const getDay = (dateStr: string) => {
  const date = new Date(dateStr);

  return date.getDay();
};

export function ActivitiesCard({
  title,
  tipo,
  description,
  icon,
  date,
}: CardStatsProp) {
  return (
    <Card className={cn("w-full")}>
      <CardContent className="py-4 flex flex-row  items-start">
        <section className="flex gap-5">
          <span className="flex flex-col">
            <label>{getMonth(date)}</label>
            <label className="text-5xl font-bold">{getDay(date)}</label>
          </span>
          <span className="flex flex-col">
            <label className="text-md font-bold">{title}</label>
            <label className="text-pretty truncate ... h-[50px]">
              {description}
            </label>
          </span>
        </section>
        <section className="flex gap-5">
          <span className="flex flex-col">
            <Badge>{tipo}</Badge>
          </span>
        </section>
      </CardContent>
    </Card>
  );
}
