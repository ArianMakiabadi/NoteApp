import "./App.css";
import AddNewNote from "./components/AddNewNote";
import { useState } from "react";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
import { NotesProvider } from "./context/NotesContext";

function App() {
  const [sortBy, setSortBy] = useState("");

  return (
    <NotesProvider>
      <div className="container">
        <NoteHeader onSort={(e) => setSortBy(e.target.value)} sortBy={sortBy} />
        <div className="note-app">
          <AddNewNote />
          <div className="note-container">
            <NoteStatus />
            <NoteList sortBy={sortBy} />
          </div>
        </div>
      </div>
    </NotesProvider>
  );
}

export default App;
