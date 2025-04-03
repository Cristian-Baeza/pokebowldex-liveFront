import '@/styles/globals.css';
import { ReactNode } from 'react';
import {Header} from "@/components/Header";

export const metadata = {
  title: 'PokebowlDex',
  description: 'Gotta catch them all! or at least some..',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
    <head>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
        <link rel="icon" href="/poke-bowl.png" type="image/png"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>
    <body
        style={{backgroundImage: "url('https://ik.imagekit.io/0jty0e7po/feature_mag-feature_art-space_food_MhxQD-96Q.webp')"}}
    >
        <Header />
        {children}
      </body>
    </html>
  );
}
