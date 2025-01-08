import { SpeedInsights } from "@vercel/speed-insights/next"

import 'styles/reset.scss';
import 'styles/variables.scss';
import 'styles/globals.scss';

export const metadata = {
  title: 'Yago Lins - Dev',
  description: 'Portfólio de Yago Lins',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className='app'>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
