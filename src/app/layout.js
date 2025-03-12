import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LeetCode Stats Viewer",
  description: "View and compare LeetCode statistics for any user",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-navy-950`}
      >
        <header className="bg-navy-800 text-blue-100 shadow-md py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold">LeetCode Stats Viewer</h1>
          </div>
        </header>
        
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        
        <footer className="bg-navy-900 text-blue-200 py-6">
          <div className="container mx-auto px-4">
            <p className="text-center">&copy; {new Date().getFullYear()} LeetCode Stats Viewer. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
