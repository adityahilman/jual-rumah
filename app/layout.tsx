import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Jual Rumah Murah Daerah Citayam",
  description: "Jual rumah pribadi dengan harga murah di daerah Citayam. Harga dibawah harga pasaran, lokasi strategis, bisa masuk mobil, dekat dengan stasiun Citayam, lingkungan sudah ramai, dekat dengan rumah sakit, sekolah dan Cibinong City Mall. Hubungi pemilik langsung untuk informasi lebih lanjut dan jadwalkan survey ke rumah.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
