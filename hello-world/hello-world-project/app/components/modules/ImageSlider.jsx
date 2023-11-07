import { Island } from '@hubspot/cms-components';
import ImageSliderIsland from '../islands/ImageSliderIsland.jsx?island';
import {
  ModuleFields,
  RepeatedFieldGroup,
  ImageField,
  TextField,
} from '@hubspot/cms-components/fields';

export const meta = {
  label: 'Global logo slider',
  global: true,
};

export const fields = (
  <ModuleFields>
    {/* <RepeatedFieldGroup
      name="slides"
      label="Slides"
      occurrence={{ min: 4, max: 10 }}
      required
    >
      <ImageField
        name="logo"
        label="Logo Image"
        default={{
          src: 'https://www.hububble.dev/hubfs/Demo%20Images/biglytics-ebook-10-ways-win-election.png',
          alt: 'slide image',
          loading: 'lazy',
        }}
      />
    </RepeatedFieldGroup> */}
    <ImageField
      occurrence={{ min: 4, max: 10, default: 4 }}
      name="logo"
      label="Logo Image"
      default={{
        src: 'https://www.hububble.dev/hubfs/Demo%20Images/biglytics-ebook-10-ways-win-election.png',
        alt: 'slide image',
        loading: 'lazy',
      }}
    />
  </ModuleFields>
);

export const Component = (props) => {
  return <Island module={ImageSliderIsland} props={props} hydrateOn="load" />;
};
