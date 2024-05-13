import React from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Card, CardDescription, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import DetailIcon from "./icons/detail";
import ContactIcon from "./icons/contact";
import { Badge } from "./ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import MailIcon from "./icons/mail";
import PhoneIcon from "./icons/phone";
import { CommandSeparator } from "./ui/command";
import { Separator } from "./ui/separator";

function CardMiembros() {
  return (
    <Card className="flex flex-col gap-8 p-4">
      <div className="flex flex-col justify-center items-center gap-4">
        <Avatar>
          {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
          <AvatarFallback>IP</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <CardTitle className="mb-1">Isaac Peralta</CardTitle>
          <CardDescription>Invitado por Luis Peralta</CardDescription>
        </div>
        <Badge variant="outline">Activo</Badge>
      </div>
      <section className="flex justify-between gap-3">
        <Button variant="default" className="flex gap-2 p-6 w-full rounded-xl">
          <DetailIcon /> Perfil
        </Button>

        <HoverCard>
          <HoverCardTrigger>
            {" "}
            <Button
              variant="outline"
              className="flex gap-2 w-full p-6 rounded-xl"
            >
              <ContactIcon /> Contacto
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="flex flex-col gap-3">
            <span className="flex text-sm gap-2">
              <PhoneIcon />
              829-586-5576
            </span>
            <Separator />
            <span className="flex text-sm gap-2">
              <MailIcon />
              isaac.p22@gmail.com
            </span>
          </HoverCardContent>
        </HoverCard>
      </section>
    </Card>
  );
}

export default CardMiembros;
