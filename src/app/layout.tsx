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
    <body className={`bg-slate-800 text-slate-200 container mx-auto p-12 ${inter.className}`}>{children}</body>
    </html>
  )
}
