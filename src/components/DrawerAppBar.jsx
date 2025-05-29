import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";

// Icons
import HouseIcon from "@mui/icons-material/House";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";

const drawerWidth = 240;

// Navigation items with section IDs
const navItems = [
  { name: "Home", id: "home", icon: <HouseIcon /> },
  { name: "About", id: "about", icon: <Person2OutlinedIcon /> },
  { name: "Skills", id: "skills", icon: <PsychologyOutlinedIcon /> },
  { name: "Contact", id: "contact", icon: <ContactPageOutlinedIcon /> },
];
const navItemsTwo= [
  { name: "Home", id: "home", icon: <HouseIcon /> },
  { name: "About", id: "about", icon: <Person2OutlinedIcon /> },
  { name: "Skills", id: "skills", icon: <PsychologyOutlinedIcon /> },
  { name: "Contact", id: "contact", icon: <ContactPageOutlinedIcon /> },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Scroll to section
  const navigate = useNavigate();  // Hook to navigate pages
  const location=useLocation()

   const handleNav = (id) => {
    if (id === "resume") {
      navigate("/resume");
    } else {
      if (location.pathname === "/") {
        // already on home, scroll directly
        if (id === "/") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const section = document.getElementById(id);
          if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      } else {
        // navigate to home with scroll info
        navigate("/", { state: { scrollTo: id } });
        setMobileOpen(false); // close drawer on mobile after click

      }
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>

    

     <Typography
    onClick={() => navigate('/')}
    variant="h3"
    component="div"
    mx={2}
    my={3}
    sx={{
      flexGrow: 1,
      fontFamily: "Brush Script MT",
      cursor: "pointer",
      color: "black",
    }}
  >
    Portfolio
  </Typography>
      <List>
  {navItemsTwo.map((item, index) => (
    <React.Fragment key={item.name}>
      <ListItem disablePadding>
        <ListItemButton sx={{ textAlign: "center" }} onClick={() => handleNav(item.id)}>
          {item.icon}
          <ListItemText primary={item.name} sx={{ ml: 1 }} />
        </ListItemButton>
      </ListItem>
      
        <Divider orientation="horizontal" flexItem sx={{ borderColor: "violet", mx: 2 }} />
      
    </React.Fragment>
  ))}
  <ListItem disablePadding>
    <ListItemButton sx={{ textAlign: "center" }} onClick={() => handleNav("resume")}>
      <TextSnippetOutlinedIcon />
      <ListItemText primary="Resume" sx={{ ml: 1 }} />
    </ListItemButton>
  </ListItem>
</List>

    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
      

          <Typography
  onClick={() =>navigate('/')}
  variant="h4"
  component="div"
  mx={2}
  sx={{
    flexGrow: 1,
    display: { xs: "block", sm: "block" },
    fontFamily: "Brush Script MT",
    cursor: "pointer",
    color: "inherit",
    textDecoration: "none",
    textAlign:{xs:"center",sm:"start"}
  }}
>
  Portfolio
</Typography>


          <Box sx={{ display: { xs: "none", sm: "block" } , marginLeft: "auto" }}>
            {navItems.map((item) => (
              <Button key={item.name} sx={{ color: "#fff",ml:1 }} onClick={() => handleNav(item.id)}>
                {item.icon} {item.name}
              </Button>
              
            ))}
            <Button key="resume" sx={{ color: "#fff" }} onClick={() => handleNav("resume")}>
              <TextSnippetOutlinedIcon /> Resume
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
