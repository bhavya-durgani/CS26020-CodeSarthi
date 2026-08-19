import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'CodeSarthi — Visual Backend API Builder & Workflow Compiler',
  description: 'Design, test, and monitor backend workflows visually. Compile and export standard Fastify/TypeScript codebases with zero vendor lock-in.',
  keywords: ['visual api builder', 'no-code backend', 'workflow compiler', 'Fastify generator', 'CodeSarthi', 'visual logic canvas'],
  authors: [{ name: 'CodeSarthi Core Team' }],
  openGraph: {
    title: 'CodeSarthi — Visual Backend API Builder & Workflow Compiler',
    description: 'Design and deploy backend APIs visually. Compile nodes directly into production-grade TypeScript Fastify apps.',
    url: 'https://codesarthi.dev',
    siteName: 'CodeSarthi Platform',
    images: [
      {
        url: '/CodeSarthi.png',
        width: 800,
        height: 800,
        alt: 'CodeSarthi visual builder preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeSarthi — Visual Backend API Builder & Workflow Compiler',
    description: 'Design and deploy backend APIs visually. Compile nodes directly into production-grade TypeScript Fastify apps.',
    images: ['/CodeSarthi.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  icons: {
    icon: '/CodeSarthi.png',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/CodeSarthi.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Plus+Jakarta+Sans:wght@600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}

// Production Deployment: Ready for Vercel

// Production Deployment: Ready for Vercel
