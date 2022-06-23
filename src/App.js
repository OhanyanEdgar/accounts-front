import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import JsonDataDisplay from "./Table/Table"
import {User} from './User/User'

function App() {
  return (

    <Router>
      <div>
        <Routes>
          <Route path="/" element={<JsonDataDisplay />}>
          </Route>
          <Route path="/user/:id" element={<User /> }>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
