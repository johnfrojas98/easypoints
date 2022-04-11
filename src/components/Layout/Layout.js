import React, {useState} from 'react';
import {AppBar, Toolbar, CssBaseline, IconButton, Typography, Button, Drawer, Paper, Divider, Container} from '@material-ui/core';
import {Menu as MenuIcon, Close as CloseIcon} from '@material-ui/icons';
import LogoLayout from '../../images/logo_layout.png';
import Logo from '../../images/logo_large.png';
import {useNavigate} from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Datatable from '../Datatable'
import './Layout.css';

const Layout = () => {
    const navigate = useNavigate();
    
    const handleLogOut = () => {
        navigate('/');
    }
    
    const [openDrawer, setOpenDrawer] = useState(false);

    const useStyles = makeStyles(theme => ({
        container: {
            marginTop: theme.spacing(15)
        }
    }))

    const classes = useStyles();

    return(
        <>
            <CssBaseline/>
            <AppBar color='primary'>
                <Toolbar>
                    <IconButton edge='start' color='inherit' onClick={() => setOpenDrawer(true)}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography style={{flexGrow: 1}}>
                        <img className='logo__layout' src={LogoLayout} alt="Logo Layout" />
                    </Typography>
                    <Button variant='text' color='inherit' onClick={() => handleLogOut()} >Cerrar sesión</Button>
                </Toolbar>
            </AppBar>
            <Drawer anchor='left' open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <Paper style={{width: 240}} elevation={0}>
                    <div className='container__icon__drawer'>
                        <img className='img__logo__drawer' src={Logo} alt="Logo" />
                        <IconButton edge='end' color='inherit' onClick={() => setOpenDrawer(false)}>
                            <CloseIcon/>
                        </IconButton>
                    </div>
                    <Divider/>
                </Paper>
            </Drawer>
            {/* <EnhancedTable/> */}
            <Container  maxWidth='sm' component={Paper} elevation={4} className={classes.container}>
                <Datatable/>
            </Container>
            <footer className='layout__footer'>
                <Container maxWidth='sm'>
                    <Typography align='center'>easy-points {new Date().getFullYear()} Copyright © Todos los derechos reservados</Typography>
                </Container>
            </footer>
        </>
    )
}

export default Layout;