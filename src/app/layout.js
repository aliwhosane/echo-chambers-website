import { Playfair_Display, Merriweather } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });
const merriweather = Merriweather({ weight: ['300', '400', '700'], subsets: ["latin"], variable: '--font-merriweather' });

export const metadata = {
  title: 'Echo Chambers',
  description: 'Break out of your bubble.',
  icons: {
    icon: '/icon.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${merriweather.variable} ${merriweather.className}`}>{children}</body>
    </html>
  );
}
