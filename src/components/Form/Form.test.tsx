import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Form from "./Form";

describe("Form tests", () => {
  it("Form renders", async () => {
    render(<Form setUsers={() => {}} />);
    const element = await screen.findByTestId("react-form");
    expect(element).toBeInTheDocument();
  });
  it("Form submit button renders", () => {
    render(<Form setUsers={() => {}} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("Form submit button renders", () => {
    render(<Form setUsers={() => {}} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("Form: the name must be more than 1 symbol", () => {
    render(<Form setUsers={() => {}} />);
    userEvent.type(screen.getByTestId("name"), "a");
    fireEvent.click(screen.getByRole("button"));
  });
});
