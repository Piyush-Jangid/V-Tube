import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#5991e5",
          color: "black",
        }}
        key={category.name}
      >
        <span style={{ color: category.name === selectedCategory ? "white" : "#5991e5", marginRight: "15px" }}>
          {category.icon}
        </span>
        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" ,color: category.name === selectedCategory ? "white" : "black",}}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;