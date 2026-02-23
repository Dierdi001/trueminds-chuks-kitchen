import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/island-moments/400.css'
import '@fontsource/jost/400.css'
import '@fontsource/poppins/400.css'
import Header from '../components/public-layout/Header'
import Footer from '../components/public-layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chuks Kitchen - Authentic Nigerian Cuisine',
  description: 'Experience homemade flavors delivered fresh to your desk or home.',
}

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${inter.className} flex min-h-screen flex-col`}>
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}