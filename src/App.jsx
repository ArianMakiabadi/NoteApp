import "./App.css";
import AddNewNote from "./components/AddNewNote";
import { useReducer, useState } from "react";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";

function App() {
  function notesReducer(notes, { type, payload }) {
    switch (type) {
      case "add": {
        return [...notes, payload];
      }
      case "delete": {
        return notes.filter((note) => note.id !== payload);
      }
      case "complete": {
        return notes.map((note) =>
          note.id === payload
            ? { ...note, isCompleted: !note.isCompleted }
            : note
        );
      }
      default:
        throw new Error("Unknown error" + type);
    }
  }

  //! Hooks
  const [notes, dispatch] = useReducer(notesReducer, []);
  const [sortBy, setSortBy] = useState("");

  //! Handlers
  const handleAddNote = (newNote) =>
    dispatch({ type: "add", payload: newNote });

  const handleDeleteNote = (id) => {
    dispatch({ type: "delete", payload: id });
  };

  const handleCompleteNote = (e) => {
    const noteId = Number(e.target.value);
    dispatch({ type: "complete", payload: noteId });
  };

  // Return notes; sorted according to the current sort option
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
