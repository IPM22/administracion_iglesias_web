import CardMiembros from "@/components/cardMiembros";
import AddMemberIcon from "@/components/icons/add-member";
import { ListModeView } from "@/components/listModeView";
import { PaginationComponent } from "@/components/pagination";

import { Button } from "@/components/ui/button";

import React from "react";

const Miembros = () => {
  return (
    <main className="flex h-screen w-full flex-col overflow-auto p-6 pb-[200px]">
      <p className="text-2xl sm:text-3xl mb-6 font-bold">Miembros</p>
      <section className="flex justify-between pb-6">
        <Button variant="outline" className="flex gap-2 p-6 rounded-xl">
          <AddMemberIcon />
          Agregar miembro
        </Button>
        <ListModeView />
      </section>
      <section className="grid grid-cols-5 gap-6 ">
        <CardMiembros />
        <CardMiembros />
        <CardMiembros />
        <CardMiembros />
        <CardMiembros />
        <CardMiembros />
        <CardMiembros />
        <CardMiembros />
        <CardMiembros />
        <CardMiembros />
      </section>
      <PaginationComponent />
    </main>
  );
};

export default Miembros;
