import React from "react";
import { useState, useEffect } from "react";
import { Fragment } from "react";
import { PureComponent } from "react";
import { useMemo } from "react";
import { createRef } from "react";
import { useRef } from "react";
import { forwardRef } from "react";
import { Link, Route, Routes } from "react-router-dom";

// ****************************More about Package.json file in Details****************
//contsins all informations like version of app, dependencies ,packages information etc.

//****************************Component in React js********************************* */
// part of project in this scenerio or Piece of code that can be reuse such as function
//imp. type of component types
// Functional component , Class Component , High Order , Pure, Controlled, Uncontrolled
//eg. function App(){
//     return (
//         <div>

//         </div>
//     )
// }
// export default App;

//*************************************Class Component****************************** */
//A Component that has Equama Script 6 classses . it has poweful than functional components, Because it has lifecycle methods and State.no need to use Hooks. while functional components fo not have ES6 classes uses simple JS Functions. need to use Hooks  not use  lifecycle and state. 
// import React , {Component} from 'react';
//  export default class basic extends Component{
//     render(){
//         return (
//             <h1>Hello From Class Component</h1>
//         )
//     }
// }

//we can create component in component
//eg.
// function App() {
//   function Apple() {
//     return <div>Hello</div>;
//   }

//   return <div>Apple</div>;
//   export default App;
// }

//**************************************JSX With React********************************************************** */
//Javascript xml
// JSX write HTML and javaScript together

//**********************************State in Functional Components************************************* */
// State:- It is a Object used to store data as like variable in JavaScript insted of variable we used State becz. in variable  we cant update

// function Basic() {
//   let data = "Akshay";
//   function updateData() {
//     data = "Sumbare"; //here despite changing the data the page cant rerender due to variable becz. react understand only state and props so need to use state instead of variable
//     alert(data);
//   }
//   return (
//     <div>
//       <h1>{data}</h1>
//       <button onClick={updateData}>Update Data </button>
//     </div>
//   );
// }
// export default Basic;

//**************use of State************* */

// function Basic1() {
//   const [data, setData] = useState("Akshay");
//   function updateData() {
//     setData("Sumbare");
//   }

//   return (
//     <div>
//       <h1>{data}</h1>
//       <button onClick={updateData}>Update Data</button>
//     </div>
//   );
// }

// export default Basic1;

//********************State in a Class Component*************** */
//State in React js is Public

// class Basic1 extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       data: "Sumbare",
//     };
//   }
//   apple() {
//     this.setState({ data: "Akshay" });
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.data}</h1>
//         <button onClick={() => this.apple()}>Update Button</button>
//       </div>
//     );
//   }
// }
// export default Basic1;

//******Props see in Student2.file */

//*****************************************GET Input box value******************** */
// function App() {
//     const [data, setData] = useState(null);
//     const [Print, setPrint] = useState(false);
//     function getData(val) {
//       setData(val.target.value);
//     }

//     return (
//       <div className="App">
//         {Print ? <h1>{data}</h1> : null}
//         <input type="text" onChange={getData}></input>
//         <button onClick={() => setPrint(true)}>Print Data</button>
//       </div>
//     );
//   }

//   export default App;

//********************************Hide and Show Element(Toggle)****************************************** */
// function App() {
//     const [status, setStatus] = useState(true);

//     return (
//       <div className="App">
//         {status ? <h1>Hello World !</h1> : null}
//         {/*
//        <button onClick={()=>setStatus(false)}>Hide</button>
//        <button  onClick={()=>setStatus(true)}>Show</button> */}
//         {/* <button  onClick={()=>setStatus(!status)}>Toggle</button> */}
//       </div>
//     );
//   }

//   export default App;

//************************************Basic Form************************************* */

// function App() {
//   const [name, setName] = useState("");
//   const [tnc, setTnc] = useState(false);
//   const [interest, setinterest] = useState("");
//   function getFormData(e) {
//     console.log(name, tnc, interest);
//     e.preventDefault();
//   }
//   return (
//     <div className="App">
//       <h1>Handle Form in React js</h1>
//       <form onSubmit={getFormData}>
//         <input
//           type="text"
//           placeholder="Enter name"
//           onChange={(e) => setName(e.target.value)}
//         ></input>
//         <br></br>
//         <br />
//         <select onChange={(e) => setinterest(e.target.value)}>
//           <option>Select Option</option>
//           <option>Volvo</option>
//           <option>BMW</option>
//           <option>Landcruser</option>
//           <option>Mercedise</option>
//         </select>
//         <br />
//         <br />
//         <input
//           type="checkbox"
//           onChange={(e) => setTnc(e.target.checked)}
//         ></input>
//         <span>Accept</span>
//         <br />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

//********************************Conditional rendering******************************* */
// function Basic() {
//   const [loggedIn, setloggedIn] = useState(2);

//   return (
//     <div>
//       {loggedIn == 1 ? (
//         <h1>Welcome Akshay</h1>
//       ) : loggedIn == 2 ? (
//         <h1>Welcome back !</h1>
//       ) : (
//         <h1>Welcome Guest</h1>
//       )}
//     </div>
//   );
// }
// export default Basic;

//***************************************Passing Function as a Props************************ */
//use when any function which mostly used in many components so despite every time create ,create once in parent and send as props to its childs
// function Basic1(props) {
//   return (
//     <div>
//       <h1>User Component</h1>
//       <button onClick={props.data}>Call data function</button>
//     </div>
//   );
// }
// export default Basic1;

// function App() {
//   function getData() {
//     alert("Hello");
//   }

//   return (
//     <div className="App">
//       <Basic1 data={getData} />
//     </div>
//   );
// }

// export default App;

//************************Life Cyle Methods******************* */
//Mounting ---> Updating --> Unmounting
//ie.  loading --Updating(props, stats), -> Remove

//**************************Constructor Life cycle*************** */

// class Basic1 extends React.Component{
//   constructor(){
//     super(); //to call parent constructor ie. React.component class
//     this.state={
//       data:"Akshay"
//     }

//   }
//   render(){

//     return(
//       <div>Hello {this.state.data}</div>
//     )
//   }
// }

// export default Basic1;

//**********************Render, Life cycle method********************************** */
//Render method only used in class Components
// class Basic1 extends React.Component {
//   render() {
//     console.log("Render", this.props);
//     return <div>Hello {this.props.name}</div>;
//   }
// }

// export default Basic1;

// function App() {
//   const [Name, SetName] = useState("Akshay");
//   return (
//     <div className="App">
//      <Basic1 name={Name}/>
//      <button onClick={()=> SetName("Sumbare")}>Update Name</button>
//     </div>
//   );
// }

// export default App;

//*******************Rendering For state**************************** */

// class Basic1 extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       email: "Akshay",
//     };
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello Jee , {this.state.email}</h1>
//         <button onClick={() => this.setState({ email: "sumbare" })}>
//           Hello{" "}
//         </button>
//       </div>
//     );
//   }
// }
// export default Basic1;

//**************************ComponenetDidMount , Life cycle method********************** */
//use is to for API call
//constructor --> the render and then ComponentDidMount
//componentDidMount run when our html component ready ie. after DOM Ready. and ComponentDidupdate run when our status update
// class Basic1 extends React.Component {
//   constructor() {
//     super();
//     // console.log("Constructor");
//     this.state = {
//       name: "Akshay",
//     };
//   }
//   componentDidMount() {
//     console.log("componentDidMount");
//   }
//   render() {
//     console.log("render");

//     return (
//       <div>
//         <h1>Component Did Mount {this.state.name}</h1>
//         <button
//           onClick={() => {
//             this.setState({ name: "Sumbare" });
//           }}
//         >
//           Update
//         </button>
//       </div>
//     );
//   }
// }
// export default Basic1;
//result
//  Constructor
//  render
//  componentDidMount

//in second case compoundDid Mount only once run after only render run becz. update is there so updateDidMount run

//****************************ComponenetDidUpdate********************************** */
//update only when there is updation on props or state
// class Basic1 extends React.Component {
//   constructor() {
//     super();
//     console.log("Constructor");
//     this.state = {
//       name: "Akshay",
//     };
//   }
//   componentDidMount() {
//     console.log("componentDidMount");
//   }

//   componentDidUpdate() {
//     console.log("compountDidUpdate");
//   }
//   render() {
//     console.log("render");

//     return (
//       <div>
//         <h1>Component Did Mount {this.state.name}</h1>
//         <button
//           onClick={() => {
//             this.setState({ name: "Sumbare" });
//           }}
//         >
//           Update
//         </button>
//       </div>
//     );
//   }
// }
// export default Basic1;
//before update
//  Constructor
//  render
//  componentDidMount
// after update result
//  render
//  compountDidUpdate
//Note:-> ComponentDidUpdate() will not be update if we use shouldComponentUpdate() and return it false

//*********************************ShouldComponentUpdate*************************** */
//to stop life cycle

// class Basic1 extends React.Component {
//   constructor() {
//     super();
//     this.state={
//       count:0
//     }
//   }
//   shouldComponentUpdate(){ //by default it not update the component but using return true we can update
//     //return true;
//   }
//   render(){
//     return(
//       <div>
//         <h1>Should Component Update {this.state.count}</h1>
//         <button onClick={()=>{
//           this.setState({count: this.state.count+1})
//         }}>Update</button>
//       </div>
//     )
//   }
// }
// export default Basic1;

//*************************************Unmounting************************************* */
//whenever we remove our component from DOM this time ComponentWillUnmound life cycle run
//eg. Toggle
//
//
//
//
//
//
//**********************************************HOOKS in REACTJS************************************************** */
// As we know functional components do not possesses property of classcomponents like life cycle, state,pure component so to use this in Functional component we used Hooks
//we cant use hooks in clss components

//********************************useEffect Hook********************* */
// it is combination of componenetDidMount, compountDidUpdate, componentwillUnmount

// function Basic1() {
//   useEffect(() => {
//     console.log("useEffect");
//   });

//   return (
//     <div>
//       <h1>useEffect in React</h1>
//     </div>
//   );
// }

// export default Basic1;

//***********************************useEffect with Specific State and Props************************** */

// function Basic1() {
//   const [data, setData] = useState(10);
//   const [count, setCount] = useState(100);
//   useEffect(() => {
//     console.log("UseEffect Called");
//   }, [data]); //before ,[] condition this useEffect hook work on both data and Count

//   useEffect(() => {
//     console.log("UseEffect Called");
//   }, [count]);

//   return (
//     <div>
//       <h1>useEffect Count: {count}</h1>
//       <h1>useEffect Data: {data}</h1>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Update count
//       </button>
//       <button
//         onClick={() => {
//           setData(data + 1);
//         }}
//       >
//         Update Data
//       </button>
//     </div>
//   );
// }

// export default Basic1;

//*******************************************On Props**************************************************** */
// function Basic1(props) {
//   useEffect(() => {
//     console.log("UseEffect Called");
//   }, [props.count]);

//   return (
//     <div>
//       <h1>Count props: {props.count}</h1>
//       <h1>Data props: {props.data}</h1>
//     </div>
//   );
// }

// export default Basic1;

// function App() {
//   const [data, setData] =useState(10);
//   const [count, setCount] =useState(100);

//    return (
//      <div className="App">
//       <Basic1 count={count} data={data}/>

//       <button onClick={()=>setCount(count+1)}>Update Count</button>
//       <button onClick={()=>setData(data+1)}>Update Data</button>
//      </div>
//    );
//  }

//  export default App;

//****************************************Handle Array With List******************************************* */
//to handle list we used map instead of looping because loops cant work on return function
// function Basic1() {
//   const students = ["Akshay", "Abhay", "rahul", "Shyam"];
//   //using map
//   // students.map((data)=>{
//   //     console.log("My name is ",data)
//   // });

//   return (
//     <div>
//       <h1>Handle Array with List</h1>
//       {students.map((data, i) => (
//         <h1 key={i}>{data}</h1> //if we dont add kety then console will show Each child in a list should have a unique "key" prop.
//       ))}
//     </div>
//   );
// }
// export default Basic1;

//*****************************************Reuse Component****************************************** */
//use to increase the spped of application

//********************************************React Fragment**************************************** */
// To handle multiple Elements or Components
//to use this import fragnment
//use to remove extra div etc.
// function Basic1(){
//     return (
//         <Fragment>
//             <h1>React Fragment</h1>
//             <h1>React Fragment</h1>
//         </Fragment>
//     )
// }
//export default Basic1;

//complex example where we need to use Fragment

// function Basic1() {
//   return (
//     <Fragment>
//       <td>Anil</td>
//       <td>Sidhu</td>
//     </Fragment>
//   );
// }

// export default Basic1;

//Warning will come in console if we write normal <div/>
// react-dom.development.js:86 Warning: validateDOMNesting(...): <div> cannot appear as a child of <tr>.
//     at div
//     at Basic1
//     at tr
//     at tbody
//     at table
//     at div
//     at App

//so to resolve this we use fragment

// //function App() {
//     return (
//         <div>
//           <table>
//             <tbody>
//               <tr>
//                <Basic1/>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       );
//     }
//     export default App;

//****************************************Send Data Child to Parent Component****************************** */
// also called as Lifting State Up
// function User(props) {
//    const data="Akshay Sumbare";
//   return (
//     <div>
//       <h1>User Name:</h1>
//       <button onClick={()=>props.alert(data)}>Click me</button>
//       {/* //sending data from child to parent in the form of data in above*/}
//     </div>
//   );
// }

// export default User;

// function App() {
//     function parentAlert(data) {
//       //  Grap the data in the form of parameter form child
//       alert(data);
//     }
//     return (
//       <div className="App">
//         <h1>Lifting State Up</h1>
//         <Basic1 alert={parentAlert} />
//       </div>
//     );
//   }

//   export default App;

//**************************************Pure Component**************************************/\
//only apply  on class component
// for functional componemt we used Memo hook
//Pure Component help to stop rerendering of components
//eg. if we tap again and again
//import PureComponent

// class Basic1 extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 1,
//     };
//   }
//   render() {
//     console.warn("check-rerendering");
//     return (
//       <div>
//         <h1>Pure Component in React {this.state.count}</h1>
//         <button
//           onClick={() => {
//             this.setState({ count: this.state.count }); //here count is same but still rerendering happen so to avoid this we use pure components  help to incerase performance
//           }}
//         >
//           Update Count
//         </button>
//       </div>
//     );
//   }
// }

// export default Basic1;

//***************************************UseMemo Hook in React js***************************** */
//use to stop execution of some3 code in Reactjs. as like pure component. apply on Functional component
// function Basic1() {
//   const [count, setCount] = useState(0);
//   const [item, setItem] = useState(10);

//   //   function multicount() {
//   //     console.log("multicount"); // here if we click on itemupdate then also this function call but there is no change and noneed it so to avoide this use useMemo
//   //     return count * 5;
//   //   }

//   const multicountMemo = useMemo(
//     function multicount() {
//       console.log("multicount");
//       return count * 5;
//     },
//     [count]
//   );
//   return (
//     <>
//       <h1>UseMemo Hook </h1>
//       <h1>Count:{count} </h1>
//       <h1>Count:{item} </h1>
//       {/* <h2>{multicount()}</h2> */}
//       <h2>{multicountMemo}</h2>

//       <button onClick={() => setCount(count + 1)}>Update Count</button>
//       <button onClick={() => setItem(item * 10)}>Update Item</button>
//     </>
//   );
// }
// export default Basic1;

// //see result in console

//******************************************Ref in React js*************************************** */
//manipulation method ie. It has ability to hide and show components. manipulate DOM directly. but React says dont manipulate eg. change color, value etc.
// DOM except high emergency becz. it could reduce DOM speed.

// class Basic1 extends React.Component {
//   constructor() {
//     super();
//     this.inputRef = createRef();
//   }
//   componentDidMount() {
//     console.log((this.inputRef.current.value = "1200"));
//   }
//   getVal() {
//     console.log(this.inputRef.current.value);
//     this.inputRef.current.style.color = "red";
//     this.inputRef.current.style.backgroundColor = "black";
//   }
//   render() {
//     return (
//       <div>
//         <h1>Ref in React</h1>
//         <input type="text" ref={this.inputRef}></input>
//         <button onClick={() => this.getVal()}>Check Ref</button>
//       </div>
//     );
//   }
// }

// export default Basic1;

//***********************************useRef in Reactjs*********************************** */
// for functional components as like ref in class components

// function Basic1(){
//    let inputRef= useRef(null);
//    function handleInput(){
//     console.log("Function call")
//     inputRef.current.value ="1000";
//    }
//    return(
//     <div>
//       <h1>useRef in Reactjs</h1>
//       <input type="text" ref={inputRef}></input>
//       <button onClick={handleInput}>Handle Input </button>
//     </div>

//    )
// }

// export default Basic1;

//**************************Forward Ref*************************************************
//when components are different eg. input has other component and button has other then how we use Ref the
// solution is forward Ref from one component to other
//import forward Ref
//  function Basic1(pros, ref){
//   return(
//     <div>
//       <input type="text" ref={ref}></input>
//     </div>
//   )
//  }
// export default forwardRef(Basic1);

// function App() {
//   let inputRef = useRef(null);
//   function updateInput(){
//     inputRef.current.value='1000';
//     inputRef.current.style.color="red";
//   }
//   return (
//     <div className="App">
//       <Basic1 ref={inputRef}/>
//       <h1>ForwardRef in React</h1>
//       <button  onClick={updateInput}>Update InputBox</button>
//     </div>
//   );
// }

// export default App;

//********************************************Controlled Components*************************************** */
//in React js when we controlled field ie. input field through state then we called it controlled components

// function Basic1() {
//   let [val, setval] = useState("");
//   return (
//     <div>
//       <h1>Controlled Components</h1>

//       {/* <input type="text" value ={val}></input> this line value={val stop the writing in input so to solve this we use useState} */}
//       <input
//         type="text"
//         value={val}
//         onChange={(e) => setval(e.target.value)}
//       ></input>
//       {/* controlled through react js states  */}
//     </div>
//   );
// }
// export default Basic1;

//*****************************************Uncontrolled Components********************************* */
//components contains input fields and which are not directly controlled by React State. ie. either controlled by direct through Ref or Js.
// mixture of controlled and uncontrolled component is called uncontrolled component
//Both controlled and uncntrolled compomnents can be used in both class and functional components

// function Basic1() {
//   let inputRef1 = useRef(null);
//   let inputRef2 = useRef(null);
//   function submitform(e) {
//     e.preventDefault(); // it helps to prevent Reactjs from reload at the time of submit becz. React js contains Single Page so no good to reload
//     console.log("Input 1 value :", inputRef1.current.value);
//     console.log("Input 2 value :", inputRef2.current.value);
//     // Through Js directly
//     let input3 = document.getElementById("input3").value;
//     console.log("Input3 val is :", input3);
//   }
//   return (
//     <div>
//       <h1>Ucontrolled Components</h1>
//       <form onSubmit={submitform}>
//         <input ref={inputRef1} type="text"></input> <br></br>
//         <br></br>
//         <input ref={inputRef2} type="text"></input> <br></br>
//         <br></br>
//         <input id="input3" type="text"></input> <br></br>
//         <br></br>
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }
// export default Basic1;

//************************************High Order Components****************************************** */
//A component which takes another component as a props and return another component.ie. single component takes component as a input and component as output.
//Higher Order Components are useful to abstract a shared logic used by many components. Components in React allow code reuse and prevent code repetition. But when you develop a React application it is not always straightforward to apply the DRY principles and you have to write repeated code in multiple components.
// function App() {
//     return (
//       <div className="App">
//         <h1>HOC</h1>
//         {/* <Basic1 /> */}
//         <HOCRed cmp={Counter} />
//         <HOCGreen cmp={Counter} />
//         <HOCBlue cmp={Counter} />
//       </div>
//     );
//   }

//   function HOCRed(props) {
//     return (
//       <h2 style={{ backgroundColor: "red", width: 100 }}>
//         <props.cmp />
//       </h2>
//     );
//   }

//   function HOCGreen(props) {
//     return (
//       <h2 style={{ backgroundColor: "green", width: 100 }}>
//         <props.cmp />
//       </h2>
//     );
//   }
//   function HOCBlue(props) {
//     return (
//       <h2 style={{ backgroundColor: "blue", width: 100 }}>
//         <props.cmp />
//       </h2>
//     );
//   }

//   function Counter() {
//     const [count, setCount] = useState(0);
//     return (
//       <div>
//         <h1>{count}</h1>
//         <button onClick={() => setCount(count + 1)}>Update</button>
//       </div>
//     );
//   }

//   export default App;

//*********************************************Routing Setup****************************************************** */
//open Components in specific Url is called Routing
//to use this we need to install it first
// npm install react-router-dom

// function Basic1() {
//   return (
//     <div>
//       <Router>
//         <Link to="/home">Home Page</Link>
//         <br></br>
//         <br></br>
//         <Link to="/about">About Page</Link>

//         <Routes>
//           <Route path="/home" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <p>This is Home page of website</p>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h1>About Page</h1>
//       <p>This is About page of website</p>
//     </div>
//   );
// }

// export default Basic1;

//*************************************Example of Routing****************** */
//because we have import Browser Router dom in index.js file and use there <Route><App/></Route> wrapper so no need to use wrapper here
//we should always use Link instead of anchor tag because anchortag reload hole page which not by Link
// function Basic1() {
//   return (
//     <div>

//         <Link to="/home">Home Page</Link>
//         <br></br>
//         <br></br>
//         <Link to="/about">About Page</Link>

//         <Routes>
//           <Route path="/home" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>

//     </div>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <p>This is Home page of website</p>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h1>About Page</h1>
//       <p>This is About page of website</p>
//     </div>
//   );
// }

// export default Basic1;

//************************************ POST API in Reactjs******************************************* */
//Application Programming Interface(API)

// function Basic1() {
//   const [count, setcount] = useState("");
//   const [name, setname] = useState("");
//   const [country, setcountry] = useState("");

//   function SaveUser() {
//     console.log({ count, name, country });
//     let data = { count, name, country };
//     fetch(`https://api.nationalize.io?name=nathaniel`, {
// Connection with Backend
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     }).then((result) => {
//       console.log("result", result);
//     });
//   }
//   return (
//     <div>
//       <h1>POST API Example</h1>
//       <input
//         type="text"
//         value={count}
//         onChange={(e) => {
//           setcount(e.target.value);
//         }}
//         count="count"
//       ></input>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => {
//           setname(e.target.value);
//         }}
//         name="name"
//       ></input>
//       <input
//         type="text"
//         value={country}
//         onChange={(e) => {
//           setcountry(e.target.value);
//         }}
//         country="country"
//       ></input>
//       <br></br>
//       <br></br>
//       <button type="button" onClick={SaveUser}>
//         Save New User
//       </button>
//     </div>
//   );
// }

// export default Basic1;

//****************************Delete Method with API************************************** */
//we see later on

//****************************Previous State in Functional Component********************************** */
// before the current state

// function Basic1() {
//   const [count, setCount] = useState(1);

//   function setUpdateCounter() {
//     let rand = Math.floor(Math.random() * 10);
//     setCount((pre) => {
//       console.log(pre);
//       if (pre - rand < 5) {
//         alert("topup");
//       }
//       return rand;
//     });
//   }
//   return (
//     <div>
//       <h1>Previous State</h1>
//       <h1>{count}</h1>
//       <button onClick={setUpdateCounter}>Click Me to Update Counter</button>
//     </div>
//   );
// }

//export default Basic1;

//**************************************Previous Props With Hooks********************************* */
//

// function Basic1(props) {
//   const lastVal = useRef();
//   useEffect(() => {
//     lastVal.current = props.count;
//   });
//   const previousProps = lastVal.current;
//   return (
//     <div>
//       <h1> Current value:{props.count}</h1>
//       <h1> Previous value:{previousProps}</h1>
//     </div>
//   );
// }

// export default Basic1;


// function App() {
//     const[count, setCount] =useState(0);
//     return (
//       <div className="App">
  
//        <Basic1 count={count}/>
//        <button onClick={()=>setCount(Math.floor(Math.random()*10))}>Update Counter</button>
//       </div>
//     );
//   }
  
//   export default App;
  


//*****************************************Context API************************************ */
//Help to send data from anycomponent eg. API through App -> Basic1 


//****************************************Interview Questions******************************************** */
// State: as like variable to store data . then why should we not use variable? -> the answer is to in case of variable our component not rerender.but in case of state it happens.we cant use state outside the component.
// whenever we need to transfer data within component we use state while for one to another component we use props.
//we cant update props where we have recieved 




