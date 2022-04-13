import React, {useState} from 'react';
import {Table, IconButton, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper} from '@material-ui/core';
import { EditOutlined, DeleteForeverOutlined } from '@material-ui/icons';
import './Datatable.css';

const Datatable = () => {


  const [users, setUsers] = useState([
    {id: 1, cedula: 123456789, nombres: 'John', apellidos: 'Rojas', compras: 50000, puntos: 500, active: 'Y'},
    {id: 2, cedula: 987654321, nombres: 'Madelyn', apellidos: 'Sanchez', compras: 75000, puntos: 750, active: 'Y'},
    {id: 3, cedula: 987654321, nombres: 'Madelyn', apellidos: 'Sanchez', compras: 75000, puntos: 750, active: 'Y'},
    {id: 4, cedula: 987654321, nombres: 'Madelyn', apellidos: 'Sanchez', compras: 75000, puntos: 750, active: 'Y'},
    {id: 5, cedula: 987654321, nombres: 'Madelyn', apellidos: 'Sanchez', compras: 75000, puntos: 750, active: 'Y'},
    {id: 6, cedula: 987654321, nombres: 'Madelyn', apellidos: 'Sanchez', compras: 75000, puntos: 750, active: 'Y'},
    {id: 7, cedula: 987654321, nombres: 'Madelyn', apellidos: 'Sanchez', compras: 75000, puntos: 750, active: 'Y'},
    {id: 8, cedula: 987654321, nombres: 'Madelyn', apellidos: 'Sanchez', compras: 75000, puntos: 750, active: 'Y'},
    {id: 9, cedula: 987654321, nombres: 'Madelyn', apellidos: 'Sanchez', compras: 75000, puntos: 750, active: 'Y'},
    {id: 10, cedula: 987654321, nombres: 'Madelyn', apellidos: 'Sanchez', compras: 75000, puntos: 750, active: 'Y'},
    {id: 11, cedula: 987654321, nombres: 'Madelyn', apellidos: 'Sanchez', compras: 75000, puntos: 750, active: 'Y'},
    {id: 12, cedula: 987654321, nombres: 'Madelyn', apellidos: 'Sanchez', compras: 75000, puntos: 750, active: 'Y'},
    {id: 13, cedula: 987654321, nombres: 'Madelyn', apellidos: 'Sanchez', compras: 75000, puntos: 750, active: 'Y'},
    {id: 14, cedula: 987654321, nombres: 'Madelyn', apellidos: 'Sanchez', compras: 75000, puntos: 750, active: 'Y'},
    {id: 15, cedula: 987654321, nombres: 'Madelyn', apellidos: 'Sanchez', compras: 75000, puntos: 750, active: 'Y'},
    {id: 16, cedula: 987654321, nombres: 'Madelyn', apellidos: 'Sanchez', compras: 75000, puntos: 750, active: 'Y'},
    {id: 17, cedula: 987654321, nombres: 'Madelyn', apellidos: 'Sanchez', compras: 75000, puntos: 750, active: 'Y'},
    {id: 18, cedula: 123698745, nombres: 'Carlos', apellidos: 'Rodriguez', compras: 26000, puntos: 260, active: 'Y'}
    ]);

  return (
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
          {users.map(user => (
            user.active === 'Y' ?
              <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.cedula}</TableCell>
              <TableCell>{user.nombres}</TableCell>
              <TableCell>{user.apellidos}</TableCell>
              <TableCell>$ {user.compras}</TableCell>
              <TableCell>{user.puntos}</TableCell>
              <TableCell>
                <IconButton onClick={() => console.log(user.cedula)} size='small' color='primary'>
                  <EditOutlined/>
                </IconButton>
                <IconButton onClick={() => console.log(user.cedula)} size='small' color='secondary'>
                  <DeleteForeverOutlined/>
                </IconButton>
              </TableCell>
            </TableRow>
            :
            null
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Datatable