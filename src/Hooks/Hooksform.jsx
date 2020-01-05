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

// const Try = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => setCount(count + 1);
//   const decrement = () => setCount(count - 1);

//   return (
//     <div>
//       <button type="button" onClick={increment}>
//         +
//       </button>
//       <p>{count}</p>
//       <button type="button" onClick={decrement}>
//         -
//       </button>
//     </div>
//   );
// };

const InputForm = () => {
  const [username, setUsername] = useState("");
  return (
    <div className="input">
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      {/* <button type="submit">submit</button> */}
    </div>
  );
};

export default InputForm;
