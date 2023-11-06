import layoutStyles from '../styles/layout.module.css';
import Footer from './partials/Footer.jsx';
import Header from './partials/Header.jsx';

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
