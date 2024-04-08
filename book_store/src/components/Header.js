import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography, InputBase, Button, Box } from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [value, setValue] = useState(0); // Initialize value for Tabs
  const [filter, setFilter] = useState(""); // State variable for search filter
  const navigate = useNavigate();

  const handleFilter = (event) => {
    setFilter(event.target.value); // Update search filter value
    navigate(`/books?search=${event.target.value}`);
  };

  return (
    <div className="navbar">
      <AppBar sx={{ backgroundColor: "#3C486B" }} position="sticky">
        <Toolbar>
          <NavLink to={"/"} style={{ color: "white" }}>
            <Typography>
              <LibraryBooksIcon />
            </Typography>
          </NavLink>

          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
          <div style={{marginRight: '130px', minWidth:"fit-content", display:"flex", alignItems:"center", marginTop:'10px', marginBottom:'10px', borderRadius:"50px", overflow:"hidden"  }}>
            {/* {/ Box containing search filter input and apply button /} */}
            <Box sx={{ display: 'flex', alignItems: 'center', background:"white", height:"35px", color:"black" }}>
              <InputBase
                placeholder="Search..."
                value={filter}
                onChange={handleFilter}
                style={{ color: 'white', padding: '0 20px', color:"black" }}
              />
            </Box>
          </div>
            <Tab LinkComponent={NavLink} to="/add" label="Add Product" />
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
            <Tab LinkComponent={NavLink} to="/about" label="Abouts us" />
          </Tabs>

        </Toolbar>
      </AppBar>
    </div>
  );
}
