import React from "react";

type SearchBarProps = {
  className?: string;
};

const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      type="text"
      placeholder="Search..."
      className={className}
    />
  );
};

export default SearchBar;
