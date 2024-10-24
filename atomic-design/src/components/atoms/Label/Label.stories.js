import React from 'react'
import Label from './Label'
import LabelMock from './Label.mock'


/// TODO: fix story entries
const LabelMeta = {
    title: "atoms/Label",
    component: Label,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Label-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Label {...args} />

export const Muted = Template.bind({})
Muted.args = {
    color: "muted",
    label: "Email",
}

export const Black = Template.bind({})
Black.args = {
    color: "Black",
    label: "Email",
}

export const MutedPassword = Template.bind({})
MutedPassword.args = {
    color: "Black",
    label: "Password",
}

export const BlackPassword = Template.bind({})
BlackPassword.args = {
    color: "Black",
    label: "Password",
}

export default {
    title: "Atoms/Label",
    component: Label
}