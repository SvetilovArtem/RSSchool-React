import { screen, render } from "@testing-library/react";
import React from "react";
import { UserType } from "types/UserType";
import Form from "./Form";

describe("Form tests", () => {
  it("Form renders", async () => {
    render(
      <Form
        setUsers={function (data: UserType): void {
          data.name;
        }}
      />
    );
    const element = await screen.findByTestId("react-form");
    expect(element).toBeInTheDocument();
  });
  it("Form snapshot", () => {
    const form = render(
      <Form
        setUsers={function (data: UserType): void {
          data.name;
        }}
      />
    );
    expect(form).toMatchSnapshot();
  });
  it("Form submit button renders", () => {
    render(
      <Form
        setUsers={function (data: UserType): void {
          data.name;
        }}
      />
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("Form submit button renders", () => {
    render(
      <Form
        setUsers={function (data: UserType): void {
          data.name;
        }}
      />
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
