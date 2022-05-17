import React, {useState} from 'react';
import {Table, IconButton, InputBase, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Tooltip} from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';
import ModalDelete from '../ModalDelete/ModalDelete';
import EditUser from '../EditUser/EditUser';
import Layout from '../Layout';
import './Datatable.css';

const Datatable = () => {

    const useStyles = makeStyles(theme => ({
      input: {
          marginLeft: theme.spacing(1),
          flex: 1
      },
      iconButton: {
        padding: 10
      },
      paperSearch: {
        width: '40%',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 16,
        margin: '6px 0 4px 6px',
        padding: '2px 4px'
      }
    }));

    const classes = useStyles();

  const [users, setUsers] = useState([
    {id: 1, cedula: 123456789, nombres: 'John Fredy', apellidos: 'Rojas Casilimas', compras: 50000, puntos: 500, active: 'Y'},
    {id: 2, cedula: 54646543543, nombres: 'Madelyn', apellidos: 'Sanchez', compras: 75000, puntos: 750, active: 'Y'},
    {id: 3, cedula: 111111111, nombres: 'Juana', apellidos: 'Cortes', compras: 75000, puntos: 750, active: 'Y'},
    {id: 4, cedula: 534553453, nombres: 'Katalina', apellidos: 'Rodriguez', compras: 75000, puntos: 750, active: 'Y'},
    {id: 5, cedula: 987654321, nombres: 'Carolina', apellidos: 'Delgado', compras: 75000, puntos: 750, active: 'Y'},
    {id: 6, cedula: 987654321, nombres: 'Carlos', apellidos: 'Vargas', compras: 75000, puntos: 750, active: 'Y'},
    {id: 7, cedula: 555555555, nombres: 'Jonathan', apellidos: 'Ruiz', compras: 75000, puntos: 750, active: 'Y'},
    {id: 8, cedula: 654646456, nombres: 'Fabio', apellidos: 'Villareal', compras: 75000, puntos: 750, active: 'Y'},
    {id: 9, cedula: 333333333, nombres: 'Martina', apellidos: 'Gomez', compras: 75000, puntos: 750, active: 'Y'},
    {id: 10, cedula: 987654321, nombres: 'Lorena', apellidos: 'Bermudez', compras: 75000, puntos: 750, active: 'Y'},
    {id: 11, cedula: 987654321, nombres: 'Andrea', apellidos: 'Sanchez', compras: 75000, puntos: 750, active: 'Y'},
    {id: 12, cedula: 75675757, nombres: 'Andres', apellidos: 'Manrique', compras: 75000, puntos: 750, active: 'Y'},
    {id: 13, cedula: 987654321, nombres: 'Juan', apellidos: 'Caicedo', compras: 75000, puntos: 750, active: 'Y'},
    {id: 14, cedula: 897879789, nombres: 'Orlando', apellidos: 'Escobar', compras: 75000, puntos: 750, active: 'Y'},
    {id: 15, cedula: 777777777, nombres: 'Fernando', apellidos: 'Duque', compras: 75000, puntos: 750, active: 'Y'},
    {id: 16, cedula: 4535345345, nombres: 'Luz', apellidos: 'Guzman', compras: 75000, puntos: 750, active: 'Y'},
    {id: 17, cedula: 987654321, nombres: 'Carmen', apellidos: 'Peña', compras: 75000, puntos: 750, active: 'N'},
    {id: 18, cedula: 999999999, nombres: 'Fredy', apellidos: 'Rodriguez', compras: 26000, puntos: 260, active: 'Y'}
    ]);
  const [searchUser, setSearchUser] = useState(users);

  const [userDelete, setUserDelete] = useState({
    cedula: null,
    nombre: '',
    apellido: ''
  });

  const searchDataUser = (event) => {
    let text = event.target.value
    const usersData = users
    const newData = usersData.filter(item => {

      const itemDataIdentification = item.cedula.toString()
      const textDataIdentification = text
      if (itemDataIdentification.indexOf(textDataIdentification) > -1) return itemDataIdentification.indexOf(textDataIdentification) > -1

      const itemDataName = item.nombres.toUpperCase()
      const textDataName = text.toUpperCase()
      if (itemDataName.indexOf(textDataName) > -1) return itemDataName.indexOf(textDataName) > -1

      const itemDataLastname = item.apellidos.toUpperCase()
      const textDataLastname = text.toUpperCase()
      if (itemDataLastname.indexOf(textDataLastname) > -1) return itemDataLastname.indexOf(textDataLastname) > -1

      return null
    });
    setSearchUser(newData);
  }

  const handleClickOpen = (us) => {
    setUserDelete({
      cedula: us.cedula,
      nombre: us.nombres, 
      apellido: us.apellidos
    });

  };

  // console.log(userDelete);

  return (
    <Layout>
      <Paper elevation={2} className={classes.paperSearch}>
        <InputBase className={classes.input}
          placeholder='Buscar...'
          onChange={text => searchDataUser(text)}
        />
        <IconButton className={classes.iconButton}>
          <SearchIcon/>
        </IconButton>
      </Paper>
      <TableContainer className='datatable__container'>
        <Table>
          <TableHead className='datatable__container__head'>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Cédula</TableCell>
              <TableCell>Nombres</TableCell>
              <TableCell>Apellidos</TableCell>
              <TableCell>Compras</TableCell>
              <TableCell>Puntos</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchUser.map(user => (
              user.active === 'Y' ?
                <TableRow key={user.id} hover>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.cedula}</TableCell>
                <TableCell>{user.nombres}</TableCell>
                <TableCell>{user.apellidos}</TableCell>
                <TableCell>$ {user.compras}</TableCell>
                <TableCell>{user.puntos}</TableCell>
                <TableCell>
                  <Tooltip title='Editar' arrow placement="bottom">
                    <IconButton onClick={() => console.log(user.cedula)} size='small' color='primary'>
                      <EditUser typeModal='edit'/>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title='Eliminar' arrow placement="bottom">
                    <IconButton onClick={() => handleClickOpen(user)} size='small' color='secondary'>
                      <ModalDelete userDe={userDelete}/>
                    </IconButton>
                  </Tooltip>
                  {/* <Tooltip title='Añadir compra' arrow placement="bottom">
                    <IconButton onClick={() => handleClickOpen(user)} size='small' color='success'>
                      <ModalDelete userDe={userDelete}/>
                    </IconButton>
                  </Tooltip> */}
                </TableCell>
              </TableRow>
              :
              null
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  )
}

export default Datatable;