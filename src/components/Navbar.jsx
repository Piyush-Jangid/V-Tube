import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: 'white', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <span style={{ color: '#5991e5',fontWeight: 'bold',fontSize: '35px' ,padding: '2px'}}>VTube</span>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;