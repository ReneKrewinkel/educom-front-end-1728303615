import React from 'react'
import { render, screen } from "@testing-library/react"
import LoginformMock from './Loginform.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultLoginform } from './Loginform.stories'

const testID = "Loginform-" + Math.floor(Math.random()*90000) + 10000

describe("Loginform", () => {

    it("Can render Loginform", () => {
        render(<DefaultLoginform testID={ testID } { ...LoginformMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})