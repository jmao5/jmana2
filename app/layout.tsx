import Navigation from "@/components/Navigation";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import ToastProvider from "@/contexts/ToastProvider";
import UserIdProvider from "@/contexts/UserIdProvider";
import { cn } from "@/lib/utils";
import { PoorStory } from "@/style/font";
import type { Metadata } from "next";
import "./globals.css";
import Toast from "@/components/ui/toast";

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
        <UserIdProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ToastProvider>
              <Navigation />
              <main className="bg-background flex min-h-screen w-full max-w-screen-sm flex-col items-center px-5 py-24 shadow">
                {children}
                <Toast />
              </main>
            </ToastProvider>
            {/* <Toaster /> */}
          </ThemeProvider>
        </UserIdProvider>
      </body>
    </html>
  );
}
