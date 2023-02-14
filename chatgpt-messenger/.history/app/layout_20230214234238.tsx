import * as React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <SessionProvider></SessionProvider>
        
      </body>
    </html>
  );
}
