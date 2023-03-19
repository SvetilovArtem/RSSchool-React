import { render, screen } from "@testing-library/react"
import React from "react"
import Card from "./Card"

test('card render', () => {
    render(<Card card={            {
        id: 1,
        img: "https://traveller-eu.ru/sites/default/files/moscow-3550477_1280_0.jpg",
        title: "Moscow",
        desc: "Description 1",
        likes: 40,
        comments: 24,
      }} />)

    expect(screen.getByRole('listitem')).toBeInTheDocument()
    expect(screen.getByText(/Moscow/i)).toBeInTheDocument()
})