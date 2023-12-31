import "./globals.css";
import { Inter } from "next/font/google";
import { ReduxProvider } from "./componenets/redux/provider";
import { Navigation } from "./componenets/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Divine Int'l Academy",
  description: "Multi Service & Trade P. Ltd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Navigation />

          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
