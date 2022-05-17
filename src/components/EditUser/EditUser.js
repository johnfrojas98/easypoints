import React, {useState} from "react";
import { Button, Image, Modal } from 'semantic-ui-react';
import { EditOutlined, Add } from "@material-ui/icons";
import {Button as ButtonCreate} from '@material-ui/core';
import './EditUser.css';

const EditUser = ({typeModal}) => {

    const [open, setOpen] = useState(false)
    console.log(typeModal);

    return (
            <Modal
                style={{marginTop: 35}}
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                trigger={typeModal === 'edit' ? 
                    <EditOutlined/>
                    :
                    <ButtonCreate size="large"  endIcon={<Add />}>
                        Añadir usuario
                    </ButtonCreate>
                    }
                
            >
                <Modal.Content image scrolling>
                    <Modal.Description>
                    <p>
                        This is an example of expanded content that will cause the modal's
                        dimmer to scroll.
                    </p>

                    <Image
                        src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                        style={{ marginBottom: 10 }}
                    />
                    <Image
                        src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                        style={{ marginBottom: 10 }}
                    />
                    <Image
                        src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                        style={{ marginBottom: 10 }}
                    />
                    <Image
                        src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                        style={{ marginBottom: 10 }}
                    />
                    <Image
                        src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                        style={{ marginBottom: 10 }}
                    />
                    <Image
                        src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                        style={{ marginBottom: 10 }}
                    />
                    <Image
                        src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                        style={{ marginBottom: 10 }}
                    />
                    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button basic color='red' onClick={() => setOpen(false)}>
                        Cancelar
                    </Button>
                    <Button onClick={() => setOpen(false)} primary>
                        {typeModal === 'edit' ? 'Guardar cambios' : 'Crear'}
                    </Button>
                </Modal.Actions>
            </Modal>
        
    )
}   

export default EditUser;