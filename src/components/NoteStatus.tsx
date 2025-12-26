import React from "react";
import { useNotes } from "../context/NotesContext";

const NoteStatus: React.FC = () => {
  const notes = useNotes();
  const countAllNotes = notes.length;
  const countCompletedNotes = notes.filter((note) => note.isCompleted).length;
  const countPendingNotes = countAllNotes - countCompletedNotes;

  if (!countAllNotes)
    return <h2>Your notes will show up here. Add your first note!</h2>;

  return (
    <ul className="note-status">
      <li>
        All <span>{countAllNotes}</span>
      </li>
      <li>
        Completed <span>{countCompletedNotes}</span>
      </li>
      <li>
        Pending <span>{countPendingNotes}</span>
      </li>
    </ul>
  );
};

export default NoteStatus;
