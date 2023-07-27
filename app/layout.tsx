import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const font = Inter ({ subsets: ['latin'],
variable: '--font-inter',})

export const metadata: Metadata = {
  title: 'Genius',
  description: 'AI-Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
