import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


const Layout = () => (
  <>
    <Header />
    <main className="container my-4">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;
