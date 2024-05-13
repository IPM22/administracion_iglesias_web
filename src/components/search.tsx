"use client";

import * as React from "react";
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  MagnifyingGlassIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Button } from "./ui/button";
import Link from "next/link";
import Dashboard from "./icons/dashboard";
import MessageIcon from "./icons/message";
import { CollectionMainMenu } from "@/lib/collections/menus/main";

export function Search() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        variant="outline"
        onClick={() => {
          setOpen(true);
        }}
        className="rounded-2xl w-full h-10"
      >
        <MagnifyingGlassIcon className="mr-2 h-4 w-4" />

        <p className="text-sm text-muted-foreground">
          Pulsa aqui o presiona{" "}
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">
              {window.navigator.userAgent.indexOf("Mac") !== -1 ? "⌘" : "ctrl"}
            </span>
            + J
          </kbd>
        </p>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="clickea un comando o busca..." />
        <CommandList>
          <CommandEmpty>No se encontraron resultados.</CommandEmpty>
          <CommandGroup heading="Sugerencias">
            <CommandItem>
              <Link
                href="/"
                className="flex"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <Dashboard classname="mr-2 " />
                <span>Tablero</span>
              </Link>
            </CommandItem>
            <CommandItem>
              <Link
                href="/push"
                className="flex"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <PersonIcon />
                <span>Miembros</span>
              </Link>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Menu">
            {CollectionMainMenu.map(({ label, icon, href }) => (
              <CommandItem>
                <Link
                  href={href}
                  className="flex align-between w-full"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <span className="flex gap-2">
                    {icon}
                    <span>{label}</span>
                  </span>
                  {/* <CommandShortcut>⌘U</CommandShortcut> */}
                </Link>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
