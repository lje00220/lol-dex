import type { Metadata } from "next";
import "./globals.css";
import Provider from "./rotation/provider";
import Header from "@/components/Header";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "리그 오브 레전드 정보 앱",
  description: "리그 오브 레전드의 챔피언, 아이템 등에 대한 정보가 있는 앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
          <Provider>{children}</Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
