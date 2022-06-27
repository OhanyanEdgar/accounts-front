import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Table from "./Table/Table"
import {User} from './User/User'

function App() {
  return (

    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/user/:id" element={<User /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
