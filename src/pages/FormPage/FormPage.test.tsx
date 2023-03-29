import { render, screen } from "@testing-library/react";
import React from "react";
import FormPage from "./FormPage";

describe("Form page renders", () => {
  it("Page title renders", () => {
    render(<FormPage />);
    expect(screen.getByText("React Form")).toBeInTheDocument();
  });
});
