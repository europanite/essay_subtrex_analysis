import React from "react";
import { render, screen } from "@testing-library/react-native";
import App from "../App";

test("renders app title", () => {
  render(<App />);
  expect(screen.getByText("Essay SUBTLEX Analysis")).toBeTruthy();
});
