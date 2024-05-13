import * as React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CardDescription, CardTitle } from "./ui/card";

export function NewVisitorsRow() {
  return (
    <section className="flex items-center justify-between py-3 ">
      <div className="flex flex-row gap-4">
        <Avatar>
          {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
          <AvatarFallback>IP</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="mb-1">Isaac Peralta</CardTitle>
          <CardDescription>Invitado por Luis Peralta</CardDescription>
        </div>
      </div>
      <CardTitle className="hidden sm:block">16 años</CardTitle>
      <CardTitle className="hidden sm:block">829-586-5576</CardTitle>
      <CardTitle>10/01/2024</CardTitle>
    </section>
  );
}
