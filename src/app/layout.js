import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import 'styles/reset.scss';
import 'styles/variables.scss';
import 'styles/globals.scss';

export const metadata = {
  title: 'Yago Lins - Dev',
  description: 'Portfolio of Yago Lins',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US">
      <body className="app">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
