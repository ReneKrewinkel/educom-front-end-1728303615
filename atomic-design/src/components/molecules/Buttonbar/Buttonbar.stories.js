import React from "react";
import Buttonbar from ".";
//import ButtonbarMock from "./Buttonbar.mock";

/// TODO: fix story entries

const Template = (args) => <Buttonbar {...args} />;

const buttonLeft = {
  label: "Forgot Password",
  size: "medium",
  color: "#000",
  backgroundColor: "#CCC",
};
const buttonRight = {
  label: "Login",
  size: "medium",
  color: "#000",
  backgroundColor: "#CDF",
};

export const Left = Template.bind({});
Left.args = {
  position: "left",
  buttonLeft: buttonLeft,
  buttonRight: buttonRight,
};

export const Center = Template.bind({});
Center.args = {
  position: "center",
  buttonLeft: buttonLeft,
  buttonRight: buttonRight,
};

export const Right = Template.bind({});
Right.args = {
  position: "right",
  buttonLeft: buttonLeft,
  buttonRight: buttonRight,
};

export default {
  title: "Molecules/Buttonbar",
  component: Buttonbar,
};
