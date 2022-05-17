import React from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import { Cancel, Check } from '@material-ui/icons';
import Layout from '../Layout';
import './CreateUser.css'

const CreateUser = () => {

    return(
        <Layout>
            <div className='container'>
                <Typography color='primary' variant="h4">Añadir cliente</Typography>
                <form className='container__form'>
                    <div className='wrapper'>
                        <TextField type='number' className='box' id="outlined-basic" label="Cedula" variant="outlined" autoFocus/>
                        <TextField type='text' className='box' id="outlined-basic" label="Nombres" variant="outlined" />
                    </div>
                    <div className='wrapper'>
                        <TextField type='text' className='box' id="outlined-basic" label="Apellidos" variant="outlined" autoComplete='off'/>
                        <TextField type='number' className='box' id="outlined-basic" label="Primera compra" variant="outlined" />
                    </div>

                    <div className='wrapper__buttons'>
                        <div className='wrapper__button'>
                            <Button size="large" variant="outlined" startIcon={<Cancel />}>
                                Cancelar
                            </Button>
                        </div>
                        <div className='wrapper__button'>
                        <Button size="large" variant="contained" endIcon={<Check />}>
                            Guardar
                        </Button>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default CreateUser;