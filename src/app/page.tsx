"use client";

import { NavTabs } from "@/components/navtabs";
import { CardStats } from "@/components/cardStats";
import { BackpackIcon, CalendarIcon, PersonIcon } from "@radix-ui/react-icons";
import { ActivitiesCalendar } from "@/components/activitiesCalendar";
import { Card } from "@/components/ui/card";
import { NewVisitors } from "@/components/newVisitors";

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col overflow-auto   p-6">
      <p className="text-2xl sm:text-3xl mb-6 font-bold">Tablero</p>

      <NavTabs />
      <section className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 sm:gap-10 mb-6">
        <CardStats
          title="Miembros"
          content="257"
          description="14% menos que el mes pasado"
          icon={<PersonIcon />}
        />
        <CardStats
          title="Visitas"
          content="200"
          description="14% menos que el mes pasado"
          icon={<PersonIcon />}
        />
        <CardStats
          title="Actividades"
          content="45"
          description="14% menos que el mes pasado"
          icon={<CalendarIcon />}
        />
        <CardStats
          title="Ministerios"
          content="10"
          description="14% menos que el mes pasado"
          icon={<BackpackIcon />}
        />
      </section>
      <section className=" grid sm:grid-cols-2 gap-10 mb-10 ">
        <ActivitiesCalendar />
        <NewVisitors />
      </section>
    </main>
  );
}
