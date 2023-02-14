import * as React from "react";
import Sidebar from "../components/Sidebar";
import { getServerSession } from "next-auth";
import "../styles/globals.css";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import { SessionProvider } from "../components/SessionProvider";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session=await getServerSession(authOptions);
  
  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? ():()}
          
        </SessionProvider>
      </body>
    </html>
  );
}
