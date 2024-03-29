import { Cabin } from 'next/font/google'
const inter = Cabin({ subsets: ['latin'] })

import { ImageResponse } from '@vercel/og';
export const config = {
  runtime: 'edge',
};
 
export default async function handler() {
    const imageData = await fetch(new URL("../../../public/logo.png", import.meta.url)).then(
        (res) => res.arrayBuffer(),
      );
  return new ImageResponse(
    (
        <div
        className={inter.className}
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          flexDirection: "column",
          alignItems: 'center',
          justifyContent: 'center',
          letterSpacing: '-.02em',
          fontWeight: 700,
          background: 'white',
        }}
      >
        <div
          style={{
            left: 42,
            top: 42,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              width: 24,
              height: 24,
              background: 'black',
            }}
          />
          <span
            style={{
              marginLeft: 8,
              fontSize: 20,
            }}
          >
           Find Open-Source Projects
          </span>
        </div>
        <img width="256" height="256" src={imageData} />
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            padding: '20px 50px',
            margin: '0 42px',
            fontSize: 100,
            width: 'auto',
            maxWidth: 550,
            fontWeight: "bold",
            textAlign: 'center',
            color: 'black',
            lineHeight: 1.4,
          }}
        >
          OSS LAB
        </div>
        <div style={{
            fontSize: 40,
            fontWeight: "bold"
        }}>by Psycho Coder</div>
      </div>
      
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}