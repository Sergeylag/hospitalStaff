import React from 'react';
import {AppBar, Box, Tab, Tabs, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Theme} from '@mui/material/styles';

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
        flexGrow: 1,
        backgroundColor: '#74992e' //theme.palette.background.paper,
    },
}));

const Admin = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };
    return (
        <main>
            <section>
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
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        adminPages Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        adminPages Item Three
                    </TabPanel>
                </div>
            </section>
        </main>
    );
};

export default Admin;