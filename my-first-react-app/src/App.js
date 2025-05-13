// function App() {
//   return (
//     <div>
//       <h1>Hello React Beginner 🚀</h1>
//       <p>This is your first React component!</p>
//     </div>
//   );
// }

// export default App;

// function App() {
//   const name = "John";

//   return (
//     <div>
//       <h1>Hello, {name}</h1>
//       <p>This is JSX in action!</p>
//     </div>
//   );
// }

// export default App;


// function Profile(props){
//   return (
//   <div>
//     <h3>{props.username} </h3>
//     <p>{props.bio}</p>
//   </div>
//   );
// }
// function App(){
//   return(
//     <Profile username = "raviteja" bio = "full stack developer" />
//   );
// }
// export default App;

// function Details({name, age, number}){
//   return (
//     <div>
//   <h2> hello, {name}! </h2>
//   <h3> your age is {age} </h3>
//   <h4> and you number is {number} </h4>
//   </div>
//   );
// }
// function App(){
//   return(
//     <Details name = "raviteja" age = "22" number = "9876543210" />
//   );
// }
// export default App;

// function Greeting({person}){
//   return(
//     <h2> hey welcome {person} !!</h2>
//   );
// }
// function App(){
//   return(
//     <div>
//     <Greeting person = "raviteja" />
//     <Greeting person = "teja" />
//     </div>
//   );
// }
// export default App;

// conditional rendering in react
// in react conditional rendering means showing or hiding elements based on certain conditions

// function Welcome ({isloggedin}){
//   if(isloggedin){
//     return <h2> welcome back user!</h2>;
//   }else{
//     return <h2> please login </h2>;
//   }
// }
// function App(){
//   return(
//     <div>
//       <Welcome isloggedin={true}/>
//       <Welcome isloggedin={false}/>
//     </div>
//   );
// }
// export default App;

// function Greeting({name, isadmin}){
//   return(
//     <h2>
//       {isadmin ?  `hello admin how its going ${name}` : `hello user ${name}`}
//     </h2>
//   );
// }
// function App(){
//   return (
//     <div>
//       <Greeting name = "ravi" isadmin={true}/>
//       <Greeting name = "teja" isadmin={false}/>
//     </div>
//   );
// }
// export default App;

// function Status({online}){
//   if(online){
//     return <h1> hey you're online now </h1>
//   }else{
//     return <h1> sorry you're offline! </h1>
//   }
// }
// function App(){
//   return(
//     <div>
//       <Status online={true}/>
//       <Status online={false}/>
//     </div>
//   );
// }
// export default App;

//rendering lists in react
// function NameList(){
//   const names = ["Ravi","teja","vamc","krishna"];
//   return(
//     <div>
//       <h2>friends list: </h2>
//       <ul>
//         {names.map((name,index) =>(
//           <li key = {index} > {name} </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function App(){
//   return (
//     <div>
//       <NameList />
//     </div>
//   );
// }
// export default App;

// function Fruits(){
//   const names = ["apple","banana","orange","grapes","mango"];
//   return(
//     <div>
//       <h2>fruits list:</h2>
//       <ul>
//         {names.map((name,index) => 
//         <li key = {index}>{name}</li>
//         )}
//       </ul>
//     </div>
//   );
// }
// function App(){
//   return(
//     <div>
//       <Fruits />
//     </div>
//   );
// }
// export default App;

//handling events in react
// basic on click event
// function ClickMe(){
//   function handleClick(){
//     alert("button was clicked!");
//   }
// return(
//   <div>
//     <h2>click the button below: </h2>
//     <button onClick={handleClick}>click me</button>
//   </div>
// );
// }
// function App(){
//   return(
//     <div>
//       <ClickMe />
//     </div>
//   );
// }
// export default App;

//useState hook managing state in functional components
// import { useState } from "react";
// function Counter(){
//   const[count, setCount] = useState(0);

//   function increase(){
//     setCount(count + 1);
//   }
//   function decrease(){
//     setCount(count -1);
//   }

//   return(
//     <div>
//       <h2>counter value: {count}</h2>
//       <button onClick={increase}> + </button>
//       <button onClick={decrease}> - </button>
//     </div>
//   );
// }

// function App(){
//   return(
//     <div>
//       <Counter />
//     </div>
//   );
// }
// export default App;

//handling user input with useState
// import { useState } from "react";

// function NameInput(){
//   const [name, setName] = useState("");

//   function handleChange(event){
//     setName(event.target.value);
//   }

//   return(
//     <div>
//       <h2>hello, {name}</h2>
//       <input type = "text" onChange={handleChange} placeholder="enter your name" />
//     </div>
//   );
// }
// function App(){
//   return(
//     <div>
//       <NameInput/>
//     </div>
//   );
// }
// export default App;

//handling multiple inputs in a form using a single useState object\
// import { useState } from "react";

// function SignupFrom(){
//   const [formData , setFormData] = useState({
//     username: "",
//     email: "",
//     password: ""
//   });

// function handleChange(event){
//   const {name , value} = event.target;
//   setFormData((prevData) => ({
//     ...prevData,
//     [name]: value
//   }));
// }

// return(
//   <div>
//     <h2>signup form</h2>
//     <input
//       type="text"
//       name="username"
//       placeholder="enter your username"
//       value={formData.username}
//       onChange={handleChange}
//     />
//     <br />
//     <input
//       type="email"
//       name = "email"
//       placeholder="enter your email"
//       value={formData.email}
//       onChange={handleChange}
//     />
//     <br />
//     <input
//       type="password"
//       name="password"
//       placeholder="please enter your password"
//       value={formData.password}
//       onChange={handleChange}
//     />
//     <br />
//     <p>entered username : {formData.username}</p>
//     <p>entered email: {formData.email}</p>
//     <p>entered password: {formData.password}</p>
//   </div>
// );
// }

// function App(){
//   return(
//     <div>
//       <SignupFrom />
//     </div>
//   );
// }
// export default App;

//handling form submission in react

// import { useState } from "react";

// function ContactForm(){
//   const [formData, setFormData] = useState({
//     name: "",
//     message: ""
//   });

// function handleChange(event){
//   const {name,value} = event.target;
//   setFormData((prev) => ({
//     ...prev,
//     [name]: value
//   }));
// }
// function handleSubmit(event){
//   event.preventDefault();
//   console.log("form submitted! ");
//   console.log("name:",formData.name);
//   console.log("message: ",formData.message);
//   alert(`thank you , ${formData.name}!`);
//   setFormData({name: "",Message: ""});
// }
// return (
//   <form onSubmit={handleSubmit}>
//     <h2> Contact Us</h2>
//     <input
//         type="text"
//         name="name"
//         placeholder="Your Name"
//         value={formData.name}
//         onChange={handleChange}
//       />
//       <br />
//       <textarea
//         name="message"
//         placeholder="Your Message"
//         value={formData.message}
//         onChange={handleChange}
//       />
//       <br />
//       <button type="submit">Send</button>
//     </form>
//   );
// }

// function App() {
//   return (
//     <div>
//       <ContactForm />
//     </div>
//   );
// }

// export default App;

//condtional rendering with state
// import { useState } from "react";
// function Togglemessage(){
//   const[isVisible, setIsVisible] = useState(false);

//   function handleToggle(){
//     setIsVisible(!isVisible);
//   }
//   return (
//     <div>
//       <button onClick={handleToggle}>
//         {isVisible ? "Hide": "Show"} Message
//       </button>
//       {isVisible && <h2>this is a secret message!</h2>}
//     </div>
//   );
// }
// function App(){
//   return(
//     <div>
//       <Togglemessage />
//     </div>
//   );
// }
// export default App;

//simple input box
// import { useState } from "react";
// function FormExample(){
//   const [name, setName] = useState("");

//   function handleChange(e){
//     setName(e.target.value);
//   }
//   function handleSubmit(e){
//     e.preventDefault();
//     alert(`hello,${name}!`);
//   }
//   return(
//     <form onSubmit={handleSubmit}>
//       <h2> enter your name: </h2>
//       <input type = "text" value={name} onChange={handleChange} />
//       <button type = "submit">submit</button>
//     </form>
//   );
// }
// function App(){
//   return (
//     <div>
//       <FormExample />
//     </div>
//   );
// }
// export default App;

//lifting state up
import { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function App(){
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (value) => {
    setCelsius(value);
    setFahrenheit((value * 9) / 5 + 32 );
  };

  const handleFahrenheitChange = (value) => {
    setFahrenheit(value);
    setCelsius(((value - 32)*5)/9);
  };
  return(
    <div>
      <h2>Temperature converter</h2>
      <TemperatureInput
          label = "Celcius"
          temperature={celsius}
          onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
          label = "Fahrenheit"
          temperature={fahrenheit}
          onTemperatureChange={handleFahrenheitChange}
      />
    </div>
  );
}
export default App;