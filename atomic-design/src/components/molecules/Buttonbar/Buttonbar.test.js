import React from 'react'
import { render, screen } from "@testing-library/react"
import ButtonbarMock from './Buttonbar.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultButtonbar } from './Buttonbar.stories'

const testID = "Buttonbar-" + Math.floor(Math.random()*90000) + 10000

describe("Buttonbar", () => {

    it("Can render Buttonbar", () => {
        render(<DefaultButtonbar testID={ testID } { ...ButtonbarMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})