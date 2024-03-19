import Toaster from "@/components/common/Toaster/Toaster";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import TanstackQueryProvider from "@/provider/TanstackQueryProvider";
import { PoorStory } from "@/style/font";
import classNames from "classnames";
import type { Metadata } from "next";
import "./globals.css";

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
      {/* <meta
        httpEquiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      /> */}

      <body
        className={classNames(
          PoorStory.className,
          `flex flex-col items-center`
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TanstackQueryProvider>
            <main className="bg-background flex min-h-screen w-full max-w-screen-sm flex-col items-center py-20 shadow">
              {children}
            </main>
            <Toaster />
          </TanstackQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
