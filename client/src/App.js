import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await axios.get("/api/users");
        setUsers(result.data);
        setFilteredUsers(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      }
    };
    fetchUsers();
  }, []);

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Created At",
      selector: (row) => new Date(row.createdAt).toLocaleDateString(),
      sortable: true,
    },
  ];

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearch(value);
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(value) ||
        user.email.toLowerCase().includes(value)
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="App">
      <header className="App-header">
        {error && <p className="error-message">Error: {error}</p>}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleSearch}
            className="search-input"
          />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
        <DataTable
          title="User List"
          columns={columns}
          data={filteredUsers}
          pagination
          highlightOnHover
          striped
        />
      </header>
    </div>
  );
}

export default App;
