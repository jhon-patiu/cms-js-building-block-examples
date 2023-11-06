import footerStyles from '../../styles/footer.module.css';
import containerStyles from '../../styles/global/container.module.css';

function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={containerStyles.container}>
        <p>Footer.</p>
      </div>
    </footer>
  );
}

export default Footer;
