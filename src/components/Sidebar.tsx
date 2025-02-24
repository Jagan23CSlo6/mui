import React from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Collapse, Typography, Box } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { FaTachometerAlt, FaTruck, FaRoad, FaUser, FaPlus, FaClipboardList } from 'react-icons/fa';
import sidelogo from '../assets/sidelogo.png';

const SidebarMenu: React.FC = () => {
    const [openDriver, setOpenDriver] = React.useState(false);
    const [openVehicle, setOpenVehicle] = React.useState(false);
    const [openTrip, setOpenTrip] = React.useState(false);
    const [minimized, setMinimized] = React.useState(window.innerWidth <= 768);

    const handleResize = () => {
        setMinimized(window.innerWidth <= 768);
    };

    React.useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleDriverClick = () => setOpenDriver(!openDriver);
    const handleVehicleClick = () => setOpenVehicle(!openVehicle);
    const handleTripClick = () => setOpenTrip(!openTrip);

    return (
        <Drawer
            variant="permanent"
            anchor="left"
            sx={{
                width: minimized ? 80 : 256,
                flexShrink: 0,
                mt: '64px',
                '& .MuiDrawer-paper': {
                    width: minimized ? 80 : 256,
                    boxSizing: 'border-box',
                    mt: '64px',
                    overflowX: 'hidden',
                }
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2, borderBottom: 1, borderColor: 'divider' }}>
                <img src={sidelogo} alt="SAKTHI INFRA TEX" style={{ width: 48, height: 48 }} />
                {!minimized && <Typography variant="h6" color="primary" fontWeight="bold">SAKTHI INFRA TEX</Typography>}
            </Box>

            <List>
                <ListItemButton>
                    <ListItemIcon><FaTachometerAlt /></ListItemIcon>
                    {!minimized && <ListItemText primary="Dashboard" />}
                </ListItemButton>

                <ListItemButton onClick={handleDriverClick}>
                    <ListItemIcon><FaUser /></ListItemIcon>
                    {!minimized && <ListItemText primary="Driver Details" />}
                    {!minimized && (openDriver ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>
                <Collapse in={openDriver && !minimized} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}><ListItemIcon><FaClipboardList /></ListItemIcon><ListItemText primary="Driver List" /></ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}><ListItemIcon><FaPlus /></ListItemIcon><ListItemText primary="Add Driver" /></ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}><ListItemIcon><FaClipboardList /></ListItemIcon><ListItemText primary="Driver Report" /></ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton onClick={handleVehicleClick}>
                    <ListItemIcon><FaTruck /></ListItemIcon>
                    {!minimized && <ListItemText primary="Vehicle Details" />}
                    {!minimized && (openVehicle ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>
                <Collapse in={openVehicle && !minimized} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}><ListItemIcon><FaClipboardList /></ListItemIcon><ListItemText primary="Vehicle List" /></ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}><ListItemIcon><FaPlus /></ListItemIcon><ListItemText primary="Add Vehicle" /></ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}><ListItemIcon><FaClipboardList /></ListItemIcon><ListItemText primary="Vehicle Report" /></ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton onClick={handleTripClick}>
                    <ListItemIcon><FaRoad /></ListItemIcon>
                    {!minimized && <ListItemText primary="Trip Details" />}
                    {!minimized && (openTrip ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>
                <Collapse in={openTrip && !minimized} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}><ListItemIcon><FaClipboardList /></ListItemIcon><ListItemText primary="Trip List" /></ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}><ListItemIcon><FaPlus /></ListItemIcon><ListItemText primary="Assign Trip" /></ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}><ListItemIcon><FaClipboardList /></ListItemIcon><ListItemText primary="Trip Report" /></ListItemButton>
                    </List>
                </Collapse>
            </List>
        </Drawer>
    );
};

export default SidebarMenu;
