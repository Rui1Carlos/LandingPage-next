import '../styles/styly.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Landing Page',
  description: 'Converted from HTML to Next.js with TypeScript',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}