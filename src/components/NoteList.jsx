function NoteList({ notes, onDelete }) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default NoteList;

function NoteItem({ note, onDelete }) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="note-item">
      <div className="note-item__header">
        <div className="note_item__details">
          <div className="title">{note.title}</div>
          <div className="desc">{note.description}</div>
        </div>
        <div className="actions">
          <button onClick={() => onDelete(note.id)}>❌</button>
          <input type="checkbox" name="" id="" />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </div>
    </div>
  );
}
