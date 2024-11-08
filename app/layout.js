import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "@/components/Footer";
import{ Navbar} from "@/components/Navbar";
import { SessionProvider} from "next-auth/react"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Wholesalers NG | Cluster of Wholesalers",
  description: "Find a wide range of wholesalers, all in one place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
   
   <SessionProvider>
        <Navbar/>
        {children}
        <Footer/>
   </SessionProvider>
      </body>
    </html>
  )
}
