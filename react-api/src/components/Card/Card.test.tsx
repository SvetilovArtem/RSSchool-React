import { render, screen } from "@testing-library/react";
import React from "react";
import Card from "./Card";

test("card render", () => {
  render(
    <Card
      card={{
        id: 38,
        name: "Beth Smith",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Female",
        origin: {
          name: "Earth (C-137)",
          url: "https://rickandmortyapi.com/api/location/1",
        },
        location: {
          name: "Earth (C-137)",
          url: "https://rickandmortyapi.com/api/location/1",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/38.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
          "https://rickandmortyapi.com/api/episode/3",
          "https://rickandmortyapi.com/api/episode/4",
          "https://rickandmortyapi.com/api/episode/5",
          "https://rickandmortyapi.com/api/episode/6",
          "https://rickandmortyapi.com/api/episode/22",
          "https://rickandmortyapi.com/api/episode/51",
        ],
        url: "https://rickandmortyapi.com/api/character/38",
        created: "2017-11-05T09:48:44.230Z",
      }}
    />
  );

  expect(screen.getByRole("listitem")).toBeInTheDocument();
  expect(screen.getByText(/Beth Smith/i)).toBeInTheDocument();
});
