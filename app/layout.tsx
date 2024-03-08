import { ThemeProvider } from "@/components/ui/ThemeProvider";
import Toast from "@/components/ui/toast";
import ToastProvider from "@/contexts/ToastProvider";
import { cn } from "@/lib/utils";
import { PoorStory } from "@/style/font";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "manaJ",
  description: "mana",
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
          <ToastProvider>
            <main className="bg-background flex min-h-screen w-full max-w-screen-sm flex-col items-center px-5 py-24 shadow">
              {children}
              <Toast />
            </main>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
