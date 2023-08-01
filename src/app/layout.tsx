import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'Get stuff done!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className+" flex flex-col h-screen"}>
      <header className="flex flex-col items-center" >
        <p className="text-6xl font-bold">Todo App</p>
        <p>Get stuff done!</p>
      </header>
        {children}
        </body>
    </html>
  )
}
