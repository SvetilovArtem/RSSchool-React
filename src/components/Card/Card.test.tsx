import { render } from "@testing-library/react"
import React from "react"
import Card from "./Card"

test('card render', () => {
    render(<Card card={{
        id: 0,
        img: "",
        title: "",
        desc: "",
        likes: 0,
        comments: 0
    }} />)
})