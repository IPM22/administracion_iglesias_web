"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function MenuMobile() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Sheet key="left">
        <SheetTrigger asChild>
          <HamburgerMenuIcon />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="text-left text-2xl pb-6">Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col">
            <ul className="flex flex-col gap-3  text-xl">
              <li>
                <Link href="/">Tablero</Link>{" "}
              </li>
              <li>
                <Link href="/miembros">Miembros</Link>{" "}
              </li>
              <li>
                <Link href="/visitas">Tablero</Link>{" "}
              </li>
              <li>
                <Link href="/actividades">Actividades</Link>{" "}
              </li>
              <li>
                <Link href="/ministerios">Ministerios</Link>{" "}
              </li>
            </ul>
          </div>
          <SheetFooter>
            {/* <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose> */}
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
