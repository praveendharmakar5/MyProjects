import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@material-ui/core";

import DashboardIcon from "@material-ui/icons/Dashboard";
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { NavLink } from "react-router-dom";
import { useStyles } from "./MainStyles";

export default function SidenavData({ handleDrawerClose }) {
  const classes = useStyles();
  const listItemData = [
    // { label: "Dashboard", link: "/", icon: <DashboardIcon /> },
    { label: "KYC", link: "/KYC", icon: <SettingsApplicationsIcon /> },
    { label: "AML", link: "/AML", icon: <SettingsApplicationsIcon /> },
    // { label: "Logout", link: "/Logout", icon: <ExitToAppIcon /> }
  ];
  return (
    <List>
      {listItemData.map((item, i) => (
        <Button
          size='small'
          className={classes.navButton}
          onClick={() => handleDrawerClose()}
          key={i}>
          <ListItem
            exact
            component={NavLink}
            to={item.link}
            className={classes.navlinks}
            activeClassName={classes.activeNavlinks}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </ListItem>
        </Button>
      ))}
    </List>
  );
}
