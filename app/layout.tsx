import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'STRYDE - Performance, Innovation & Attitude',
  description:
    'Experience the future of sports performance with STRYDE. Premium athletic wear designed for champions.',
  keywords: 'sports, performance, athletic, innovation, STRYDE',
  authors: [{ name: 'STRYDE' }],
  openGraph: {
    title: 'STRYDE - Performance, Innovation & Attitude',
    description:
      'Experience the future of sports performance with STRYDE.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
