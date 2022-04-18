import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Mail from "./components/Mail";
import Game from "./components/Game";
import Inbox from "./components/Inbox";
import Outbox from "./components/Outbox";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="mail" element={<Mail />}>
            <Route path="inbox" element={<Inbox />} />
            <Route path="outbox" element={<Outbox />} />
          </Route>
          <Route path="game" element={<Game />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
