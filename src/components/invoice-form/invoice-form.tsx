import {
  InvoiceFormData,
  InvoiceFormProps,
  InvoiceItem
} from '@/components/invoice-form/invoce-form.interfaces';
import {
  defaultValueForm,
  defaultValueItem,
  validationSchema
} from '@/components/invoice-form/invoice-form.const';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid, TextField } from '@mui/material';
import { useEffect } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import './invoice-forrm.css';

export default function InvoiceForm({ formData, onSave }: InvoiceFormProps) {
  const navigate = useNavigate();
  const formOptions = {
    resolver: yupResolver(validationSchema),
    defaultValues: { ...defaultValueForm, ...formData }
  };

  const { control, handleSubmit, formState, getValues, watch } =
    useForm<InvoiceFormData>(formOptions);

  const { errors } = formState;
  const { fields, append, remove } = useFieldArray({ name: 'items', control });

  const numberOfItems = watch('items').length;

  const onSubmit = (data: InvoiceFormData) => {
    data.amount = calculateAmount();
    onSave(data);
  };

  const calculateAmount = () => {
    const items: InvoiceItem[] = getValues('items');
    let sum = 0;
    items.forEach(({ price }) => {
      sum = sum + Number(price);
    });

    return sum;
  };

  const addItem = () => {
    append(defaultValueItem);
  };

  useEffect(() => {
    const newVal = numberOfItems || 1;
    const oldVal = fields.length;
    if (newVal > oldVal) {
      for (let i = oldVal; i < newVal; i++) {
        append({ ...defaultValueItem });
      }
    } else {
      for (let i = oldVal; i > newVal; i--) {
        remove(i - 1);
      }
    }
  }, [numberOfItems]);

  return (
    <>
      <h2>Form Demo</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Controller
              name="no"
              control={control}
              render={({ field }) => (
                <TextField
                  className="input-filed"
                  {...field}
                  fullWidth={true}
                  error={!!errors['no']?.message}
                  label="No"
                  helperText={!!errors['no']?.message && String(errors['no']?.message)}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Button type="submit" variant="contained">
              Save
            </Button>
            <Button
              className="button-cancel"
              variant="contained"
              onClick={() => {
                navigate(-1);
              }}>
              Cancel
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Controller
              name="created"
              control={control}
              render={({ field }) => (
                <TextField
                  className="input-filed"
                  {...field}
                  fullWidth={true}
                  type="date"
                  error={!!errors['created']?.message}
                  label="Created"
                  helperText={!!errors['created']?.message && String(errors['created']?.message)}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={3}>
            <Controller
              name="validUntil"
              control={control}
              render={({ field }) => (
                <TextField
                  className="input-filed"
                  {...field}
                  fullWidth={true}
                  type="date"
                  error={!!errors['validUntil']?.message}
                  label="Valid until"
                  helperText={
                    !!errors['validUntil']?.message && String(errors['validUntil']?.message)
                  }
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={6}>
            <h2>Recipient</h2>
            <Controller
              name="recipient.companyName"
              control={control}
              render={({ field }) => (
                <TextField
                  className="input-filed"
                  {...field}
                  fullWidth={true}
                  error={!!errors?.recipient?.companyName?.message}
                  label="Company name"
                  helperText={
                    !!errors?.recipient?.companyName?.message &&
                    String(errors?.recipient?.companyName?.message)
                  }
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              )}
            />
            <Controller
              name="recipient.city"
              control={control}
              render={({ field }) => (
                <TextField
                  className="input-filed"
                  {...field}
                  fullWidth={true}
                  error={!!errors?.recipient?.city?.message}
                  label="City"
                  helperText={
                    !!errors?.recipient?.city?.message && String(errors?.recipient?.city?.message)
                  }
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              )}
            />

            <Controller
              name="recipient.street"
              control={control}
              render={({ field }) => (
                <TextField
                  className="input-filed"
                  {...field}
                  fullWidth={true}
                  error={!!errors?.recipient?.street?.message}
                  label="Street "
                  helperText={
                    !!errors?.recipient?.street?.message &&
                    String(errors?.recipient?.street?.message)
                  }
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              )}
            />

            <Controller
              name="recipient.postcode"
              control={control}
              render={({ field }) => (
                <TextField
                  className="input-filed"
                  {...field}
                  fullWidth={true}
                  error={!!errors?.recipient?.postcode?.message}
                  label="Postcode"
                  helperText={
                    !!errors?.recipient?.postcode?.message &&
                    String(errors?.recipient?.postcode?.message)
                  }
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              )}
            />

            <Controller
              name="recipient.nip"
              control={control}
              render={({ field }) => (
                <TextField
                  className="input-filed"
                  {...field}
                  fullWidth={true}
                  error={!!errors?.recipient?.nip?.message}
                  label="Nip"
                  helperText={
                    !!errors?.recipient?.nip?.message && String(errors?.recipient?.nip?.message)
                  }
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              )}
            />

            <Controller
              name="recipient.tel"
              control={control}
              render={({ field }) => (
                <TextField
                  className="input-filed"
                  {...field}
                  fullWidth={true}
                  error={!!errors?.recipient?.tel?.message}
                  label="Tel"
                  helperText={
                    !!errors?.recipient?.tel?.message && String(errors?.recipient?.tel?.message)
                  }
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              )}
            />
            <Controller
              name="recipient.email"
              control={control}
              render={({ field }) => (
                <TextField
                  className="input-filed"
                  {...field}
                  fullWidth={true}
                  error={!!errors?.recipient?.email?.message}
                  label="Email"
                  helperText={
                    !!errors?.recipient?.email?.message && String(errors?.recipient?.email?.message)
                  }
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              )}
            />
            <Controller
              name="recipient.bankAccount"
              control={control}
              render={({ field }) => (
                <TextField
                  className="input-filed"
                  {...field}
                  fullWidth={true}
                  error={!!errors?.recipient?.bankAccount?.message}
                  label="Bank Account"
                  helperText={
                    !!errors?.recipient?.bankAccount?.message &&
                    String(errors?.recipient?.bankAccount?.message)
                  }
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              )}
            />
          </Grid>

          <Grid item xs={6}>
            <h2>Sender</h2>
            <Controller
              name="sender.companyName"
              control={control}
              render={({ field }) => (
                <TextField
                  className="input-filed"
                  {...field}
                  fullWidth={true}
                  error={!!errors?.sender?.companyName?.message}
                  label="Company name"
                  helperText={
                    !!errors?.sender?.companyName?.message &&
                    String(errors?.sender?.companyName?.message)
                  }
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              )}
            />
            <Controller
              name="sender.city"
              control={control}
              render={({ field }) => (
                <TextField
                  className="input-filed"
                  {...field}
                  fullWidth={true}
                  error={!!errors?.sender?.city?.message}
                  label="City"
                  helperText={
                    !!errors?.sender?.city?.message && String(errors?.sender?.city?.message)
                  }
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              )}
            />

            <Controller
              name="sender.street"
              control={control}
              render={({ field }) => (
                <TextField
                  className="input-filed"
                  {...field}
                  fullWidth={true}
                  error={!!errors?.sender?.street?.message}
                  label="Street "
                  helperText={
                    !!errors?.sender?.street?.message && String(errors?.sender?.street?.message)
                  }
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              )}
            />

            <Controller
              name="sender.postcode"
              control={control}
              render={({ field }) => (
                <TextField
                  className="input-filed"
                  {...field}
                  fullWidth={true}
                  error={!!errors?.sender?.postcode?.message}
                  label="Postcode"
                  helperText={
                    !!errors?.sender?.postcode?.message && String(errors?.sender?.postcode?.message)
                  }
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              )}
            />

            <Controller
              name="sender.nip"
              control={control}
              render={({ field }) => (
                <TextField
                  className="input-filed"
                  {...field}
                  fullWidth={true}
                  error={!!errors?.sender?.nip?.message}
                  label="Nip"
                  helperText={
                    !!errors?.sender?.nip?.message && String(errors?.sender?.nip?.message)
                  }
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              )}
            />

            <Controller
              name="sender.tel"
              control={control}
              render={({ field }) => (
                <TextField
                  className="input-filed"
                  {...field}
                  fullWidth={true}
                  error={!!errors?.sender?.tel?.message}
                  label="Tel"
                  helperText={
                    !!errors?.sender?.tel?.message && String(errors?.sender?.tel?.message)
                  }
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              )}
            />
            <Controller
              name="sender.email"
              control={control}
              render={({ field }) => (
                <TextField
                  className="input-filed"
                  {...field}
                  fullWidth={true}
                  error={!!errors?.sender?.email?.message}
                  label="Email"
                  helperText={
                    !!errors?.sender?.email?.message && String(errors?.sender?.email?.message)
                  }
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              )}
            />
            <Controller
              name="sender.bankAccount"
              control={control}
              render={({ field }) => (
                <TextField
                  className="input-filed"
                  {...field}
                  fullWidth={true}
                  error={!!errors?.sender?.bankAccount?.message}
                  label="Bank Account"
                  helperText={
                    !!errors?.sender?.bankAccount?.message &&
                    String(errors?.sender?.bankAccount?.message)
                  }
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              )}
            />
          </Grid>
        </Grid>
        {fields?.map((field, index) => {
          return (
            <Grid container spacing={2} columns={{ xs: 6 }} key={field.id}>
              <Grid item xs={1}>
                <Controller
                  name={`items.${index}.name`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      className="input-filed"
                      {...field}
                      label="Name"
                      error={!!errors?.items?.[index]?.name?.message}
                      helperText={
                        !!errors?.items?.[index]?.name?.message &&
                        String(errors?.items?.[index]?.name?.message)
                      }
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={1}>
                <Controller
                  name={`items.${index}.amount`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      className="input-filed"
                      {...field}
                      label="Amount"
                      error={!!errors?.items?.[index]?.amount?.message}
                      helperText={
                        !!errors?.items?.[index]?.amount?.message &&
                        String(errors?.items?.[index]?.amount?.message)
                      }
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={1}>
                <Controller
                  name={`items.${index}.unit`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      className="input-filed"
                      {...field}
                      label="Unit"
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={1}>
                <Controller
                  name={`items.${index}.tax`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      className="input-filed"
                      {...field}
                      label="Tax"
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={1}>
                <Controller
                  name={`items.${index}.price`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      className="input-filed"
                      {...field}
                      label="Price"
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={1}>
                <Button
                  disabled={fields.length < 2}
                  variant="contained"
                  onClick={() => remove(index)}>
                  Remove
                </Button>
              </Grid>
            </Grid>
          );
        })}
        <Button variant="contained" onClick={addItem}>
          Add item
        </Button>
      </form>
    </>
  );
}
