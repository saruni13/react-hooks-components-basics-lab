import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import App from "../components/App";

test("renders without errors", () => {
  expect(() => render(<App />)).not.toThrow();
});

test("renders the correct child components", () => {
  render(<App />);

  // Check if navigation bar exists
  const navElement = screen.getByRole("navigation");
  expect(navElement).toBeInTheDocument();

  // Check if home component exists
  const homeElement = screen.getByTestId("home");
  expect(homeElement).toBeInTheDocument();

  // Check if about component exists
  const aboutElement = screen.getByTestId("about");
  expect(aboutElement).toBeInTheDocument();
});
