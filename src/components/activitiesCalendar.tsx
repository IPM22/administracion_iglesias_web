import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ActivitiesCard } from "./activitiesCard";
import { CalendarIcon } from "@radix-ui/react-icons";

export function ActivitiesCalendar() {
  return (
    <div className="  w-full   ">
      <Card className="p-6 bg-accent  ">
        <p className="text-md sm:text-xl font-bold mb-6">
          Proximas actividades
        </p>
        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="w-full"
        >
          <CarouselContent className="-mt-1 h-[370px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pt-1 basis-1/3 sm:basis-1/3 h-[150px]"
              >
                <div className="p-1">
                  <ActivitiesCard
                    title="Junte Juvenil"
                    description="Esta actividad esta pensada para que los jovenes de la congregación tenga un tiempo de convivencia donde puedan conocerse, divertirse y aprender mas de Dios."
                    date={"July 19, 2024 23:15:30"}
                    tipo={"Juvenil"}
                    icon={<CalendarIcon />}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Card>
    </div>
  );
}
