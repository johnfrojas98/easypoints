import React, {useState} from 'react';
import {AppBar, Toolbar, CssBaseline, IconButton, Typography, Button, Drawer, Paper, Divider, Container,Tooltip} from '@material-ui/core';
import {Menu as MenuIcon, Close as CloseIcon, Add, Group} from '@material-ui/icons';
import LogoLayout from '../../images/logo_layout.png';
import Logo from '../../images/logo_large.png';
import {useNavigate} from 'react-router-dom';
import AccountMenu from '../AccountMenu/AccountMenu';
// import CreateEdit from '../EditUser/EditUser';
import './Layout.css';
// import CreateUser from '../CreateUser/CreateUser';


const Layout = (props) => {
    const navigate = useNavigate();
    
    const handleLogOut = () => {
        navigate('/');
    }

    const handleCreateUser = () => {
        navigate('/createuser')
    }

    const handleUsers = () => {
        navigate('/app')
    }
    
    const [openDrawer, setOpenDrawer] = useState(false);

    // const useStyles = makeStyles(theme => ({
    //     container: {
    //         marginTop: theme.spacing(1)
    //     }
    // }))

    // const classes = useStyles();

    return(
        <>
            <CssBaseline/>
            <AppBar color='primary' position='relative'>
                <Toolbar>
                    <Tooltip title='Menu' arrow placement="bottom">
                        <IconButton edge='start' color='inherit' onClick={() => setOpenDrawer(true)}>
                            <MenuIcon/>
                        </IconButton>
                    </Tooltip>
                    <Typography style={{flexGrow: 1}}>
                        <img className='logo__layout' src={LogoLayout} alt="Logo Layout" onClick={() => handleUsers()}/>
                        
                    </Typography>
                    {/* <Button variant='text' color='inherit' onClick={() => handleLogOut()} >Cerrar sesión</Button> */}
                    <AccountMenu/>
                </Toolbar>
            </AppBar>
            <Drawer anchor='left' open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <Paper style={{width: 220}} elevation={0}>
                    <div className='container__icon__drawer'>
                        <img className='img__logo__drawer' src={Logo} alt="Logo" onClick={() => handleUsers()} />
                        <IconButton edge='end' color='inherit' onClick={() => setOpenDrawer(false)}>
                            <CloseIcon/>
                        </IconButton>
                    </div>
                    <Divider/>
                    <div className='container__buttons'>
                        <Button onClick={() => handleUsers()} endIcon={<Group/>}>
                            Clientes
                        </Button>
                        <Button onClick={() => handleCreateUser()} endIcon={<Add/>}>
                            Añadir cliente
                        </Button>
                    </div>
                </Paper>
            </Drawer>
            {/* <Container  maxWidth='md' component={Paper} elevation={4} className='container__datatable__users'>
                <Datatable/>
            </Container> */}
            {props.children}
            <footer className='layout__footer'>
                <Container maxWidth='sm'>
                    <Typography align='center'>easy-points {new Date().getFullYear()} Copyright © Todos los derechos reservados</Typography>
                </Container>
            </footer>
        </>
    )
}

export default Layout;