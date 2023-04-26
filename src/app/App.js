import React from "react";
import { MyProvider } from '../context';
import AppIU from './AppIU';

function App() {
  return (
    <MyProvider>
      <AppIU />
    </MyProvider>
  );
}

export default App;
