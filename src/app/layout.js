// import Footer from "@/components/shared/Footer";
import "./globals.css";
// import Navbar from "@/components/shared/Navber";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Home",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        <div className="min-h-screen">{children}</div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
