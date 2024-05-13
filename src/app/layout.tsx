import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Navbar } from "@/components/navbar";
import Header from "@/components/header";
import HeaderMobile from "@/components/headerMobile";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Administración de Iglesias",
  description:
    "Sistema pensado para administrar los miembros, visitas, eventos, entre otros aspectos de una iglesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "h-screen sm:p-3 md:p-6 bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ResizablePanelGroup
            direction="vertical"
            className="min-h-[600px] h-full    rounded-lg border"
          >
            <ResizablePanel defaultSize={10}>
              <Header />
              <HeaderMobile />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={90}>
              <div className="flex  items-center overflow:auto  md:p-6 xs:p-6">
                {children}
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ThemeProvider>
      </body>
    </html>
  );
}
