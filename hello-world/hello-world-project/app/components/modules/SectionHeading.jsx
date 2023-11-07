import homeStyles from '../../styles/home.module.css';
import { logInfo } from '@hubspot/cms-components';
import React from 'react';
import {
  ModuleFields,
  BooleanField,
  TextField,
  FieldGroup,
} from '@hubspot/cms-components/fields';

export const meta = {
  label: `Section Heading Module`,
};

export const fields = (
  <ModuleFields>
    <FieldGroup label="Headings" name="headings" expanded={false}>
      <TextField
        label="Main Heading"
        name="main"
        default="Sample main heading"
        required
      />
      <TextField label="Sub Heading" name="sub" default="Sub heading text..." />
    </FieldGroup>
    <BooleanField label="Align Center" name="align_center" default={false} />
  </ModuleFields>
);

export const Component = ({ fieldValues, hublParameters = {} }) => {
  const { headings: headings, align_center: alignCenter } = fieldValues;

  logInfo('hubl params obj - ', hublParameters);

  return (
    <>
      <div className={alignCenter && homeStyles.alignCenter}>
        <h1>{headings.main}</h1>
        {headings.sub && <h4>{headings.sub}</h4>}
      </div>
    </>
  );
};
