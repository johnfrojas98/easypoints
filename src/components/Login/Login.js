import React, {useState} from 'react'
import { Grid, Container, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import background_image from '../../images/background_image.jpg';
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons';
import mainLogo from '../../images/logo_large.png';
import {useNavigate} from 'react-router-dom';
import '../../styles/App.css';

const useStyles = makeStyles(theme=>({
  root: {
    backgroundImage: `url(${background_image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh'
  },
  imgLogo: {
    display: 'block',
    margin: 'auto',
    marginTop: '20px',
    width: '200px',
    height: '50px'
  },
  container: {
    opacity: '0.9',
    height: '70%',
    marginTop: theme.spacing(10),
    [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
      marginTop: 0,
      width: '100%',
      height: '100%'
    }
  },
  div: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(3, 0, 2)
  }
}))

const Login = () => {
  const [body, setBody] = useState({nickname: '', password: ''});
  const navigate = useNavigate();
  const classes = useStyles();

  const handleChange = e => {
    setBody({
      ...body,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = () => {
    navigate('/app');
    console.log(body);
  }

  return (
      <Grid container component='main' className={classes.root}>
        <Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
          <img src={mainLogo} alt="Main Logo" className={classes.imgLogo} />
          <div className={classes.div}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component='h1' variant='h5'>Iniciar sesión</Typography>
          <form className={classes.form}>
            <TextField
              fullWidth
              autoFocus
              color='primary'
              margin='normal'
              variant='outlined'
              label='Usuario'
              name='nickname'
              value={body.nickname}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              type='password'
              color='primary'
              margin='normal'
              variant='outlined'
              label='Contraseña'
              name='password'
              value={body.password}
              onChange={handleChange}
            />
            <Button 
              fullWidth
              variant='contained'
              color='primary'
              className={classes.button}
              onClick={() => onSubmit()}
            >
              Ingresar
            </Button>
          </form>
          </div>
        </Container>
      </Grid>
  )
}

export default Login;