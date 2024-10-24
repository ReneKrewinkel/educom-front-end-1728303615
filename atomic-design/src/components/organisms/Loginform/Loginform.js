import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Buttonbar from "../../molecules/Buttonbar";
import Formgroup from "../../molecules/Formgroup";
import { EmailInput, PasswordInput } from "../../molecules/Formgroup/Formgroup.stories";
import { Center } from "../../molecules/Buttonbar/Buttonbar.stories";

/// TODO: Define props for Loginform
const Loginform = ({ EmailInput, PasswordInput, Buttonbar}) => {
  return (
    <div className="Loginform">
      <FormField
      label="email"
      type="Email"
      />

      <FormField {...PasswordInput}/>

      <Buttonbar {...Center}/>
    </div>
  );
};

/// TODO: add more utility classes if needed!

/// TODO: Adjust and extend!
Loginform.propTypes = {
  ///
};

export default Loginform;
