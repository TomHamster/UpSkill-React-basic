import { Box, Container } from '@mui/material';
import React from 'react';

import NavBar from '../../components/navbar';
import { PageTemplateProps } from '../page-template/page-template.interface';

class PageTemplateClass extends React.Component<PageTemplateProps> {
  render() {
    const { children } = this.props;
    return (
      <Box>
        <NavBar />
        <Container>{children}</Container>
      </Box>
    );
  }
}

export default PageTemplateClass;
