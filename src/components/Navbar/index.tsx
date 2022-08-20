import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../../assets/img/fruit-logo.png';
import logoMobile from '../../assets/img/fruit-logo.png';
import './style.css'
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router-dom';

const ResponsiveAppBar = () => {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const navigate = useNavigate();

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleHomeClick = () => {
        navigate("/");
    };

    const handleShopClick = () => {
        navigate("/fruits");
    };

    const handleCartClick = () => {
        navigate("/cart");
    };

    return (
        <AppBar position="sticky" className='app-bar' sx={{ backgroundColor: 'transparent' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src={logo} alt="" id='logo' width={100} height={100} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'orange',
                            textDecoration: 'none',
                        }}
                    >
                        FRUIT SHOP
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <img src={logoMobile} alt="" id='logo-mobile' width={50} height={50} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleHomeClick}>
                                <Typography textAlign="center">Home</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleShopClick}>
                                <Typography textAlign="center">Shop</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button onClick={handleHomeClick} sx={{ color: 'primary', display: 'block', fontSize: '17px' }} >
                            Home
                        </Button>
                        <Button onClick={handleShopClick} sx={{ color: 'primary', display: 'block', fontSize: '17px' }} >
                            Shop
                        </Button>
                    </Box>

                    <Button onClick={handleCartClick}>
                        <Badge badgeContent={10} showZero color='secondary'>
                            <ShoppingCartIcon style={{ color: 'primary', fontSize: '35px' }} />
                        </Badge>
                    </Button>

                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;