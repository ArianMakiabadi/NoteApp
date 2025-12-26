import { SortByType } from "../types/SortBy";

type props = {
  onSort: (e: SortByType) => void;
  sortBy: SortByType;
};

const NoteHeader: React.FC<props> = ({ onSort, sortBy }) => {
  return (
    <div className="note-header">
      <h1>Note App</h1>
      <select
        value={sortBy}
        onChange={(e) => onSort(e.target.value as SortByType)}
      >
        <option value="latest">Sort based on latest notes</option>
        <option value="earliest">Sort based on earliest notes</option>
        <option value="completed">Sort based on completed notes</option>
      </select>
    </div>
  );
};

export default NoteHeader;
