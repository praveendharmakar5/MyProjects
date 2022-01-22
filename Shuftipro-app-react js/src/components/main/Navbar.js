import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";






const useStyles = makeStyles((theme) => ({
  logo: {
    color: "red",
    marginLeft: -5
  },
  toolbar: {
    height: '60px'
  },
  topAvatar: {
    width: '40px',
    height: "40px",
    borderRadius: '50%',
    marginLeft: 980,

  },
  outterDiv: {
    display: "flex",
    flexWrap: "wrap",
    marginRight: 30 + "px",
    marginLeft: -160 + "px",
    padding: 6 + 'px' + ' ' + 18 + 'px' + ' ',
    cursor: "pointer"
  },

}));

export default function Navbar() {

  const classes = useStyles();
  const [windowObject, setWindowObject] = useState();

 
  useEffect(() => {
    if (window && document) {
      setWindowObject(window);
      }
  });


  return (
    <AppBar position='fixed'>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h6' >
          Shufti Pro Integration
        </Typography>
       
        {/* <div id="my_account"  style={{
                                    position: 'absolute',
                                    right: 5,
                                    top: 5,
                                  }}>
          {
            windowObject && (
              <windowObject.MyAccount firstName="praveen"
                lastName="dharmakar"
                loginId="praveen.bansilal@quintiles.com"
                b2cIDP="true"
                myAccountEndpoint="http://localhost:8080/iqvia-persona-endpoint"
              />
            )
          }
        </div> */}
      </Toolbar>
    </AppBar>

  );
}