import './globals.css';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import { Providers } from '@/components/Providers';

export const metadata = {
  title: 'Roadmap Planner',
  description: 'Advanced Roadmap Planner Web Application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ScrollToTop />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
