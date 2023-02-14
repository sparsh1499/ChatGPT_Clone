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
  
  async function session() {
    const session=await getServerSession(authOptions);
    return session;
  }
  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          <div className="flex">
            {/*Sidebar*/}
            <div className="bg-[#202123] mx-w-x5 h-screen overflow-y-auto md:min-w-[20rem]">
              <Sidebar />
            </div>

            {/* ClientProvider - Notification    */}
            <div className="bg-[#343541] flex-1">{children}</div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
