import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  withStyles,
  IconButton,
  Typography,
  withWidth,
  isWidthUp,
  Toolbar,
  makeStyles,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const styles = (theme) => ({
  root: {
    color: "#faf8f9",
  },
  closeIcon: {
    marginRight: theme.spacing(0.5),
    color: "#171717",
  },
  headSection: {
    width: 200,
    color: "#f68a1e !important",
    backgroundColor: "#faf8f9",
  },
  blackList: {
    backgroundColor: "#faf8f9",
    height: "100%",
    width: "100%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  noDecoration: {
    textDecoration: "none !important",
    color: "#171717",

    textAlign: "center !important",
  },
});

function NavigationDrawer(props) {
  const {
    width,
    open,
    onClose,
    anchor,
    classes,
    menuItems,
    selectedItem,
    theme,
  } = props;

  useEffect(() => {
    window.onresize = () => {
      if (isWidthUp("sm", width) && open) {
        onClose();
      }
    };
  }, [width, open, onClose]);

  return (
    <Drawer
      className={classes.root}
      variant="temporary"
      open={open}
      onClose={onClose}
      anchor={anchor}
    >
      <Toolbar className={classes.headSection}>
        <ListItem
          style={{
            paddingTop: theme.spacing(0),
            paddingBottom: theme.spacing(0),
            height: "100%",
            justifyContent: "flex-end",
          }}
          disableGutters
        >
          <ListItemIcon className={classes.closeIcon}>
            <IconButton onClick={onClose} aria-label="Close Navigation">
              <CloseIcon color="secondary" />
            </IconButton>
          </ListItemIcon>
        </ListItem>
      </Toolbar>
      <List className={classes.blackList}>
        {menuItems.map((element) => {
          if (element.link) {
            return (
              <Link
                key={element.name}
                to={element.link}
                className={classes.noDecoration}
                onClick={onClose}
              >
                <ListItem
                  button
                  selected={selectedItem === element.name}
                  /**
                   * We disable ripple as it will make a weird animation
                   * with primary and secondary color
                   */
                  disableRipple
                  disableTouchRipple
                >
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" className="text-white">
                        {element.name}
                      </Typography>
                    }
                  />
                </ListItem>
              </Link>
            );
          }
          return (
            <ListItem button key={element.name} onClick={element.onClick}>
              <ListItemText
                primary={
                  <Typography variant="subtitle1" className="text-white">
                    {element.name}
                  </Typography>
                }
              />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}

NavigationDrawer.propTypes = {
  anchor: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  selectedItem: PropTypes.string,
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(NavigationDrawer)
);
