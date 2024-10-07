import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import Providers from '../providers';
import './globals.css';

const font = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'spark - ai generated mcq questions',
  description: 'Generate multiple choice questions using AI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
