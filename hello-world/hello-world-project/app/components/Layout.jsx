import layoutStyles from '../styles/layout.module.css';
import Footer from './modules/Footer.jsx';
import Header from './modules/Header.jsx';

function Layout({ children }) {
  return (
    <div className={layoutStyles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
