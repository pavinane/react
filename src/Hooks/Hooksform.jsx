import React, { useState } from "react";
import { Checkbox, CheckboxGroup } from "@createnl/grouped-checkboxes";

export const HooksForm = () => {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [remember, setRemember] = useState(false);
  const submitValue = () => {
    const frmdetails = {
      "First Name": fName,
      "Last Name": lName,
      Phone: phone,
      Email: email,
      Remember: remember
    };
    console.log(frmdetails);
  };
  const handleChange = event => {
    const Checkbox = event.target.type === "checkbox";
    setRemember({ [event.target.name]: Checkbox });
  };
  return (
    <>
      <input
        type="text"
        placeholder="First Name"
        onChange={e => setfName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={e => setlName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        onChange={e => setPhone(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />
      <input
        name="remember"
        type="checkbox"
        checked={remember}
        onChange={handleChange}
      />

      <button onClick={submitValue}>Submit</button>
      <Form />
      <PermissionsFrom />
    </>
  );
};

function Form() {
  const [state, setState] = React.useState({
    hooks: "",
    wood: ""
  });

  function handleChange(evt) {
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
    console.log(value);
  }

  return (
    <form>
      <label>
        With hooks
        <input
          type="checkbox"
          name="hooks"
          // value={state}
          checked={state.hooks}
          onChange={handleChange}
        />
      </label>
      <label>
        wood
        <input
          type="checkbox"
          name="wood"
          // value={wood}
          checked={state.wood}
          onChange={handleChange}
        />
      </label>
    </form>
  );
}

const PermissionsFrom = props => {
  const onCheckboxChange = checkboxes => {
    console.log(checkboxes);
  };

  return (
    <CheckboxGroup onChange={console.log}>
      <label>
        <Checkbox value="tos" />
        Terms and Conditions
      </label>
      <label>
        <Checkbox value="privacy-policy" />
        Privacy Policy
      </label>
      <label>
        <Checkbox value="advertisements" />
        Advertisements
      </label>
      <label>
        <Checkbox value="model" />
        model
      </label>
    </CheckboxGroup>
  );
};
