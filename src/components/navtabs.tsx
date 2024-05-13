import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function NavTabs() {
  return (
    <Tabs defaultValue="account" className=" pb-4">
      <TabsList className="grid w-full sm:w-[400px] grid-cols-3">
        <TabsTrigger value="resumen">Resumen</TabsTrigger>
        <TabsTrigger value="analiticas">Analiticas</TabsTrigger>
        <TabsTrigger value="reportes">Reportes</TabsTrigger>
      </TabsList>
      <TabsContent value="resumen"></TabsContent>
      <TabsContent value="analiticas"></TabsContent>
      <TabsContent value="reportes"></TabsContent>
    </Tabs>
  );
}
