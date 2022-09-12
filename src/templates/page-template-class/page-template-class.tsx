import NavBar from '@/components/navbar';
import { Box, Container } from '@mui/material';
import React, { Component } from 'react';

import { PageTemplateProps } from '../page-template/page-template.interface';

class PageTemplateClass extends Component<PageTemplateProps> {
  state: any;

  constructor(props: PageTemplateProps) {
    super(props);
    this.state = {
      todo: {}
    };
  }

  UNSAFE_componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ todo: json });
      });
  }

  render() {
    const { children } = this.props;
    const { todo } = this.state;

    return (
      <Box>
        <NavBar />
        <Container>{children}</Container>
        <p>title : {todo.title}</p>
      </Box>
    );
  }
}

export default PageTemplateClass;
