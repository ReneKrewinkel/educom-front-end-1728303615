import React from 'react'
import Input from './Input'
import InputMock from './Input.mock'
import { Placeholder } from 'storybook/internal/components'

/// TODO: fix story entries
const InputMeta = {
    title: "atoms/Input",
    component: Input,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Input-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Input {...args} />

export const Email = Template.bind({})
Email.args = {
    type: "email",
    padding: "medium",
    Placeholder: "Email",
    width: 20
}

export const Password = Template.bind({})
Password.args = {
    type: "password",
    padding: "large",
    Placeholder: "Password",
    width: 50
}

export default {
    title: "Atoms/Input",
    component: Input
}