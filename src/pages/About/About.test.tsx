import { render } from "@testing-library/react"
import React from "react"
import About from "./About"

describe('About test', () => {
    it('About render', () => {
        render(<About />)
    })
})