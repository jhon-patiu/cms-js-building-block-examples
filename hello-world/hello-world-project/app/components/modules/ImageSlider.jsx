import { Island } from '@hubspot/cms-components';
import ImageSliderIsland from '../islands/ImageSliderIsland.jsx?island';
import {
  ModuleFields,
  RepeatedFieldGroup,
  ImageField,
  TextField,
} from '@hubspot/cms-components/fields';
import { imageSliderDefault } from '../../mockdata/defaults.js';

export const meta = {
  label: 'Global logo slider',
  global: true,
};

export const fields = (
  <ModuleFields>
    <RepeatedFieldGroup
      name="slides"
      label="Slides"
      occurrence={{ min: 4, max: 10, default: 4 }}
      default={imageSliderDefault}
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
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const Component = (props) => {
  return <Island module={ImageSliderIsland} props={props} hydrateOn="load" />;
};
