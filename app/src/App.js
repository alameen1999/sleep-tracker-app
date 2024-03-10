import { Routes, Route } from "react-router-dom";
import "./style.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import SleepEntries from "./pages/SleepEntries/SleepEntries";
import EntryForm from "./pages/EntryForm/EntryForm";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sleep-entries" element={<SleepEntries />} />
        <Route path="/sleep-entries/add" element={<EntryForm />} />
        <Route path="/sleep-entries/add/:id" element={<EntryForm />} />
      </Routes>
    </div>
  );
}

export default App;
