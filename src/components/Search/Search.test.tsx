import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import React from "react"
import Search from "./Search"

describe('search', () => {
    it('render Search', () => {
        render(<Search onChangeHandler={function (e: any): void {} } />)
        userEvent.type(screen.getByRole('textbox'), 'React')
    })
})