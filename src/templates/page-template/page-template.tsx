import { Box, Container } from '@mui/material';
import { FC } from 'react';

import NavBar from '../../components/navbar/navbar';
import { PageTemplateProps } from './page-template.interface';

const PageTemplate: FC<PageTemplateProps> = ({ children }) => {
  return (
    <Box>
      <NavBar />
      <Container>{children}</Container>
    </Box>
  );
};

export default PageTemplate;
