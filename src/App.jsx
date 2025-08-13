import "./App.css";
import AddNewNote from "./components/AddNewNote";
import { useState } from "react";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";

function App() {
  // state uplifting from AddNewNote component
  const [notes, setNotes] = useState([]);
  const handleAddNote = (newNote) => setNotes([...notes, newNote]);

  // state uplifting from NoteHeader
  const [sortBy, setSortBy] = useState("");

  // sorting the notes
  const getSortedNotes = () => {
    switch (sortBy) {
      case "earliest":
        return [...notes].sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
      case "latest":
        return [...notes].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      case "completed":
        return [...notes].sort(
          (a, b) => Number(a.isCompleted) - Number(b.isCompleted)
        );
      default:
        return notes;
    }
  };

  // deleting notes
  const handleDeleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  // setting notes to "Completed"
  const handleCompleteNote = (e) => {
    const noteId = Number(e.target.value);
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === noteId ? { ...note, isCompleted: !note.isCompleted } : note
      )
    );
  };

  return (
    <div className="container">
      <NoteHeader onSort={(e) => setSortBy(e.target.value)} sortBy={sortBy} />
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList
            notes={getSortedNotes()}
            sortBy={sortBy}
            onDelete={handleDeleteNote}
            onComplete={handleCompleteNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
