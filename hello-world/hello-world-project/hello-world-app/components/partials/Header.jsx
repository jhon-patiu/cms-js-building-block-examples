import headerStyles from '../../styles/header.module.css';
import containerStyles from '../../styles/global/container.module.css';

function Header({
  brandColor = {
    opacity: 100,
    color: '#FF7A59',
  },
  text = 'Header',
}) {
  const navLinks = [
    {
      href: '/hello-world-home',
      label: 'Home',
    },
    {
      href: '/hello-world-todo',
      label: 'Todo',
    },
    {
      href: '/hello-world-cars',
      label: 'Cars',
    },
  ];

  return (
    <header className={headerStyles.header}>
      <div className={containerStyles.container}>
        <h1>{text}</h1>
        <nav className={headerStyles.nav}>
          {navLinks.map((navLink) => (
            <a
              style={{
                color: brandColor.color,
                borderColor: brandColor.color,
                opacity: brandColor.opacity / 100,
              }}
              key={navLink.label}
              href={navLink.href}
            >
              {navLink.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
