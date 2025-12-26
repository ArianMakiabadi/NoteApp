import "./App.css";
import { useState } from "react";
import NoteHeader from "./components/NoteHeader";
import { NotesProvider } from "./context/NotesContext";
import { SortByType } from "./types/SortBy";
import NoteApp from "./components/NoteApp";

function App() {
  const [sortBy, setSortBy] = useState<SortByType>("latest");

  return (
    <NotesProvider>
      <div className="container">
        <NoteHeader onSort={(value) => setSortBy(value)} sortBy={sortBy} />
        <NoteApp sortBy={sortBy} />
      </div>
    </NotesProvider>
  );
}

export default App;
