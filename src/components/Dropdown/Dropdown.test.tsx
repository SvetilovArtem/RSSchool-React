import { render, screen } from "@testing-library/react"
import React from "react"
import Dropdown from "./Dropdown"

describe('Dropdown test', () => {
    it('Dropdown render', () => {
        render(<Dropdown isDropdownOpen={false} />)
        expect(screen.getByRole('list')).toHaveClass('dropdown')
    })
})