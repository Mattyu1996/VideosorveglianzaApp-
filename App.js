import * as React from "react";
import { Provider } from "react-redux";
import AuthWrapper from "./Components/AuthWrapper";
import { store } from "./Redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <AuthWrapper />
    </Provider>
  );
}
