import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const Container = styled.section`
  padding-left: 85px;
  height: 100vh;
`;

const PageBase = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <Container>{children}</Container>
    </div>
  );
};

export default PageBase;
