import React from 'react'
import { render, screen } from "@testing-library/react"
import InputMock from './Input.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultInput } from './Input.stories'

const testID = "Input-" + Math.floor(Math.random()*90000) + 10000

describe("Input", () => {

    it("Can render Input", () => {
        render(<DefaultInput testID={ testID } { ...InputMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})