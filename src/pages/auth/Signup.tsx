import { Navbar } from '../../components/Navbar'
import React, { useState } from 'react'
import {
    TextField,
    Button,
    Container,
    Paper,
    Typography,
    Box,
    Link
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        // Basic validation check
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        alert("Account created successfully!");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col">
            <Navbar />
            <Container component="main" maxWidth="xs" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', py: 4 }}>
                <Paper
                    elevation={6}
                    sx={{
                        p: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        borderRadius: 4,
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    <Typography component="h1" variant="h4" sx={{ mb: 1, fontWeight: '800', color: '#111827' }}>
                        Create Account
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                        Join us to stay updated with the latest news
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Full Name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                            value={formData.name}
                            onChange={handleChange}
                            variant="outlined"
                            sx={{ mb: 1 }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                            variant="outlined"
                            sx={{ mb: 1 }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                            value={formData.password}
                            onChange={handleChange}
                            variant="outlined"
                            sx={{ mb: 1 }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            variant="outlined"
                            sx={{ mb: 3 }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                py: 1.5,
                                mb: 3,
                                textTransform: 'none',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                borderRadius: '12px',
                                boxShadow: '0 4px 6px -1px rgba(79, 70, 229, 0.2)',
                                bgcolor: '#4f46e5',
                                '&:hover': {
                                    bgcolor: '#4338ca',
                                    boxShadow: '0 10px 15px -3px rgba(79, 70, 229, 0.3)',
                                    transform: 'translateY(-2px)'
                                },
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Sign Up
                        </Button>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Typography variant="body2" color="text.secondary">
                                Already have an account?{' '}
                                <Link component={RouterLink} to="/login" variant="body2" sx={{ fontWeight: '600', color: '#4f46e5', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                    Login
                                </Link>
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </div>
    )
}

export default Signup
