import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Game Reviews',
  description: 'A site for video game reviews',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link href="/" className="navbar-brand">Game Reviews</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link href="/" className="nav-link">Home</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main className="container my-4">
          {children}
        </main>
        <footer className="bg-dark text-white text-center py-3 mt-4">
          <div className="container">
            <p>&copy; 2024 Game Reviews. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
