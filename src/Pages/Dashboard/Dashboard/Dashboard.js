import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Dasboard.css'
import { FaClipboardList,FaUser,FaUserCheck } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { GrUserAdmin } from 'react-icons/gr';

import {
    Link,
    Outlet,
    NavLink

} from "react-router-dom";
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import styled from 'styled-components';

const Wrapper = styled.div`
background: rgb(27,15,224);
background: linear-gradient(90deg, rgba(27,15,224,1) 0%, rgba(13,193,146,1) 0%, rgba(80,182,217,1) 100%);
    height: 100vh;
`;



const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin } = useAuth();
    console.log(admin);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Wrapper>
            <Toolbar />
            <NavLink className="dashboard-link" to="/appointment"> <FaClipboardList/> Appointment</NavLink>
            <NavLink className="dashboard-link" to="/dashboard"> <MdDashboard/> Dashboard</NavLink>
            {admin && <Box>
                <NavLink className="dashboard-link" to={`/dashboard/makeAdmin`}>
                   <FaUserCheck/> Make Admin</NavLink>
                <NavLink className="dashboard-link" to={`/dashboard/addDoctor`}>
                   <FaUser/> Add Doctor</NavLink>
            </Box>}
        </Wrapper>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', backgroundColor: '#f5f6fa' }}>
            <CssBaseline />
            {/* <AppBar
                position="fixed"
                sx={{
                    backgroundColor: '#c7ecee',
                    width: { sm: `calc(100% - ${drawerWidth}px)` },

                    ml: { sm: `${drawerWidth}px` },
                }}
            >

                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography color="black" variant="h6" noWrap component="div">
                    Dashboard
                </Typography>

            </AppBar> */}
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth },height: '100vh', flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Outlet />

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;