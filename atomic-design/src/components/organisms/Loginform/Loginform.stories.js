import React from "react";
import Loginform from ".";

/// TODO: fix story entries
const Template = (args) => <Loginform {...args} />

export const DefaultLoginform = Template.bind({});
DefaultLoginform.args = {
 
};

export default {
  title: "organisms/Loginform",
  component: Loginform,
};
