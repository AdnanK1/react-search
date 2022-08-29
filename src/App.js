import "./App.css";
import {Users} from "./user"

function App() {
  return (
    <div className="App">
      <input type="text" placeholder="Search..." className="search" />
      <ul className="list">
        {Users.map((user)=>(
          <li className="listItem">{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
