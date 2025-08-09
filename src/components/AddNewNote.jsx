import { useState } from "react";

function AddNewNote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      title,
      description,
      id: Date.now(),
      isCompleted: false,
      createdAt: new Date().toISOString(),
    };

    setTitle("");
    setDescription("");
  };

  return (
    <div className="add-new-note">
      <h2>Add a new note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="text-field"
          placeholder="Title"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="text-field"
          placeholder="Description"
        />
        <button className="btn btn--primary">Submit</button>
      </form>
    </div>
  );
}

export default AddNewNote;
