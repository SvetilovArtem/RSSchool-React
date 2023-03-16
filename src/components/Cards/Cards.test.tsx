import { render, screen } from "@testing-library/react"
import React from "react"
import Cards from "./Cards"

describe('Cards', () => {
    it('cards render', () => {
        render(<Cards cards={[
            {
                id: 1,
                img: "https://traveller-eu.ru/sites/default/files/moscow-3550477_1280_0.jpg",
                title: "Moscow",
                desc: "Description 1",
                likes: 40,
                comments: 24,
              }
        ]} />)
        // eslint-disable-next-line testing-library/prefer-presence-queries
        expect(screen.getByText(/Moscow/i)).toBeInTheDocument()
    })
})