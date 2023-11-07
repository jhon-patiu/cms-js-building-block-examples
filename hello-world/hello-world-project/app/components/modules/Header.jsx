import headerStyles from '../../styles/header.module.css';
import containerStyles from '../../styles/global/container.module.css';
import {
  ModuleFields,
  UrlField,
  TextField,
  RepeatedFieldGroup,
} from '@hubspot/cms-components/fields';
import { logInfo } from '@hubspot/cms-components';
import { headerNavLinksDefault } from '../../mockdata/defaults.js';

export const meta = {
  label: 'Header',
  master_language: 'en',
  global: true,
};

export const fields = (
  <ModuleFields>
    <RepeatedFieldGroup
      name="nav_links"
      label="Nav Links"
      occurrence={{ min: 1 }}
      default={headerNavLinksDefault}
    >
      <TextField name="text" label="Text" default="Nav Item" />
      <UrlField
        name="link"
        label="Link"
        default={{ href: 'https://google.com' }}
      />
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const Component = (props) => {
  // const navLinks = [
  //   {
  //     href: '/hello-world-home',
  //     label: 'Home',
  //   },
  //   {
  //     href: '/hello-world-todo',
  //     label: 'Todo',
  //   },
  //   {
  //     href: '/hello-world-cars',
  //     label: 'Cars',
  //   },
  // ];

  logInfo('props', props);

  return (
    <header className={headerStyles.header}>
      <div className={containerStyles.container}>
        {/* <h1>{props.passedTitle}</h1> */}
        <nav className={headerStyles.nav}>
          {props.fieldValues.nav_links.map((item, index) => (
            <a key={index} href={item.link.href}>
              {item.text}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
