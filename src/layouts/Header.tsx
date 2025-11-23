import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axiosClient";
import LoginRegisterButtons from "../components/LoginRegisterButtons";

const Header = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const getUserDetails: any = async () => {
      try {
        const res = await api.get("/api/user/me");
        console.log(res.data.data.name);
        if (res.data?.data?.name) {
          setUser(res.data.data.name);
        } else {
          setUser("");
        }
      } catch (err) {
        setUser("");
      }
    };

    getUserDetails();
  }, []);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#167A00" }}>
      <Toolbar>
        {/* Left: Logo or menu icon */}
        <IconButton
          edge="start"
          color="inherit"
          sx={{
            marginRight: "20px",
          }}
        >
          fvdf
        </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Sarusara Agro
        </Typography>

        <Box sx={{ display: "flex", gap: 3, flexGrow: 1 }}>
          <Button
            color="inherit"
            component={Link}
            to="/products"
            sx={{
              textTransform: "capitalize",
              fontSize: "16px",
              "&:hover": {
                backgroundColor: "#0F4F00", // hover color
              },
            }}
          >
            Products
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/advertisement"
            sx={{
              textTransform: "capitalize",
              fontSize: "16px",
              "&:hover": {
                backgroundColor: "#0F4F00", // hover color
              },
            }}
          >
            Advertisement
          </Button>
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          {
            user === "" ? (
              <LoginRegisterButtons />
            ) : (
              <Typography variant="subtitle1">{user}</Typography>
            ) // logged user show the user name
          }
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
