import { Work_Sans } from "next/font/google";

import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

import Room from "./Room";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sculpt",
  description: "The Powerful and Collaborative Design Tool. Create stunning designs with ease, collaborate seamlessly with your team, and bring your ideas to life in Sculpt. The next-generation design platform, inspired by Figma.",
  keywords: "design tool, Figma clone, collaboration, prototyping, vector graphics, UI/UX"
};

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en'>
    <body suppressHydrationWarning={true} className={`${workSans.className} bg-primary-grey-200`}>
      <Room>
        <TooltipProvider>{children}</TooltipProvider>
      </Room>
    </body>
  </html>
);

export default RootLayout;
