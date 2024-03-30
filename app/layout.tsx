import Toaster from "@/components/common/Toaster/Toaster";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import TanstackQueryProvider from "@/provider/TanstackQueryProvider";
import { OmyuPretty } from "@/style/font/OmyuPretty";
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
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
      </head>
      <body
        className={classNames(
          OmyuPretty.className,
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
            <main className="bg-background flex min-h-screen w-full max-w-screen-md flex-col items-center pt-16 shadow mb-16">
              {children}
            </main>
            <Toaster />
          </TanstackQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
