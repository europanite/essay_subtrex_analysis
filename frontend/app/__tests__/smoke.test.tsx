import React from "react";
import { render, screen } from "@testing-library/react-native";
import HomeScreen from "../screens/HomeScreen";

test("renders home screen controls", () => {
  render(<HomeScreen />);

  expect(screen.getByText("Essay input")).toBeTruthy();
  expect(screen.getByText("Load sample")).toBeTruthy();
});