import React, { useState, useCallback } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Hidden,
  IconButton,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { NavLink as Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";

import NavigationDrawer from "./NavigationDrawer";

// import Logo from "../../resources/Logo/M.png";

const Header = () => {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const handleMobileDrawerOpen = useCallback(() => {
    setIsMobileDrawerOpen(true);
  }, [setIsMobileDrawerOpen]);

  const handleMobileDrawerClose = useCallback(() => {
    setIsMobileDrawerOpen(false);
  }, [setIsMobileDrawerOpen]);

  const useStyles = makeStyles({
    root: {
      zIndex: 0,
      boxShadow: "none",
    },
    contain: {
      width: "80vw",
      margin: "auto",
    },
    ul: {
      listStyle: "none",
      display: "flex !important",
      justifyContent: "space-around",
      textAlign: "right",
    },
    li: {
      textDecoration: "none",
      color: "#171717",
      paddingRight: 10,
    },
    img: {
      height: 40,
      width: 250,
      aspectRatio: "auto",
      alignItems: "left",
    },
    toolbar: {
      width: "90vw",
    },
    appBar: {
      // boxShadow: "0px 0.5px 0px 0px",
      color: "#171717",
    },
  });

  const menuItems = [];

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="secondary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Grid item sm={8} xs={11}>
            <Link to="/">
              <img className={classes.img} src={""} alt="Lobuddy" />
            </Link>
          </Grid>
          <Grid item md={4} sm={1}>
            <Hidden mdUp>
              <IconButton
                color="primary"
                onClick={handleMobileDrawerOpen}
                aria-label="Open Navigation"
              >
                <MenuIcon color="primary" />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              <div className={classes.ul}></div>
            </Hidden>
          </Grid>
        </Toolbar>

        <Toolbar>
          <Grid item xs={7} sm={2}>
            <Typography variant="body1">
              <Link className={classes.li} to="/contact">
                HOW LOBUDDY WORKS?
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={5} sm={2}>
            <Typography variant="body1">
              <Link className={classes.li} to="/contact">
                OUR BEST DEALS
              </Link>
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
      <NavigationDrawer
        menuItems={menuItems}
        anchor="right"
        open={isMobileDrawerOpen}
        onClose={handleMobileDrawerClose}
      />
    </div>
  );
};

export default Header;
