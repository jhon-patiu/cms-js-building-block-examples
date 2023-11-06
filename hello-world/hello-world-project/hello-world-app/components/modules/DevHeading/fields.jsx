import React from 'react';
import {
  ModuleFields,
  BooleanField,
  TextField,
  FieldGroup,
} from '@hubspot/cms-components/fields';

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
    <BooleanField label="Align Center" name="align_center" default="false" />
  </ModuleFields>
);
