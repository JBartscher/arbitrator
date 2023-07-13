import './globals.css'
import {Inter} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'arbitrator',
  description: 'app for resolving disputes over time',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" href="favicon.ico" sizes="any"/>
    </head>
    <body className={`bg-slate-800 text-slate-200 drop-shadow-[0_2.4px_1.2px_rgba(0,0,0,0.8)] container mx-auto p-12 ${inter.className}`}>{children}</body>
    </html>
  )
}
