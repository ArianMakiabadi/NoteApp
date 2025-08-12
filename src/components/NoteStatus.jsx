function NoteStatus({ notes }) {
  const countAllNotes = notes.length;
  const countCompletedNotes = notes.filter((note) => note.isCompleted).length;
  const countPendingNotes = countAllNotes - countCompletedNotes;

  if (!countAllNotes) return <h2>You haven’t added any notes.</h2>;

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
}

export default NoteStatus;
