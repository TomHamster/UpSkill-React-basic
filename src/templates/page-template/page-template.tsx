import NavBar from '@/components/navbar';
import { Alert, Backdrop, Box, CircularProgress, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { PageTemplateProps } from './page-template.interface';
import { PageContainer } from './page-template.style';

const PageTemplate = ({ children, loading, error, errorCallback }: PageTemplateProps) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
    errorCallback();
  };

  useEffect(() => {
    setOpen(true);
  }, [error]);

  return (
    <Box>
      <NavBar />
      <PageContainer>{children}</PageContainer>
      {loading && (
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      {error && (
        <Snackbar
          onClose={handleClose}
          open={open}
          sx={{
            position: 'absolute',
            top: '50px',
            right: '10px !important',
            left: 'auto !important',
            display: 'block !important'
          }}>
          <Alert severity="error" onClose={handleClose}>
            {error}
          </Alert>
        </Snackbar>
      )}
    </Box>
  );
};

export default PageTemplate;
