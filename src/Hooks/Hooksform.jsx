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
      <hr />
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
    </>
  );
};

// function App() {
//   const [dataSubmit, setDataSubmit] = useState({});
//   const { handleSubmit, register } = useForm();

//   const onSubmit = e => {
//     setDataSubmit(e);
//     console.log(e);
//   };

//   return (
//     <>
//       {/* <p>{JSON.stringify(dataSubmit)}</p> */}
//       <form>
//         <label>
//           <input
//             type="checkbox"
//             value="pavi"
//             name={dataSubmit}
//             ref={register}
//             onClick={handleSubmit(onSubmit)}
//           />
//           checkbox 1
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             value="nane"
//             name={dataSubmit}
//             ref={register}
//             onClick={handleSubmit(onSubmit)}
//           />
//           checkbox 2
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             value="pavinane"
//             name={dataSubmit}
//             ref={register}
//             onClick={handleSubmit(onSubmit)}
//           />
//           checkbox 3
//         </label>
//       </form>
//     </>
//   );
// }
