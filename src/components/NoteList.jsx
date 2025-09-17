import { useNotes, useNotesDispatch } from "../context/NotesContext";

function NoteList({ sortBy, onDelete, onComplete }) {
  const notes = useNotes();

  // Return notes; sorted according to the current sort option
  let sortedNotes = notes;
  if (sortBy === "earliest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    ); // a -b  => a > b ? 1 : -1

  if (sortBy === "latest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    ); // b -a  => a > b ? -1 : 1

  if (sortBy === "completed")
    sortedNotes = [...notes].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );

  return (
    <div className="note-list">
      {sortedNotes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
}

export default NoteList;

function NoteItem({ note }) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const dispatch = useNotesDispatch();

  return (
    <div className={`note-item ${note.isCompleted ? "completed" : ""}`}>
      <div className="note-item__header">
        <div className="note_item__details">
          <div className="title">{note.title}</div>
          <div className="desc">{note.description}</div>
        </div>
        <div className="actions">
          <button
            onClick={() => dispatch({ type: "delete", payload: note.id })}
          >
            ❌
          </button>
          <input
            onChange={(e) => {
              const noteId = Number(e.target.value);
              dispatch({ type: "complete", payload: noteId });
            }}
            type="checkbox"
            checked={note.isCompleted}
            value={note.id}
          />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </div>
    </div>
  );
}
