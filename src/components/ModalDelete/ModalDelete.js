import React, {useState} from "react";
import { Button, Header, Modal } from 'semantic-ui-react';
import {DeleteForeverOutlined} from '@material-ui/icons';

const ModalDelete = ({userDe}) => {
    const [open, setOpen] = useState(false)

    return (
        <Modal
            closeIcon
            open={open}
            trigger={<DeleteForeverOutlined/>}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            size='tiny'
        >
            <Header icon='user delete' content='¿Eliminar este usuario?' />
            <Modal.Content>
                <p>Cedula: {userDe.cedula} - Nombre: {userDe.nombre} {userDe.apellido}</p>
            </Modal.Content>
            <Modal.Actions>
                <Button basic color='red' onClick={() => setOpen(false)}>
                    Cancelar
                </Button>
                <Button color="blue" onClick={() => setOpen(false)}>
                    Si
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ModalDelete;