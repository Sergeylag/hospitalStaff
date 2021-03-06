import React from 'react';
// import {AppBar, Box, Tab, Tabs, Typography} from "@mui/material";
// import {makeStyles} from "@mui/styles";
// import {Theme} from '@mui/material/styles';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import {AdminNavBarMain} from "../styles/navbar/admin-nav-bar";
import Api from "../components/api/Api";

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 10,
        backgroundColor: theme.palette.background.paper,
    },
}));

const Admin = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };
    return (
        <AdminNavBarMain>
            <section>
                {/*<div className={classes.root}>*/}
                <div className={classes.root}>
                    <AppBar position="static">
                        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                            <Tab label="Item One" {...a11yProps(0)} />
                            <Tab label="Item Two" {...a11yProps(1)} />
                            <Tab label="Item Three" {...a11yProps(2)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                        adminPages Item One
                        <Api/>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        adminPages Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        adminPages Item Three
                    </TabPanel>
                </div>
            </section>
        </AdminNavBarMain>
    );
};

export default Admin;