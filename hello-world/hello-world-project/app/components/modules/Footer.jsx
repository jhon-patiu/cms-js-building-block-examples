import footerStyles from '../../styles/footer.module.css';
import containerStyles from '../../styles/global/container.module.css';
import { ModuleFields } from '@hubspot/cms-components/fields';

export const meta = {
  label: 'Footer',
  global: true,
};

export const fields = <ModuleFields></ModuleFields>;

export const Component = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={containerStyles.container}>
        <p>Footer.</p>
      </div>
    </footer>
  );
};
