import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import { Geist_Mono } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ 
  variable: '--font-montserrat', 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Workplace Leadership Framework | 360 Growth',
  description: 'Transform your leadership skills in a 3-day intensive program. Join Miracle Daniel for proven leadership development focused on workplace excellence.',
  generator: 'v0.app',
  keywords: 'leadership training, workplace leadership, professional development, team leadership, conflict resolution',
  authors: [{ name: '360 Growth' }],
  openGraph: {
    title: 'Workplace Leadership Framework | 360 Growth',
    description: 'Transform your leadership skills in a 3-day intensive program.',
    url: 'https://workplaceleadershipframework.com',
    siteName: '360 Growth',
    images: [
      {
        url: '/logo.png',
        width: 200,
        height: 200,
      },
    ],
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/logo.png',
      },
    ],
    apple: '/logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#5E3BFF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${geistMono.variable} bg-[#13043D]`}>
      <body className="font-montserrat antialiased bg-[#13043D]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
