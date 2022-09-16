import { TextField } from '@mui/material';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

export interface InputDefaultProps extends Record<string, any> {
  errormessage?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  type?: string;
  label: string;
}

export default function InputDefault(props: InputDefaultProps) {
  return (
    <TextField
      {...props}
      error={!!props?.errormessage}
      label={props?.label}
      helperText={!!props?.errormessage && String(props?.errormessage)}
      InputLabelProps={{
        shrink: true
      }}
    />
  );
}
