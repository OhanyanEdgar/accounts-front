import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Table } from "./Table/Table"
import { User } from './User/User'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Table />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
