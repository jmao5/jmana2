import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { cn } from "@/lib/utils";
import { PoorStory } from "@/style/font";
import type { Metadata } from "next";
import "./globals.css";
import Toaster from "@/components/common/Toaster/Toaster";

export const metadata: Metadata = {
  title: "manaJ",
  description: "mana",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={cn(`${PoorStory.className} flex flex-col items-center`)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="bg-background flex min-h-screen w-full max-w-screen-sm flex-col items-center px-5 py-24 shadow">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
