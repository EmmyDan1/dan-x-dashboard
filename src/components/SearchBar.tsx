import React from "react";
import { useEffect } from "react";
import type { User } from "../data/usersData";
import { StatusBadge } from "../features/dashboard/components/Users/StatusBadge";

type SearchBarProps = {
  className?: string;
  userList: User[];
};

const SearchBar: React.FC<SearchBarProps> = ({ className, userList }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [results, setResults] = React.useState<User[]>([]);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setResults([]);
      setDropdownOpen(false);
      return;
    }

    const filtered = userList.filter((user) =>
      user.group.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filtered);
    setDropdownOpen(true);
  }, [searchTerm, userList]);

  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        placeholder="Search group..."
        className={className}
      />

      {dropdownOpen && results.length > 0 && (
        <div className="absolute z-50 mt-2 w-full bg-ivory border border-white/10 rounded-md shadow-md max-h-60 overflow-y-auto">
          {results.map((user) => (
            <div
              key={user.id}
              className="px-4 py-2 hover:bg-white/10 text-black cursor-pointer text-sm flex flex-col"
            >
              <span className="font-semibold">{user.group}</span>
              <span>{user.title}</span>
              <StatusBadge
                label={user.status.label}
                color={user.status.color}
                className="w-24"
              />
            </div>
          ))}
        </div>
      )}

      {dropdownOpen && results.length === 0 && (
        <div className="absolute z-50 mt-2 w-full bg-ivory border border-white/10 rounded-md shadow-md max-h-60 overflow-y-auto">
          <div className="px-4 py-2 hover:bg-white/10 text-black cursor-pointer text-sm">
            No results found
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
