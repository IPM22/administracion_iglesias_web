import * as React from "react";

import { Card, CardContent, CardDescription } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ActivitiesCard } from "./activitiesCard";
import { CalendarIcon } from "@radix-ui/react-icons";
import { NewVisitorsRow } from "./newVisitorsRow";

export function NewVisitors() {
  return (
    <Card className="p-6 ">
      <p className="text-md sm:text-xl font-bold mb-1 ">Visitas recientes</p>
      <CardDescription className="mb-5">
        Nos han acompañado 20 nuevas personas este mes
      </CardDescription>
      {Array.from({ length: 5 }).map((_, index) => (
        <NewVisitorsRow />
      ))}
    </Card>
  );
}
