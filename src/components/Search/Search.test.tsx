import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import Search from "./Search"

describe('search', () => {
    it('render Search', () => {
        render(<Search onChangeHandler={function (e: string): void { } } searchValue={""} />)
        fireEvent.change(screen.getByRole('textbox'), {
            target: { value: 'React' }
        })
        expect(screen.getByRole('textbox')).not.toBeRequired()
        expect(screen.getByRole('textbox')).toHaveAttribute('placeholder')
    })
})