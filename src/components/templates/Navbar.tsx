import React from 'react';
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PrintIcon from '@mui/icons-material/Print';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' }, // Changed to include path for routing
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
];

// const morePages = [
//   { name: 'Login', path: '/login' },
//   { name: 'Register', path: '/register' }
// ];

const services = [
  'Business cards',
  'Postcards',
  'Flyers',
  'Brochures',
  'Labels/Stickers',
  'Stationery',
  'Clothing',
  'Bags',
  'Billboard Banners',
  'Menus',
  'Documents'
];


function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <PrintIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ANYPRINT
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
              <MenuIcon />
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
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <PrintIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ANYPRINT
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', marginLeft: 15 }}>
            {pages.map((page) => (
              <React.Fragment key={page.name}>
                {page.name === 'Services' ? (
                  <React.Fragment>
                    <Button
                      key={page.name}
                      onClick={handleOpenNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block', padding: '0 4rem' }}
                    >
                      {page.name}
                    </Button>
                    <Menu
                      id="services-menu"
                      anchorEl={anchorElNav}
                      open={Boolean(anchorElNav)}
                      onClose={handleCloseNavMenu}
                    >
                      {services.map((service) => (
                        <MenuItem key={service} onClick={handleCloseNavMenu}>
                          {service}
                        </MenuItem>
                      ))}
                    </Menu>
                  </React.Fragment>
                ) : (
                  <Button
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block', padding: '0 4rem' }}
                  >
                    {page.name}
                  </Button>
                )}
              </React.Fragment>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            <Button
              sx={{ my: 2, color: 'white', display: 'block', padding: '0 2rem' }}
            >
              Login
            </Button>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Register
            </Button>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
