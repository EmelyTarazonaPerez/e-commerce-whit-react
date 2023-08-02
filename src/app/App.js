import React from "react";
import { MyProvider } from '../context';
import AppIU from './AppIU';
import AuthProvider from "../auth/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <MyProvider>
        <AppIU />
      </MyProvider>
    </AuthProvider>

  );
}

export default App;
