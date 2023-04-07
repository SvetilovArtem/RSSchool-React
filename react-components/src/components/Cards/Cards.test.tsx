import { render, screen } from "@testing-library/react";
import React from "react";
import Cards from "./Cards";

describe("Cards", () => {
  it("cards render", () => {
    render(
      <Cards
        cards={[
          {
            id: 1,
            img: "https://traveller-eu.ru/sites/default/files/moscow-3550477_1280_0.jpg",
            title: "Moscow",
            desc: "Description 1",
            likes: 40,
            comments: 24,
          },
          {
            id: 6,
            img: "https://image.geo.de/30148152/t/eY/v3/w1440/r1.5/-/tokio-f-292656749-jpg--84404-.jpg",
            title: "Tokio",
            desc: "Description 6",
            likes: 31,
            comments: 27,
          },
        ]}
      />
    );
    expect(screen.getByText(/Moscow/i)).toBeInTheDocument();
  });
});
