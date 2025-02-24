import React from 'react';
import { Box, TextField, Button, Select, MenuItem, InputLabel, FormControl, Typography } from '@mui/material';

const DriverModule: React.FC = () => {
    const [activeTab, setActiveTab] = React.useState('Basic');

    return (
        <Box sx={{ width: '80%', maxWidth: 1000, margin: 'auto', marginTop: 0, padding: 3, backgroundColor: '#fff' }}>
            <Box display="flex" justifyContent="space-between" mb={2}>
                <Typography
                    variant="h6"
                    sx={{
                        color: 'black',
                        borderBottom: activeTab === 'Basic' ? '3px solid blue' : 'none',
                        cursor: 'pointer'
                    }}
                    onClick={() => setActiveTab('Basic')}
                >
                    Basic
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        color: 'black',
                        borderBottom: activeTab === 'Other Details' ? '3px solid blue' : 'none',
                        cursor: 'pointer'
                    }}
                    onClick={() => setActiveTab('Other Details')}
                >
                    Other Details
                </Typography>
            </Box>

            <Box display="flex" justifyContent="center" mb={2}>
                <Box sx={{ width: 80, height: 80, borderRadius: '50%', bgcolor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</Box>
            </Box>

            <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2}>
                <TextField label="Driver ID" variant="outlined" InputLabelProps={{ style: { backgroundColor: '#fff' } }} />
                <TextField label="Driver Name" variant="outlined" InputLabelProps={{ style: { backgroundColor: '#fff' } }} />
                <TextField label="DOB" variant="outlined" InputLabelProps={{ style: { backgroundColor: '#fff' } }} />

                <FormControl>
                    <InputLabel style={{ backgroundColor: '#fff' }}>Blood Group</InputLabel>
                    <Select>
                        <MenuItem value="O+">O+</MenuItem>
                        <MenuItem value="A+">A+</MenuItem>
                    </Select>
                </FormControl>
                <TextField label="Phone Number" variant="outlined" InputLabelProps={{ style: { backgroundColor: '#fff' } }} />
                <FormControl>
                    <InputLabel style={{ backgroundColor: '#fff' }}>Gender</InputLabel>
                    <Select>
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                    </Select>
                </FormControl>

                <FormControl>
                    <InputLabel style={{ backgroundColor: '#fff' }}>Vehicle Type</InputLabel>
                    <Select>
                        <MenuItem value="Truck">Truck</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel style={{ backgroundColor: '#fff' }}>Work Type</InputLabel>
                    <Select>
                        <MenuItem value="Full-Time">Full-Time</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel style={{ backgroundColor: '#fff' }}>Department</InputLabel>
                    <Select>
                        <MenuItem value="Logistics">Logistics</MenuItem>
                    </Select>
                </FormControl>

                <TextField label="Joining Date" variant="outlined" InputLabelProps={{ style: { backgroundColor: '#fff' } }} />
                <TextField label="Email" variant="outlined" InputLabelProps={{ style: { backgroundColor: '#fff' } }} />
            </Box>

            <Typography variant="subtitle1" mt={2} mb={1}>Address</Typography>
            <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2}>
                <FormControl>
                    <InputLabel style={{ backgroundColor: '#fff' }}>State</InputLabel>
                    <Select>
                        <MenuItem value="State1">State1</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel style={{ backgroundColor: '#fff' }}>District</InputLabel>
                    <Select>
                        <MenuItem value="District1">District1</MenuItem>
                    </Select>
                </FormControl>
                <TextField label="Address" variant="outlined" InputLabelProps={{ style: { backgroundColor: '#fff' } }} />
            </Box>

            <Box display="flex" justifyContent="flex-end" gap={2} mt={3}>
                <Button variant="contained" color="secondary">Cancel</Button>
                <Button variant="contained" color="primary">Next</Button>
            </Box>
        </Box>
    );
};

export default DriverModule;
