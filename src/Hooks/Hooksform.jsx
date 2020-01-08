import React, { useState } from "react";

// const HooksForm = () => {
//   const user = userInputValue("");
//   const email = userInputValue("");

//   return (
//     <>
//       <form>
//         <input
//           name="user"
//           type="text"
//           {...user}
//           placeholder="Enter Your Name"
//         />
//         <input
//           type="email"
//           name="email"
//           {...email}
//           placeholder="Enter Your Password"
//         />
//         <button
//           type="button"
//           onClick={e => {
//             e.preventDefault();
//           }}
//         >
//           Submit
//         </button>
//         <p>{user.value + email.value}</p>
//       </form>
//     </>
//   );
// };

// export const userInputValue = val => {
//   const [value, setValue] = useState(val);

//   return {
//     value,
//     onchange: e => setValue(e.target.value)
//   };
// };

// export default HooksForm;

// export const useInputValue = val => {
//   const [value, setValue] = useState(val);
//   return {
//     value,
//     onChange: e => setValue(e.target.value)
//   };
// };
// const HooksForm = () => {
//   const user = useInputValue("");
//   const email = useInputValue("");
//   return (
//     <>
//       <form>
//         <input
//           name="user"
//           type="text"
//           {...user}
//           value={user}
//           placeholder="Enter Your Username"
//         />
//         <p>{user.value}</p>
//         <input
//           name="email"
//           type="email"
//           {...email}
//           value={email}
//           placeholder="Enter Your passowrd"
//         />
//         <button
//           type="submit"
//           onClick={e => {
//             e.preventDefault();
//             console.log(user.value, email.value);
//           }}
//         >
//           Submit
//         </button>
//         <p>{email.value}</p>
//       </form>
//     </>
//   );
// };

// export default HooksForm;

export default () => {
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
      <CheckboxExample />
    </>
  );
};

function Form() {
  const [state, setState] = React.useState({
    hooks: true
  });

  function handleChange(evt) {
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.type;
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
          value={state}
          checked={state.hooks}
          onChange={handleChange}
        />
      </label>
    </form>
  );
}

const CheckboxExample = () => {
  const [checkedItems, setCheckedItems] = useState(true);

  const handleChange = event => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked
    });
    console.log("checkedItems: ", checkedItems);
  };

  const checkboxes = [
    {
      name: "metal",
      key: "checkBox1"
      // value: "metal"
    },
    {
      name: "wood",
      key: "checkBox2"
      // value: "wood"
    }
  ];

  return (
    <div>
      <lable>Checked item name</lable> <br />
      {checkboxes.map(item => (
        <label key={item.key}>
          {item.name}
          <Checkbox
            name={item.name}
            value={item.value}
            onChange={handleChange}
          />
        </label>
      ))}
    </div>
  );
};

const Checkbox = ({ type = "checkbox", name, value, onChange }) => {
  console.log("Checkbox: ", name, value);

  return <input type={type} name={name} value={value} onChange={onChange} />;
};
