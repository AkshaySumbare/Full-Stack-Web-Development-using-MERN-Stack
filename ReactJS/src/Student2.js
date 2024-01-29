//***************************************Props with Functional Components*************** */
//Props-> If we want to pass the data in component to another components  we use Props  as like parameters in functions

import React from "react";

function Student2(props) {
  return (
    <div>
      <h1>Hello {props.name} </h1>
    </div>
  );
}

export default Student2;

// function App() {
//     const [name, setName] = useState("Akshay");
//     function update(){
//       setName("sumbare");
//     }
//     return (
//       <div className="App">
//         {/* <Basic1 /> */}

//         <Student2 name={name}></Student2>
//         {/* <Student2 name={"sumbare"}></Student2>  */}
//         {/* <Student2 name={"welcome"}></Student2>  */}
//         <button onClick={update}>update Me</button>

//       </div>
//     );
//   }
