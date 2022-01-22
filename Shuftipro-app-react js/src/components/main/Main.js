import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
import { useStyles } from "./MainStyles";
import Test from "../pages/Test";
import { Box } from "@material-ui/core";
import {  Route, Routes} from 'react-router-dom';
import KYCComponent from "../pages/KYCComponent";
import AMLCheckForIndividual from "../pages/AMLCheckForIndividual";
import AMLCheckForBusiness from "../pages/AMLCheckForBusiness";




export default function Main() {

    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerOpen = () => {
        setMobileOpen(!mobileOpen);
    };
    const handleDrawerClose = () => {
        setMobileOpen(false);
    };
    return (
        <div>
            <Navbar handleDrawerOpen={handleDrawerOpen} />

            <Sidenav
                mobileOpen={mobileOpen}
                handleDrawerOpen={handleDrawerOpen}
                handleDrawerClose={handleDrawerClose}
            />
            <Box className={classes.wrapper}>
             <Routes>
                <Route exact path='/' element={<Test/>}/>
                <Route path='/KYC' element={<KYCComponent/>}/>
                <Route path='/AML' element={<AMLCheckForIndividual/>}/>
                <Route path='/AMLForBusiness' element={<AMLCheckForBusiness/>}/>
            </Routes> 
            </Box>
           
        </div >
    );
}