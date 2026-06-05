import "./App.css";
import Editor from "./components/Editor";
import logo from './assets/logo.png';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { v4 as uuid } from "uuid";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to={`/docs/${uuid()}`} />} />
        <Route path="/docs/:id" element={<Editor />} />
      </Routes>
    </Router>
  );
}
function Navbar() {
  return (
    <img src={logo} alt="Logo" width="50" />
  );
}

export default App;
