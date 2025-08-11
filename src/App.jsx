import "./App.css";
import AddNewNote from "./components/AddNewNote";
import { useState } from "react";
import NoteList from "./components/NoteList";

function App() {
  // state uplifting from AddNewNote component
  const [notes, setNotes] = useState([]);
  const handleAddNote = (newNote) => setNotes([...notes, newNote]);

  // deleting notes
  const handleDeleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  return (
    <div className="container">
      <div className="note-header"></div>
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          <NoteList notes={notes} onDelete={handleDeleteNote} />
        </div>
      </div>
    </div>
  );
}

export default App;
