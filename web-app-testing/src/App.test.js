import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";
import App from './App';

afterEach(rtl.cleanup);

test('render?', () => {
  const app = rtl.render(<App />)
  const element = app.getByText('Ball')
  expect(element).toBeVisible()
});