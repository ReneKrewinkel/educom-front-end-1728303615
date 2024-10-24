import React from 'react'
import Formgroup from '.'
//import FormgroupMock from '../Formgroup.mock'

/// TODO: fix story entries
const Template = (args) => <Formgroup {...args} />

export const EmailInput = Template.bind({})
EmailInput.args = {
    label: "Email",
    type: "email",
    padding: "medium",
    width: 100,
    color: "black"
}

export const PasswordInput = Template.bind({})
PasswordInput.args = {
    label: "Password",
    type: "password",
    padding: "medium",
    width: 100,
    color: "black"
}

export default {
    title: "Molecules/FormField",
    component: Formgroup
}