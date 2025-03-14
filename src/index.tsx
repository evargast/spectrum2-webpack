import React, { FC } from 'react';
import ReactDOM from 'react-dom/client';

import { Button, Provider, defaultTheme } from '@adobe/react-spectrum';
import { useOSTheme } from './hooks';

const App: FC = () => {
  const colorScheme = useOSTheme();

  return (
    <Provider theme={defaultTheme} colorScheme={colorScheme} height={'100vh'}>
      <Button variant="cta">Click me</Button>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
