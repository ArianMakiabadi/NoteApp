import { createContext, ReactNode, useContext, useReducer } from "react";
import { Note } from "../types/Note";

type NotesProviderProps = {
  children: ReactNode;
};

type Action =
  | { type: "add"; payload: Note }
  | { type: "delete"; payload: number }
  | { type: "complete"; payload: number };

type NotesContextType = Note[];
type NotesDispatchContextType = React.Dispatch<Action>;

const NotesContext = createContext({} as NotesContextType);
const NotesDispatchContext = createContext({} as NotesDispatchContextType);
function notesReducer(notes: Note[], { type, payload }: Action) {
  switch (type) {
    case "add": {
      return [...notes, payload];
    }
    case "delete": {
      return notes.filter((note) => note.id !== payload);
    }
    case "complete": {
      return notes.map((note) =>
        note.id === payload ? { ...note, isCompleted: !note.isCompleted } : note
      );
    }
    default:
      throw new Error("Unknown error:  " + type);
  }
}

export function NotesProvider({ children }: NotesProviderProps) {
  const [notes, dispatch] = useReducer(notesReducer, []);

  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

export function useNotes() {
  return useContext(NotesContext);
}

export function useNotesDispatch() {
  return useContext(NotesDispatchContext);
}
