import React, { FC } from 'react';

import { Header } from './containers/Header/Header';
import { Main } from './containers/Main/Main';
import { Footer } from './containers/Footer/Footer';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import styled from 'styled-components'

const AppSc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

export const App: FC = () => {
  return (
    <AppSc>
      <ErrorBoundary>
        <Header/>
        <Main/>
        <Footer/>
      </ErrorBoundary>
    </AppSc>
  );
};
