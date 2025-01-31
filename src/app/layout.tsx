import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./(components)/Navbar";
import Head from "next/head";
import BackgroundShade from "./(components)/BackgroundShade";
import { MyFooter } from "./(components)/MyFooter";

export const metadata: Metadata = {
  title: "Home | AR/VR Lab",
  description: "It's a specialized lab designed to explore and develop projects related to augmented reality (AR) and virtual reality (VR). The lab focuses on equipping students with cutting-edge technologies and hands-on experience in fields like immersive experiences, 3D modeling, simulations, and game development.",
  keywords: "arvr, diu, lab, research, developer, arvr lab, diu lab, arvr diu lab",
  openGraph: {
    title: "AR/VR Lab",
    description: "It's a specialized lab designed to explore and develop projects related to augmented reality (AR) and virtual reality (VR). The lab focuses on equipping students with cutting-edge technologies and hands-on experience in fields like immersive experiences, 3D modeling, simulations, and game development.",
    url: "https://arvrlab.daffodilvarsity.edu.bd/",
    siteName: "AR/VR Lab",
    images: [
      {
        url: "/arvrlogo.jpg",
        width: 800,
        height: 800,
        alt: "AR/VR DIU",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
          href="./icon.svg"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <body>
        <Navbar />
        <BackgroundShade />
        {children}
        <MyFooter/>
      </body>
    </html>
  );
}
