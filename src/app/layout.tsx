import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./(components)/Navbar";
import Head from "next/head";
import BackgroundShade from "./(components)/BackgroundShade";


export const metadata: Metadata = {
  title: "AR/VR Lab",
  description: "It's a specialized lab designed to explore and develop projects related to augmented reality (AR) and virtual reality (VR). The lab focuses on equipping students with cutting-edge technologies and hands-on experience in fields like immersive experiences, 3D modeling, simulations, and game development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="./icon.jpg"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <body>
        <Navbar />
        <BackgroundShade />
        {children}
      </body>
    </html>
  );
}
