import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { PoorStory } from "@/style/font";
import Navigation from "@/components/Navigation";


export const metadata: Metadata = {
  title: "Jmana",
  description: "mana",
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
          `${PoorStory.className} min-h-screen bg-background font-sans antialiased`
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
