import { render, screen } from "@testing-library/react"
import React from "react"
import ErrorPage from "./404"

describe('404', () => {
    it('404 render', () => {
        render(<ErrorPage />)
        expect(screen.getByText(/404/i)).toBeInTheDocument()
    })
})