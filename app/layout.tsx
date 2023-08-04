import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google';

import { ClerkProvider } from '@clerk/nextjs'

const font = Inter ({ subsets: ['latin'],
variable: '--font-inter',})

export const metadata: Metadata = {
  title: 'Genius',
  description: 'AI-Platform',
  icons : {
    icon : 
      "/favicon.ico"
    
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
