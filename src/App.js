import React, { Component } from "react";
import "./App.css";
import Tasks from "./components/Tasks";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";

class App extends Component {
  render() {
    return (
      // <ul>
      //   <input type='text'
      //   name='user'
      //  // onChange={(e) => set_qname(e.target.value)}

      //   ></input>
      //   <button onClick={onCreate}>Login</button>
      //   {/* <input
      //     value={q_name}
      //     onChange={(e) => set_qname(e.target.value)}
      //   /> */}
      //   {/* <button onClick={onCreate}>Create</button> */}
      //   {quiz.map((test) => (
      //     <li key={test.name}>
      //       {test.name}
      //        {/* <UpdateQ test={test} />  */}
      //     </li>
      //   ))}
      // </ul>

      <Router>
        <div>
          <Redirect from="/app" to="/components/login" />
          <Route path="/components/task" component={Tasks} />
          <Route path="/components/login" component={Login} />
          <Route path="/components/register" component={Register} />
          <Route path="/components/logout" component={Logout} />
        </div>
      </Router>
    );
  }
}

//   const [quiz, setQuiz] = useState([]);
//  // const [q_name, set_qname] = React.useState("");
//  const [user, setUser] = React.useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       const db = firebase.firestore();
//       const data = await db.collection("quiz").get();
//       // setSpells(data.docs.map((doc) => doc.data()));
//       setQuiz(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     };
//     fetchData();
//   }, []);

//   // const onCreate = () => {
//   //   const db = firebase.firestore();
//   //   db.collection("quiz").add({ name: q_name });
//   //   setQuiz([...quiz, { name: q_name }]);
//   // };

//   const onCreate = () => {

//   };

export default App;
