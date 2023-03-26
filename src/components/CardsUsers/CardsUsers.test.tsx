import { render } from "@testing-library/react";
import React from "react";
import CardsUsers from "./CardsUsers";

describe("CardsUsers tests", () => {
  it("Cards render", () => {
    render(<CardsUsers users={[]} avatar={""} />);
  });
});
