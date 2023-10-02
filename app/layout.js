import './css/globals.css'

import { Roboto } from 'next/font/google'

const roboto = Roboto({ 
  weight: [ '300','400','500','700'],
  styles: ['bold','italic','normal'],
  subsets: ['latin'] 
});


export const metadata = {
  title: 'Agenda',
  description: 'Agenda , lista para hacer tus anotaciones musicales, eventos sociales etc.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
