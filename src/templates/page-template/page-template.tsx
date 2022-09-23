import { Box } from '@mui/material';
import React from 'react';

import NavBar from 'components/navbar';

import { PageTemplateProps } from './page-template.interface';
import { PageContainer } from './page-template.style';

const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <Box>
      <NavBar />
      <PageContainer>{children}</PageContainer>
    </Box>
  );
};

export default PageTemplate;
