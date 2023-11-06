export const Component = ({ fieldValues, hublParameters = {} }) => {
  const { headings: headings, align_center: alignCenter } = fieldValues;

  console.log('hubl params obj - ', hublParameters);

  return (
    <>
      <h1>{headings.main}</h1>
      {headings.sub && <h4>{headings.sub}</h4>}
    </>
  );
};
export { fields } from './fields.jsx';
export const meta = {
  label: `[DEV/TEST] Section Heading Module`,
};
