import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, title, description }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
